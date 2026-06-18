# Arbor Foundry Testnet Deployment Checklist

This is the prep checklist for the first Arbor Foundry deployment rehearsal. It is not a mainnet launch checklist yet.

Do not paste private keys into chat, screenshots, GitHub, or docs. Keep them only in your local terminal environment or a secure wallet/deployment tool.

## 1. Decide the Target Environment

Pick one deployment target before broadcasting:

| Target | Best use | Notes |
| --- | --- | --- |
| Local BNB fork | Safest first rehearsal | Uses live Topaz mainnet contracts in a local simulation. No real funds move. |
| BNB testnet with mock Topaz contracts | Best public testnet rehearsal | Use this if Topaz V2 does not have matching testnet router/factory contracts. |
| BNB mainnet | Final production path | Only after dry runs, review, and security checks. |

If the target is a testnet and Topaz V2 does not have matching testnet contracts, do not reuse BNB mainnet Topaz addresses. Deploy or select mock router/factory contracts for the rehearsal.

For the first local rehearsal, use `docs/local-bnb-fork-rehearsal.md`.

For the first public testnet rehearsal, use `docs/bnb-testnet-mock-topaz-rehearsal.md` unless Topaz V2 has matching public BNB testnet contracts available.

## 2. Required Values

The deployment script requires these values:

| Value | Meaning | Current guidance |
| --- | --- | --- |
| `DEPLOYER_PRIVATE_KEY` | Wallet that sends the deployment transactions | Use a dedicated deployer wallet. Never commit it. |
| `ARBOR_OWNER` | Long-term admin owner wallet or multisig | Can be the deployer for first rehearsal, but multisig is better before mainnet. |
| `PLATFORM_TREASURY` | Receives the 2% successful-launch platform fee | Use `0x90f9c1c0c675A0ce9D539c540DB7F4A1f7e583AE` unless you choose a new treasury. |
| `USDT_QUOTE_TOKEN` | Allowed quote asset for self-serve Fair Launch MVP | Use the USDT address on the selected network. |
| `TOPAZ_FACTORY` | Topaz V2 pool factory for the selected network | BNB mainnet: `0x65E6cD0eF5D3467030103cf3d433034E570b5784`. |
| `TOPAZ_ROUTER` | Topaz V2 router for the selected network | BNB mainnet: `0x1E98c8226e7d452e1888e3d3d2F929346321c6c3`. |

For BNB Chain mainnet, USDT is commonly `0x55d398326f99059fF775485246999027B3197955`. Reconfirm before mainnet deployment.

## 3. Local Dry Run Command

From Git Bash:

```bash
cd "/c/Users/peter/OneDrive/Documents/Topaz Dex/topaz-foundry-github/contracts"
forge build
forge test
```

Then set local environment values:

```bash
export DEPLOYER_PRIVATE_KEY="paste_private_key_here_only_in_your_terminal"
export ARBOR_OWNER="0xYourOwnerOrMultisig"
export PLATFORM_TREASURY="0x90f9c1c0c675A0ce9D539c540DB7F4A1f7e583AE"
export USDT_QUOTE_TOKEN="0xNetworkUSDT"
export TOPAZ_FACTORY="0xNetworkTopazFactory"
export TOPAZ_ROUTER="0xNetworkTopazRouter"
```

Dry run without broadcasting:

```bash
forge script script/DeployArborFoundryMvp.s.sol:DeployArborFoundryMvp --rpc-url "https://your-rpc-url"
```

Only after the dry run output looks right, broadcast:

```bash
forge script script/DeployArborFoundryMvp.s.sol:DeployArborFoundryMvp --rpc-url "https://your-rpc-url" --broadcast
```

PowerShell uses `$env:` instead of `export`:

```powershell
$env:DEPLOYER_PRIVATE_KEY="paste_private_key_here_only_in_your_terminal"
$env:ARBOR_OWNER="0xYourOwnerOrMultisig"
$env:PLATFORM_TREASURY="0x90f9c1c0c675A0ce9D539c540DB7F4A1f7e583AE"
$env:USDT_QUOTE_TOKEN="0xNetworkUSDT"
$env:TOPAZ_FACTORY="0xNetworkTopazFactory"
$env:TOPAZ_ROUTER="0xNetworkTopazRouter"
forge script script/DeployArborFoundryMvp.s.sol:DeployArborFoundryMvp --rpc-url "https://your-rpc-url"
```

## 4. What the Script Deploys

The script deploys and configures:

- `LaunchFactory`
- `TopazFinalizer`
- `FeeSplitLPLocker`
- `VestingVault`
- `IncentiveEscrow`

It also:

- Connects `LaunchFactory` to `TopazFinalizer`.
- Turns on the quote-token allowlist.
- Allows the selected USDT quote token.
- Starts ownership transfer to `ARBOR_OWNER` if it differs from the deployer.

If `ARBOR_OWNER` is different from the deployer, that wallet must call `acceptOwnership()` on each deployed contract after deployment.

For mock Topaz rehearsal, deploy the mock factory/router/USDT first with `contracts/script/DeployMockTopazV2.s.sol`, then use those addresses as `TOPAZ_FACTORY`, `TOPAZ_ROUTER`, and `USDT_QUOTE_TOKEN`.

After deployed wiring is verified, run both scripted outcome rehearsals from `docs/bnb-testnet-mock-topaz-rehearsal.md`:

- `-RunFairLaunch` for the successful finalization path.
- `-RunRefundLaunch` for the failed-launch refund path.

## 5. Post-Deploy Checks

After deployment, confirm:

- `LaunchFactory.finalizer()` is the deployed `TopazFinalizer`.
- `LaunchFactory.quoteTokenAllowlistEnabled()` is `true`.
- `LaunchFactory.quoteTokenAllowed(USDT_QUOTE_TOKEN)` is `true`.
- `platformTreasury()` is the intended treasury address.
- Every contract owner is either the final owner or has the final owner listed as `pendingOwner`.
- A small test launch can be created, opened, finalized, and verified in the chosen test environment.

## 6. Do Not Mainnet Yet Until

- A full successful fair launch has been rehearsed.
- A failed/refunding fair launch has been rehearsed.
- Sale window, cancellation, rounding, and LP unlock tests are expanded.
- Topaz V2 addresses and ABIs are reconfirmed immediately before deployment.
- The contracts receive external security review.
