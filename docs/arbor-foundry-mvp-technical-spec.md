# Arbor Foundry MVP Technical Spec

Last updated: June 17, 2026

## 1. Product Goal

Arbor Foundry is an independently operated BNB Chain launchpad for projects that want launch liquidity rooted on Topaz V2.

The MVP should turn the current prototype into a real fund-handling system with:

- Reviewed project applications before public launch.
- Buyer deposits into sale vaults.
- Soft-cap-safe refunds.
- Successful finalization into Topaz V2 liquidity.
- Public LP lock, vesting, claim, refund, and trade proof.
- Arbor Foundry platform fee accounting without exposing private treasury routing in the public UI.

## 2. MVP Rules

### Sale Modes

All three creator strategies are allowed from the beginning:

| Sale mode | MVP support | Notes |
| --- | --- | --- |
| Fair launch | Self-serve after approval | Default path. Pro-rata allocation based on buyer contribution share. |
| Fixed-price sale | Guided review/setup | Available, but should require extra review until automated contracts are hardened. |
| Liquidity bootstrap | Guided review/setup | Available, but should require extra review because pricing/liquidity behavior is more complex. |

### Core Raise Rules

- Soft cap is the minimum required for launch success.
- Hard cap is the maximum accepted raise.
- If soft cap is met, finalization uses the actual amount raised, even if below hard cap.
- If soft cap is missed, the launch moves to Refunding.
- Failed launch result: 0% platform success fee, refunds open, no Topaz pair, no LP lock, no buyer token claims.
- Successful launch result: platform fee, Topaz liquidity add, LP lock, vesting/claims, incentives, and verification page.

### Platform Economics

- Platform success fee: 2% of successful final raise.
- No platform success fee unless soft cap is met.
- Failed launches owe $0 platform success fee.
- No flat listing fee in MVP.
- Optional future BNB application/deploy fee may be configurable, but should not be hardcoded until contracts/backend support it.
- LP fee split when using the fee-split locker:
  - 80% of claimable LP fees to the project creator.
  - 20% of claimable LP fees to Arbor Foundry.
- Private treasury recipient data belongs in backend/contract configuration, not public marketing UI.

## 3. Launch Lifecycle

| State | Meaning | Public? | Funds accepted? |
| --- | --- | ---: | ---: |
| Draft | Creator prepares token, sale, liquidity, vesting, links, and social settings. | No | No |
| Pending Review | Arbor Foundry reviews disclosures and launch safety. | No or limited preview | No |
| Approved | Review passed, awaiting schedule/opening. | Yes | No |
| Upcoming | Approved and scheduled. | Yes | No |
| Live | Sale is open. | Yes | Yes |
| Finalized | Soft cap met and finalization completed. | Yes | No new deposits |
| Refunding | Soft cap missed and refunds are open. | Yes | No |

Rules:

- Draft and Pending Review launches cannot go live.
- Only Approved/Upcoming launches can be opened.
- Only Live launches can accept buyer deposits.
- Finalization can only happen once.
- Refund mode and finalization are mutually exclusive.

## 4. Smart Contract Architecture

### 4.1 LaunchFactory

Purpose: create, register, and configure launch instances.

Responsibilities:

- Create sale vaults through clone/minimal proxy pattern.
- Store approved launch template/type.
- Store creator address.
- Store quote asset.
- Store launch status.
- Store platform fee BPS.
- Store internal fee recipient address.
- Emit launch-created and launch-status events.

Required controls:

- Only platform/admin can approve launch creation for public use.
- Creator cannot bypass approval gate.
- Fee recipient updates must be owner/admin controlled.
- Sale template allowlist should prevent unsupported contracts from being registered.

### 4.2 SaleVault

Purpose: hold buyer funds and project token allocations for one launch.

Responsibilities:

- Accept quote asset deposits during Live state.
- Enforce wallet min/max.
- Enforce hard cap.
- Track total raised.
- Track buyer contribution balances.
- Track token allocation claims.
- Enable refunds if soft cap is missed.
- Prevent project withdrawal before successful finalization.

Fair launch allocation:

```text
buyerTokenAllocation = buyerContribution / totalRaised * saleTokenAllocation
```

Fixed-price allocation:

```text
buyerTokenAllocation = buyerContribution / tokenPrice
```

Liquidity bootstrap allocation:

Exact pricing behavior needs a separate final formula before automation. In MVP, support through guided setup and explicit review.

### 4.3 Finalizer

