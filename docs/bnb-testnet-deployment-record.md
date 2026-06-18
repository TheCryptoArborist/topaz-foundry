# BNB Testnet Deployment Record

Last updated: June 18, 2026

This records the current Arbor Foundry public BNB testnet rehearsal deployment. These are testnet-only contracts.

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
| LaunchFactory | `0xC6b44e114BD06c08257aC6EEEB409c022EDCb16B` |
| TopazFinalizer | `0x4CfCBC52355bFf61bC99E8F0f43B38Fe5AAEa466` |
| FeeSplitLPLocker | `0xB00f7c3a599a01A1A4D9312633ca86f74bdF85Ce` |
| VestingVault | `0x109060137eF2C77980136aC2f9e72353f2Aa45Ce` |
| IncentiveEscrow | `0x8BAE46797C58B5870F65EB564D53CA11bb3b7a35` |

## Environment Setup

Use these values for verification and the fair-launch rehearsal:

```powershell
$env:LAUNCH_FACTORY="0xC6b44e114BD06c08257aC6EEEB409c022EDCb16B"
$env:TOPAZ_FINALIZER="0x4CfCBC52355bFf61bC99E8F0f43B38Fe5AAEa466"
$env:LP_LOCKER="0xB00f7c3a599a01A1A4D9312633ca86f74bdF85Ce"
$env:VESTING_VAULT="0x109060137eF2C77980136aC2f9e72353f2Aa45Ce"
$env:INCENTIVE_ESCROW="0x8BAE46797C58B5870F65EB564D53CA11bb3b7a35"
$env:ARBOR_OWNER="0xE8b63245DdDAB73C7A276818942341D8Cfb7D7A7"
$env:PLATFORM_TREASURY="0x90f9c1c0c675A0ce9D539c540DB7F4A1f7e583AE"
$env:USDT_QUOTE_TOKEN="0xA7C16a4CadA1c3bCC884904144B372aB09674A1d"
$env:TOPAZ_FACTORY="0x3eF32427eB1eA6cE7572358e22C800CeC740292A"
$env:TOPAZ_ROUTER="0x8a7C0b2Dc04C54eC8932Cf4cb28aC6F4f881398E"
```

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
