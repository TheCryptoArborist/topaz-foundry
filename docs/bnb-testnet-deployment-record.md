# BNB Testnet Deployment Record

Last updated: June 21, 2026

This records the current Arbor Foundry public BNB testnet rehearsal deployment. These are testnet-only contracts. The June 21 deployment includes the latest launch-cancel, LP-lock registration, and finalization token-match safety guards.

## Network

| Field | Value |
| --- | --- |
| Chain | BNB Smart Chain Testnet |
| Chain ID | `97` |
| RPC used | `https://data-seed-prebsc-1-s1.binance.org:8545/` |
| Owner/test wallet | `0xE8b63245DdDAB73C7A276818942341D8Cfb7D7A7` |
| Platform treasury | `0x90f9c1c0c675A0ce9D539c540DB7F4A1f7e583AE` |

## Mock Topaz Layer

| Contract | Address |
| --- | --- |
| Mock Topaz V2 Factory | `0x3eF32427eB1eA6cE7572358e22C800CeC740292A` |
| Mock Topaz V2 Router | `0x8a7C0b2Dc04C54eC8932Cf4cb28aC6F4f881398E` |
| Mock USDT quote token | `0xA7C16a4CadA1c3bCC884904144B372aB09674A1d` |

## Arbor Foundry Layer

| Contract | Address |
| --- | --- |
| LaunchFactory | `0x64CF375765d745440849150aF45F8Ac66fC0e9e4` |
| TopazFinalizer | `0x7cE6146d9024a8BfBe5854D86e2689Fd8d986393` |
| FeeSplitLPLocker | `0xb5B157A2BFb1ef400Bb717aFD308fcD313F61eEE` |
| VestingVault | `0x17D0A2AFF2243d99E53a30c4A9aDDDE2B40eBBF0` |
| IncentiveEscrow | `0x403417DF68B705a7cBC54ead07436334fB993Ce1` |

## Environment Setup

Use these values for verification and the fair-launch rehearsal:

```powershell
$env:LAUNCH_FACTORY="0x64CF375765d745440849150aF45F8Ac66fC0e9e4"
$env:TOPAZ_FINALIZER="0x7cE6146d9024a8BfBe5854D86e2689Fd8d986393"
$env:LP_LOCKER="0xb5B157A2BFb1ef400Bb717aFD308fcD313F61eEE"
$env:VESTING_VAULT="0x17D0A2AFF2243d99E53a30c4A9aDDDE2B40eBBF0"
$env:INCENTIVE_ESCROW="0x403417DF68B705a7cBC54ead07436334fB993Ce1"
$env:ARBOR_OWNER="0xE8b63245DdDAB73C7A276818942341D8Cfb7D7A7"
$env:PLATFORM_TREASURY="0x90f9c1c0c675A0ce9D539c540DB7F4A1f7e583AE"
$env:USDT_QUOTE_TOKEN="0xA7C16a4CadA1c3bCC884904144B372aB09674A1d"
$env:TOPAZ_FACTORY="0x3eF32427eB1eA6cE7572358e22C800CeC740292A"
$env:TOPAZ_ROUTER="0x8a7C0b2Dc04C54eC8932Cf4cb28aC6F4f881398E"
```

The broadcast output for this deployment is saved at `contracts\broadcast\DeployArborFoundryMvp.s.sol\97\run-latest.json`.

## Verify The Deployment

This is read-only and does not need your private key:

```powershell
cd "C:\Users\peter\OneDrive\Documents\Topaz Dex\topaz-foundry-github"
powershell.exe -ExecutionPolicy Bypass -File .\tools\run-bnb-testnet-mock-topaz-rehearsal.ps1 -VerifyArbor
```

## Run A Sample Fair Launch

Dry run first:

```powershell
$env:DEPLOYER_PRIVATE_KEY="0xkeep_this_private"
powershell.exe -ExecutionPolicy Bypass -File .\tools\run-bnb-testnet-mock-topaz-rehearsal.ps1 -RunFairLaunch
```

Broadcast only after the dry run is reviewed:

```powershell
powershell.exe -ExecutionPolicy Bypass -File .\tools\run-bnb-testnet-mock-topaz-rehearsal.ps1 -RunFairLaunch -Broadcast
```

Do not paste the private key into chat, screenshots, GitHub, or docs.

## Run A Sample Refund Launch

Dry run first:

```powershell
powershell.exe -ExecutionPolicy Bypass -File .\tools\run-bnb-testnet-mock-topaz-rehearsal.ps1 -RunRefundLaunch
```

Broadcast only after the dry run is reviewed:

```powershell
powershell.exe -ExecutionPolicy Bypass -File .\tools\run-bnb-testnet-mock-topaz-rehearsal.ps1 -RunRefundLaunch -Broadcast
```

This is the failed-launch path: below-soft-cap contribution, refund mode, and buyer refund claim.