Purpose: finalize successful launches and route liquidity into Topaz V2.

Successful finalization sequence:

1. Verify sale is Live or closeable.
2. Verify soft cap is met.
3. Lock final raise amount.
4. Calculate 2% platform success fee.
5. Calculate net raise after platform fee.
6. Calculate creator-set liquidity commitment from net raise.
7. Transfer platform fee to configured treasury.
8. Create or reuse Topaz V2 volatile pair with `stable=false`.
9. Add quote asset and project tokens through Topaz V2 router.
10. Mint ERC20 LP tokens directly to the LP locker.
11. Fund vesting/claim vault.
12. Mark launch Finalized.
13. Emit finalization proof event.

Finalization accounting:

```text
platformFee = finalRaised * 200 / 10000
netRaise = finalRaised - platformFee
quoteToLiquidity = netRaise * liquidityPercent / 100
creatorProceeds = netRaise - quoteToLiquidity
```

### 4.4 Refund Logic

Purpose: return buyer deposits if soft cap is missed.

Refund rules:

- If sale closes below soft cap, admin or automated keeper can enable refunds.
- Platform success fee must be 0.
- Project cannot withdraw raise funds.
- No Topaz pair is created.
- No LP token is minted.
- Buyer token claims remain closed.
- Buyers claim their original quote asset amount.

### 4.5 LP Locker

Purpose: hold Topaz V2 ERC20 LP tokens and expose public lock proof.

Responsibilities:

- Receive minted LP tokens during finalization.
- Store lock duration or permanent lock setting.
- Prevent early LP withdrawal.
- Expose LP token address, pair, amount, unlock date/permanent status.
- If fee-split mode is active, claim non-gauged LP fees and split them 80/20.

Fee split:

```text
creatorShare = claimedFees * 80 / 100
platformShare = claimedFees * 20 / 100
```

Important Topaz distinction:

- If the pool has no gauge, the locker can claim LP-side fees from `pool.claimFees()`.
- If the pool later uses a gauge, reward and fee handling should move to Topaz voter/reward contracts instead of assuming the locker receives all passive LP-side fees.

### 4.6 Vesting Vault

Purpose: hold and release buyer/team/project tokens according to public vesting rules.

MVP requirements:

- Buyer claim schedule.
- Team allocation schedule.
- Treasury/ecosystem lock schedule if applicable.
- Public vesting status for Verify This Launch.
- Claim protection against double-claim.

### 4.7 Incentive Escrow

Purpose: track optional veTOPAZ/Topaz pool incentives.

MVP requirements:

- Store promised incentive amount.
- Store funded amount.
- Store distributor/route.
- Show pending/funded state on verification page.
- Keep gauge/bribe automation manual until Topaz reward interfaces are confirmed.

## 5. Topaz V2 Integration

BNB Chain anchors from the current design brief:

| Contract | Address |
| --- | --- |
| Topaz V2 Router | `0x1E98c8226e7d452e1888e3d3d2F929346321c6c3` |
| Topaz Pool Factory | `0x65E6cD0eF5D3467030103cf3d433034E570b5784` |
| Topaz Voter | `0x2F80F810a114223AC69E34E84E735CaD515dAD67` |
| WBNB | `0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c` |

MVP Topaz assumptions:

- BNB Chain mainnet, chain ID `56`.
- Topaz V2 volatile pool.
- `stable=false`.
- Quote assets: USDT and/or WBNB, final list still needs confirmation.
- Launch tokens should be standard ERC20 fixed-supply or verified existing tokens.
- Fee-on-transfer/tax tokens should be blocked in MVP unless tested end to end.

Finalizer must:

- Check existing pool via factory.
- Create pool if missing.
- Quote liquidity before execution.
- Use nonzero minimum amounts for slippage safety.
- Add liquidity through router.
- Send LP token directly to locker.
- Emit pair, LP, lock, and trade route data for verification indexing.

## 6. Backend and Data Model

The MVP needs a backend/admin layer even if contracts enforce core fund safety.

Recommended backend responsibilities:

- Project application intake.
- Review workflow.
- Launch metadata storage.
- Token logo storage.
- Social/project links.
- Proof indexing from contract events.
- Admin dashboard data.
- Verification page API.
- Optional notification/share kit data.

Suggested tables:

### projects

