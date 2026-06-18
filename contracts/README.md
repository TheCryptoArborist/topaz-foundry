# Arbor Foundry Contracts

This folder starts the Solidity scaffold for the Arbor Foundry MVP.

It is intentionally dependency-free for the first pass:

- No OpenZeppelin imports yet.
- No external package install required to read the contracts.
- Foundry layout is used because it is lightweight for Solidity tests and local forks.
- `via_ir = true` is enabled because the launch finalization flow has enough accounting fields to otherwise hit Solidity's stack-depth limit.

## Current Scope

Included contracts:

- `LaunchFactory.sol` - creates launch vaults and stores platform-level config.
- `SaleVault.sol` - fair-launch deposits, soft-cap refunds, claim accounting, and finalization fund release.
- `TopazFinalizer.sol` - releases successful raise funds and adds Topaz V2 liquidity.
- `FeeSplitLPLocker.sol` - receives LP tokens and splits non-gauged LP fees 80/20.
- `VestingVault.sol` - simple vesting schedule scaffold.
- `IncentiveEscrow.sol` - incentive promise/funding status scaffold.

Included support files:

- `ArborFoundryTypes.sol` - shared enums and structs.
- `interfaces/` - minimal ERC20 and Topaz V2 interfaces.
- `lib/` - minimal ownership, re-entry guard, and ERC20 transfer helpers.
- `script/DeployArborFoundryMvp.s.sol` - deployment-prep script for dry runs and future broadcast.
- `test/ArborFoundryMvp.t.sol` - first Foundry test suite with local mock ERC20 and Topaz V2 contracts.

First-pass tests cover:

- Failed fair launch refund path with 0 platform fee.
- Successful fair launch finalization with 2% platform fee, net raise, Topaz liquidity amount, creator proceeds, LP minting, and buyer token claim.
- Double-refund rejection.
- Double-token-claim rejection.
- Hard-cap enforcement.
- Wallet min/max enforcement.
- Guided setup sale modes blocked from the self-serve deposit path.
- Double-finalization rejection.
- Quote-token allowlist enforcement for USDT-first MVP policy.
- 80/20 non-gauged LP fee split.
- Incentive escrow overfunding protection and release.
- Basic vesting claim release.

## Important Notes

This is a scaffold, not audited production code.

The base `SaleVault` is built around the self-serve Fair Launch path. Fixed-price sale and liquidity bootstrap should remain guided setup modes until their math and finalization adapters are tested.

Before mainnet:

1. Install Foundry.
2. Expand unit tests for sale windows, cancellation, treasury/finalizer admin changes, LP unlock restrictions, and edge-case rounding.
3. Reconfirm Topaz V2 ABIs against the live BNB Chain contracts immediately before deployment. Current MVP interface confirmation is in `../docs/topaz-v2-abi-confirmation.md`.
4. Run a BNB testnet or local fork dry run using `../docs/testnet-deployment-checklist.md`.
5. Get external security review before handling user funds.

## Suggested Commands

After Foundry is installed:

```powershell
cd "C:\Users\peter\OneDrive\Documents\Topaz Dex\topaz-foundry-github\contracts"
forge fmt
forge build
forge test
```

To repeat the Topaz live-router fork dry run:

```bash
RUN_TOPAZ_FORK=true forge test --match-test testForkTopazFinalizerCreatesPoolAndMintsLiveTopazLp --fork-url https://bsc-dataseed.binance.org/ -vvv
```

To dry-run the deployment script, first set the environment values from `../docs/testnet-deployment-checklist.md`, then run:

```bash
forge script script/DeployArborFoundryMvp.s.sol:DeployArborFoundryMvp --rpc-url "https://your-rpc-url"
```

Add `--broadcast` only after the dry run is reviewed and the target network values are final.
