# Local BNB Fork Rehearsal

This is the first recommended rehearsal before any testnet or mainnet deployment. It simulates Arbor Foundry against live BNB Chain state from your local machine, but it does not move real funds and does not broadcast transactions.

## What This Proves

- The contracts compile.
- The normal Foundry test suite passes.
- Arbor Foundry can talk to the live Topaz V2 router and factory shape.
- The finalizer can quote liquidity, create or reuse a Topaz volatile pool, add liquidity, and mint LP tokens in a local fork simulation.

## What This Does Not Prove

- It does not deploy Arbor Foundry to a public network.
- It does not prove frontend wallet wiring.
- It does not replace an external security review.
- It does not prove a real project token is safe.

## Recommended PowerShell Command

From the repo root:

```powershell
cd "C:\Users\peter\OneDrive\Documents\Topaz Dex\topaz-foundry-github"
powershell.exe -ExecutionPolicy Bypass -File .\tools\run-local-bnb-fork-rehearsal.ps1
```

If the default public BNB RPC is slow, pass a different RPC:

```powershell
powershell.exe -ExecutionPolicy Bypass -File .\tools\run-local-bnb-fork-rehearsal.ps1 -RpcUrl "https://your-bnb-rpc-url"
```

## Direct Foundry Command

From the contracts folder:

```powershell
cd "C:\Users\peter\OneDrive\Documents\Topaz Dex\topaz-foundry-github\contracts"
$env:RUN_TOPAZ_FORK="true"
C:\Users\peter\.foundry\bin\forge.exe test --match-test testForkTopazFinalizerCreatesPoolAndMintsLiveTopazLp --fork-url https://bsc-dataseed.binance.org/ -vvv
```

## Optional Deployment Script Dry Run

The helper can also dry-run the deployment script, but only after these local environment values are set:

```powershell
$env:DEPLOYER_PRIVATE_KEY="keep_this_private"
$env:ARBOR_OWNER="0xYourOwnerOrMultisig"
$env:PLATFORM_TREASURY="0x90f9c1c0c675A0ce9D539c540DB7F4A1f7e583AE"
$env:USDT_QUOTE_TOKEN="0x55d398326f99059fF775485246999027B3197955"
$env:TOPAZ_FACTORY="0x65E6cD0eF5D3467030103cf3d433034E570b5784"
$env:TOPAZ_ROUTER="0x1E98c8226e7d452e1888e3d3d2F929346321c6c3"
powershell.exe -ExecutionPolicy Bypass -File .\tools\run-local-bnb-fork-rehearsal.ps1 -RunDeploymentDryRun
```

Do not put the private key into GitHub, docs, screenshots, or chat.

## Passing Result

A clean rehearsal means:

- `forge build` succeeds.
- `forge test` succeeds.
- The fork test passes with `RUN_TOPAZ_FORK=true`.
- No `--broadcast` command was used.

After this passes, the next recommended step is a BNB testnet rehearsal with mock Topaz router/factory contracts unless Topaz V2 has matching public testnet contracts.