| Field | Type | Notes |
| --- | --- | --- |
| id | uuid/string | Internal project id |
| creator_wallet | address | Project owner |
| name | string | Project name |
| symbol | string | Token symbol |
| logo_url | string | Project token logo |
| website_url | string | Required for review |
| docs_url | string | Optional/required by policy |
| x_url | string | Social proof |
| telegram_url | string | Optional |
| discord_url | string | Optional |
| review_status | enum | draft, pending_review, approved, rejected |

### launches

| Field | Type | Notes |
| --- | --- | --- |
| id | uuid/string | Launch id |
| project_id | uuid/string | Project relation |
| sale_type | enum | fair_launch, fixed_price, liquidity_bootstrap |
| setup_mode | enum | self_serve, guided_setup |
| status | enum | draft, pending_review, approved, upcoming, live, finalized, refunding |
| quote_asset | address/string | USDT/WBNB |
| soft_cap | decimal | Minimum success |
| hard_cap | decimal | Maximum raise |
| wallet_min | decimal | Buyer minimum |
| wallet_max | decimal | Buyer maximum |
| liquidity_percent | integer | Percent of net raise |
| platform_fee_bps | integer | 200 default |
| created_at | timestamp |  |
| starts_at | timestamp |  |
| ends_at | timestamp |  |

### launch_contracts

| Field | Type | Notes |
| --- | --- | --- |
| launch_id | uuid/string |  |
| sale_vault | address |  |
| token | address | Project token |
| vesting_vault | address | If used |
| lp_locker | address | If finalized |
| topaz_pair | address | If created |
| finalizer_tx | tx hash | If finalized |
| refund_tx | tx hash | If refunding |

### launch_accounting

| Field | Type | Notes |
| --- | --- | --- |
| launch_id | uuid/string |  |
| total_raised | decimal | Actual raise |
| platform_fee | decimal | 2% if successful |
| net_raise | decimal | After fee |
| quote_to_liquidity | decimal | Sent to LP |
| creator_proceeds | decimal | Remaining |
| refund_total | decimal | If failed |
| lp_fee_creator_share | decimal | 80% |
| lp_fee_platform_share | decimal | 20% |

### proof_events

| Field | Type | Notes |
| --- | --- | --- |
| launch_id | uuid/string |  |
| event_type | enum | approval, deposit, finalization, refund, lp_lock, vesting, incentive, trade_link |
| tx_hash | tx hash | Optional |
| label | string | Public label |
| value | string/json | Public detail |
| created_at | timestamp |  |

## 7. Frontend Wallet Actions

### Creator Actions

- Connect wallet.
- Create draft application.
- Upload token logo.
- Select sale type:
  - Fair Launch (self-serve MVP).
  - Fixed-price sale (guided setup).
  - Liquidity bootstrap (guided setup).
- Set soft cap, hard cap, wallet min/max.
- Set liquidity percent and lock duration.
- Add vesting terms.
- Add project/social links.
- Submit for review.

### Admin Actions

- Review project application.
- Approve/reject application.
- Schedule launch.
- Open sale.
- Enable refunds if soft cap missed.
- Finalize launch if soft cap met.
- Publish proof records.
- Manage private platform treasury configuration.
- View total raised, expected fees, actual fees, failed launches at $0 fee, liquidity committed, LP fee status.

### Buyer Actions

- Connect wallet.
- Review launch status and verification page.
- Contribute to Live launch.
- Track contribution/allocation.
- Claim refund if Refunding.
- Claim tokens if Finalized and vested.
- Open Topaz trade link after pair creation.

## 8. Verify This Launch Page

Every launch should have a permanent verification page.

Required fields:

- Launch status.
- Approval status.
- Sale type and setup mode.
- Soft cap and hard cap.
- Current progress or final raised amount.
- Platform success fee.
- Net raise after fee.
- Liquidity amount added to Topaz.
- Creator proceeds if applicable.
- Topaz pair address or pending state.
- LP lock status.
- Buyer claim status.
- Refund status.
- Vesting status.
- Incentive deposit status.
- Trade on Topaz link when available.

State-aware behavior:

- Draft/Pending Review: not public or limited preview; no deposits.
- Approved: review passed; deposits not open.
- Upcoming: scheduled; deposits not open.
- Live: contributions open; soft cap state visible.
- Finalized: liquidity, LP lock, claims, and trade proof visible.
- Refunding: refund proof visible; no pair, no LP lock, no buyer claims.

## 9. Security Requirements

Contract requirements:

