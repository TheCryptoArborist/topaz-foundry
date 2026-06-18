# BNB Testnet Mock Topaz Rehearsal

This is the recommended public testnet rehearsal if Topaz V2 does not have matching public BNB testnet router and factory contracts.

The goal is not to pretend the mocks are Topaz. The goal is to rehearse Arbor Foundry's deployment, configuration, and finalization flow on a public testnet before any mainnet work.

## What Gets Deployed

Step 1 deploys rehearsal-only contracts:

- `MockTopazV2Factory`
- `MockTopazV2Router`
- `TestnetMockERC20` as mock USDT

Step 2 deploys Arbor Foundry using the mock Topaz addresses:

- `LaunchFactory`
- `TopazFinalizer`
- `FeeSplitLPLocker`
- `VestingVault`
- `IncentiveEscrow`

Never use mock Topaz addresses for mainnet configuration.

## Before You Start

You need:

- A dedicated testnet deployer wallet.
- Test BNB in that wallet.
- The deployer private key stored only in your local terminal environment.
- An owner/admin wallet for `ARBOR_OWNER`.
- The platform treasury address.

Do not paste the private key into chat, screenshots, GitHub, or docs.

## 1. Dry-Run Mock Topaz Deployment

From PowerShell:

```powershell
cd "C:\Users\peter\OneDrive\Documents\Topaz Dex\topaz-foundry-github"
$env:DEPLOYER_PRIVATE_KEY="keep_this_private"
powershell.exe -ExecutionPolicy Bypass -File .\tools\run-bnb-testnet-mock-topaz-rehearsal.ps1 -DeployMocks
```

This compiles, runs tests, and simulates deploying the mock Topaz layer. It does not broadcast.

## 2. Broadcast Mock Topaz Deployment

After the dry run looks right:

```powershell
powershell.exe -ExecutionPolicy Bypass -File .\tools\run-bnb-testnet-mock-topaz-rehearsal.ps1 -DeployMocks -Broadcast
```

Write down the deployed addresses for:

- Mock Topaz factory
- Mock Topaz router
- Mock USDT

Foundry also stores broadcast output under the `contracts/broadcast/` folder.

## 3. Dry-Run Arbor Foundry Against The Mock Addresses

Set the mock addresses from step 2:

```powershell
$env:ARBOR_OWNER="0xYourOwnerOrMultisig"
$env:PLATFORM_TREASURY="0x90f9c1c0c675A0ce9D539c540DB7F4A1f7e583AE"
$env:USDT_QUOTE_TOKEN="0xMockUsdtFromStep2"
$env:TOPAZ_FACTORY="0xMockTopazFactoryFromStep2"
$env:TOPAZ_ROUTER="0xMockTopazRouterFromStep2"
powershell.exe -ExecutionPolicy Bypass -File .\tools\run-bnb-testnet-mock-topaz-rehearsal.ps1 -DeployArbor
```

This simulates the Arbor Foundry deployment using the mock Topaz layer. It does not broadcast.

## 4. Broadcast Arbor Foundry Deployment

After the dry run looks right:

```powershell
powershell.exe -ExecutionPolicy Bypass -File .\tools\run-bnb-testnet-mock-topaz-rehearsal.ps1 -DeployArbor -Broadcast
```

## 5. Post-Deploy Checks

Confirm:

- `LaunchFactory.finalizer()` points to the deployed `TopazFinalizer`.
- `LaunchFactory.quoteTokenAllowlistEnabled()` is `true`.
- `LaunchFactory.quoteTokenAllowed(mock USDT)` is `true`.
- `TopazFinalizer.factory()` points to the mock Topaz factory.
- `TopazFinalizer.router()` points to the mock Topaz router.
- If `ARBOR_OWNER` differs from the deployer, the owner wallet accepts ownership on each deployed Arbor Foundry contract.

## 6. Rehearsal Success Criteria

The testnet rehearsal is considered useful when:

- Mock Topaz deploys cleanly.
- Arbor Foundry deploys cleanly against the mock addresses.
- A test launch can be created with mock USDT as the quote token.
- A successful test launch can finalize into the mock Topaz router/factory.
- A failed test launch can enter refunds with no platform success fee.

After this, the next engineering step is to add a scripted end-to-end testnet launch rehearsal so the same flow can be repeated without manual contract calls.
