param(
    [string]$RpcUrl = "https://data-seed-prebsc-1-s1.binance.org:8545/",
    [switch]$DeployMocks,
    [switch]$DeployArbor,
    [switch]$Broadcast
)

$ErrorActionPreference = "Stop"
$DryRunPrivateKey = "1"

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

function Set-DryRunDeployerPrivateKey {
    if ($Broadcast) {
        Test-RequiredEnv @("DEPLOYER_PRIVATE_KEY")
        return
    }

    if ([string]::IsNullOrWhiteSpace($env:DEPLOYER_PRIVATE_KEY)) {
        $env:DEPLOYER_PRIVATE_KEY = $DryRunPrivateKey
        Write-Host "Dry run: using a public dummy deployer key. Do not use this key for broadcast."
    }
}

function Invoke-Forge {
    param([string[]]$Arguments)

    & $forge @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw "Forge command failed: forge $($Arguments -join ' ')"
    }
}

function Invoke-ForgeScript {
    param([string[]]$Arguments)

    if ($Broadcast) {
        $Arguments += "--broadcast"
    }

    Invoke-Forge -Arguments $Arguments
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$contractsPath = Join-Path $repoRoot "contracts"
$forge = Resolve-Forge

Push-Location $contractsPath
try {
    Write-Host "Using forge: $forge"
    Write-Host "Using RPC: $RpcUrl"
    if ($Broadcast) {
        Write-Host "Broadcast mode: ON"
    } else {
        Write-Host "Broadcast mode: OFF - dry run only"
    }

    Invoke-Forge -Arguments @("build")
    Invoke-Forge -Arguments @("test")

    if ($DeployMocks) {
        Set-DryRunDeployerPrivateKey
        Invoke-ForgeScript -Arguments @(
            "script",
            "script/DeployMockTopazV2.s.sol:DeployMockTopazV2",
            "--rpc-url",
            $RpcUrl
        )
    }

    if ($DeployArbor) {
        Set-DryRunDeployerPrivateKey
        Test-RequiredEnv @(
            "ARBOR_OWNER",
            "PLATFORM_TREASURY",
            "USDT_QUOTE_TOKEN",
            "TOPAZ_FACTORY",
            "TOPAZ_ROUTER"
        )
        Invoke-ForgeScript -Arguments @(
            "script",
            "script/DeployArborFoundryMvp.s.sol:DeployArborFoundryMvp",
            "--rpc-url",
            $RpcUrl
        )
    }
} finally {
    Pop-Location
}