- Reentrancy protection on deposits, refunds, claims, finalization, fee claims.
- Finalization can only execute once.
- Refunds and finalization cannot both be active.
- Hard cap enforcement.
- Wallet cap enforcement.
- SafeERC20 handling.
- Nonzero slippage minimums for Topaz liquidity.
- Admin roles separated from fee recipient.
- Emergency pause for deposits before finalization.
- No project withdrawal before successful finalization.
- No platform fee on failed launches.

Review requirements:

- Block fee-on-transfer/tax tokens in MVP unless explicitly reviewed/tested.
- Require verified token source or trusted deployment path.
- Require mint/owner/blacklist/pause permission disclosure.
- Require project links before approval.
- Require public liquidity and vesting commitments before launch.

## 10. Testing Plan

### Unit Tests

- Deposit before/after sale window.
- Wallet min/max.
- Hard cap.
- Soft cap met finalization.
- Soft cap missed refunds.
- 2% platform fee calculation.
- $0 fee on failed launch.
- Net raise and liquidity calculations.
- Claim allocation math.
- Double refund prevention.
- Double claim prevention.
- Double finalization prevention.
- LP fee split math.

### Integration Tests

- Full fair launch success flow.
- Full fair launch failure/refund flow.
- Guided setup fixed-price launch flow.
- Guided setup liquidity bootstrap review flow.
- Topaz pool create/reuse.
- Topaz addLiquidity with mocked router/factory.
- LP locker receives LP token.
- Verification event indexing.

### Testnet Dry Run

Before BNB mainnet:

1. Deploy contracts to BNB testnet or a local fork.
2. Run one successful fair launch.
3. Run one failed/refunding fair launch.
4. Run one guided setup fixed-price launch as admin-assisted.
5. Run one guided setup liquidity bootstrap as admin-assisted.
6. Verify accounting and proof page output.
7. Confirm Topaz routing on the intended environment or mocked equivalent.

## 11. Deployment Plan

### Phase 1: Spec and Contract Scaffold

- Finalize this technical spec. Status: started.
- Choose Solidity toolchain. Status: Foundry-style layout selected.
- Create contracts package. Status: initial `contracts/` scaffold added.
- Add tests for sale vault and accounting. Status: first-pass Foundry tests added for refunds, successful finalization, 2% fee accounting, LP fee split, vesting, and incentive escrow.

### Phase 2: Backend/Admin

- Add project intake and review storage.
- Add admin approval queue.
- Add proof indexing from events.
- Add private platform accounting.

### Phase 3: Frontend Wallet Wiring

- Replace prototype buttons with wallet actions.
- Add contract reads for launch status.
- Add contribution/refund/claim transactions.
- Add Verify This Launch data from backend/indexer.

### Phase 4: Testnet

- Deploy test contracts.
- Run full success and refund launches.
- Validate Topaz finalization.
- Audit high-risk paths.

### Phase 5: Mainnet MVP

- Launch with small, reviewed projects.
- Keep guided setup for fixed-price and liquidity bootstrap.
- Keep Fair Launch as the standard self-serve path.

## 12. Open Decisions

- Confirm first quote assets: USDT only, WBNB only, or both.
- Confirm Topaz V2 ABI details against live contracts.
- Decide whether Arbor Foundry deploys project tokens or only accepts existing verified tokens.
- Decide LP lock default: 12 months, 24 months, or permanent fee-split.
- Decide whether launch incentives are required or optional.
- Decide if a BNB application/deploy fee should exist before mainnet.
- Decide backend stack and database.
- Decide admin wallet/multisig model.
- Decide audit partner or external review process.
- Decide legal/compliance participation policy.

## 13. Current Prototype Mapping

The current frontend prototype already represents:

- Arbor Foundry brand and tree logo.
- Launchpad, portfolio, verification, Topaz V2, finalize, rewards, LP locks, project review, and admin screens.
- Three sale strategies, with Fair Launch self-serve and the other two guided setup.
- Soft-cap-safe launch outcome math.
- 2% platform success fee only after success.
- $0 fee on failed launches.
- 80/20 LP fee split disclosure.
- Verify This Launch trust page.
- Admin/private accounting concept.
- Initial Solidity scaffold in `contracts/` for factory, fair-launch vault, Topaz finalizer, LP fee-split locker, vesting, and incentive tracking.
- First Foundry test suite for refund, finalization accounting, LP fee split, vesting, and incentive escrow paths.

The next engineering step is to expand negative-path contract tests and confirm the Topaz V2 ABIs before any testnet deployment.
