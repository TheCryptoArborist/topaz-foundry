param(
    [string]$RpcUrl = "https://bsc-dataseed.binance.org/",
    [switch]$RunDeploymentDryRun
)

$ErrorActionPreference = "Stop"

function Resolve-Forge {
    $forgeCommand = Get-Command forge -ErrorAction SilentlyContinue
    if ($forgeCommand) {
        return $forgeCommand.Source
    }

    $foundryForge = Join-Path $HOME ".foundry\bin\forge.exe"
    if (Test-Path $foundryForge) {
        return $foundryForge
    }

    throw "Foundry forge was not found. Install Foundry or add $foundryForge to PATH."
}

function Test-RequiredEnv {
    param([string[]]$Names)

    foreach ($name in $Names) {
        if ([string]::IsNullOrWhiteSpace([Environment]::GetEnvironmentVariable($name))) {
            throw "Missing required environment variable: $name"
        }
    }
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$contractsPath = Join-Path $repoRoot "contracts"
$forge = Resolve-Forge

Push-Location $contractsPath
try {
    Write-Host "Using forge: $forge"
    Write-Host "Using RPC: $RpcUrl"

    & $forge build
    & $forge test

    $previousRunTopazFork = $env:RUN_TOPAZ_FORK
    $env:RUN_TOPAZ_FORK = "true"
    try {
        & $forge test `
            --match-test testForkTopazFinalizerCreatesPoolAndMintsLiveTopazLp `
            --fork-url $RpcUrl `
            -vvv
    } finally {
        $env:RUN_TOPAZ_FORK = $previousRunTopazFork
    }

    if ($RunDeploymentDryRun) {
        Test-RequiredEnv @(
            "DEPLOYER_PRIVATE_KEY",
            "ARBOR_OWNER",
            "PLATFORM_TREASURY",
            "USDT_QUOTE_TOKEN",
            "TOPAZ_FACTORY",
            "TOPAZ_ROUTER"
        )

        & $forge script `
            script/DeployArborFoundryMvp.s.sol:DeployArborFoundryMvp `
            --rpc-url $RpcUrl
    }
} finally {
    Pop-Location
}
