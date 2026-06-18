# Topaz Token Launchpad Design

## Working name

Arbor Foundry

Other possible names:

- Root Foundry
- Grove Foundry
- Canopy Foundry
- Seed Foundry

## Product thesis

Arbor Foundry should not copy a generic presale launchpad. The strongest version is an independent, liquidity-first launchpad that integrates with Topaz V2:

Implementation companion: see `docs/arbor-foundry-mvp-technical-spec.md` for the MVP contract, backend, frontend, testing, and deployment plan.

> Projects launch a token, create a Topaz trading pair, lock launch liquidity publicly, and fund early incentives for veTOPAZ voters.

The core promise:

> Liquidity rooted on Topaz.

Supporting product line:

> Launch, lock, and incentivize in one flow.

This turns new token launches into direct Topaz ecosystem activity:

- New pools on Topaz.
- More trading volume.
- More reason to own and vote with veTOPAZ.
- Public liquidity proof for buyers.
- Fee income preserved through locked LP positions when the fee-split locker is used.

## Who it serves

### Token teams

They need a credible way to launch without starting from zero trust. The launchpad gives them:

- Sale infrastructure.
- Token allocation rules.
- Topaz pool creation.
- Locked LP proof.
- Vesting proof.
- A first incentive campaign for liquidity and voters.

### Buyers

They need simple answers before participating:

- What am I buying?
- How much is being raised?
- How much liquidity will be locked?
- Can the team withdraw liquidity?
- Are team tokens vested?
- What happens if the raise fails?

### veTOPAZ voters

They need a reason to care about launches:

- New gauges or incentivized pools.
- Bribes or rewards funded by launch projects.
- More fee-generating pools.
- A public dashboard showing which new launches are actually bringing volume.

### Topaz ecosystem

Topaz gets ecosystem activity without owning or operating the launchpad:

- More pairs.
- More locked liquidity.
- More vote demand.
- More project onboarding.
- More public proof that launches are safer than random token deployments.

## Core launch types

### 1. Fair launch

Best default mode and the first self-serve MVP sale type.

Participants deposit the accepted raise asset during a fixed window. When the sale closes, token allocation is pro rata.

Useful rules:

- Soft cap and hard cap.
- Optional per-wallet cap.
- Refunds if soft cap is not reached.
- No first-come advantage if oversubscribed.
- Good for community credibility.

### 2. Fixed-price sale

Simple mode. It can be available from the beginning with guided review/setup, but should not be treated as fully automated/self-serve until the fair-launch path is tested.

The project sets token price, raise cap, wallet cap, start time, and end time. Buyers contribute until the cap is reached.

Useful rules:

- Strong per-wallet cap.
- Optional whitelist window.
- Public round after whitelist.
- Refunds if soft cap is not reached.

### 3. Liquidity bootstrap launch

More Topaz-native. It can be available from the beginning with guided review/setup, but should stay review-heavy until pricing, liquidity, and finalization behavior are tested.

The launch is built around seeding the trading pair rather than only selling tokens. A high percentage of the raise is paired with project tokens and locked as LP.

Useful rules:

- Minimum liquidity percentage.
- Automatic Topaz pool creation.
- Mandatory LP lock.
- First-epoch incentive funding.

## Recommended launch requirement

Every project should commit to these before a launch is listed:

- A defined percentage of the raise goes into Topaz liquidity.
- The LP position is locked through the Topaz LP locker or an approved locker.
- Team tokens are vested.
- Token contracts are verified.
- Mint authority, tax controls, blacklist controls, and owner permissions are disclosed.
- First launch incentives are funded before trading opens.

Suggested default:

- First-version raises should be realistic for small ecosystem teams: roughly $25,000 to $150,000 as a common range, with larger goals treated as exceptions that need stronger review.
- 50% to 70% of raised funds go into LP.
- LP is locked for at least 12 months, with permanent fee-split locking as the premium trust option.
- Team allocation vests over 6 to 24 months.
- First 1 to 4 epochs include funded voter or LP incentives.

## Token allocation template

A clean starting template:

| Bucket | Suggested range | Notes |
| --- | ---: | --- |
| Public sale | 30% to 50% | Sold through the launchpad |
| Liquidity | 20% to 40% | Paired with raised asset on Topaz |
| Team | 10% to 20% | Vested |
| Ecosystem/incentives | 10% to 25% | Bribes, LP rewards, market growth |
| Treasury | 5% to 15% | Vested or timelocked |

The UI should make these buckets unavoidable. Buyers should not need to read a whitepaper to understand where the supply goes.

## Topaz-native flywheel

The launchpad should create this loop:

1. Project launches through Arbor Foundry.
2. Sale closes successfully.
3. Topaz pair is created automatically.
4. Initial LP is locked.
5. Project funds first-epoch incentives.
6. veTOPAZ voters direct emissions to the new pool.
7. Pool gains liquidity and volume.
8. Fees increase.
9. More projects want the same launch path.

This is the main reason to build the product as a Topaz launchpad instead of a generic presale tool.

## Platform economics

The MVP fee model is intentionally simple:

- 2% success fee on completed raises.
- 0% platform success fee when soft cap is missed.
- No flat listing fee in the MVP.
- 20% of claimable LP fees when the Arbor Foundry fee-split locker is used.
- Platform treasury routing should be configured internally at the contract/backend layer, not displayed as a public payout wallet.
- A small BNB application or deploy fee can be configurable later, but the frontend prototype should not hardcode a required fee until backend and contract support exists.

LP fee split:

| Fee recipient | Share |
| --- | ---: |
| Project creator | 80% |
| Arbor Foundry | 20% |

The cleanest public message:

> Arbor Foundry earns a 2% success fee only when a launch completes, plus 20% of claimable LP fees when projects choose the fee-split locker.

Short public version:

> No success, no fee. If soft cap is missed, buyers refund and Arbor Foundry takes 0%.

## Smart contract modules

### Topaz V2 BNB Chain integration

The recommended first integration path is Topaz V2 volatile liquidity on BNB Chain, not Slipstream or LP NFTs.

Use these mainnet anchors:

| Contract | Address |
| --- | --- |
| Topaz V2 Router | `0x1E98c8226e7d452e1888e3d3d2F929346321c6c3` |
| Topaz Pool Factory | `0x65E6cD0eF5D3467030103cf3d433034E570b5784` |
| Topaz Voter | `0x2F80F810a114223AC69E34E84E735CaD515dAD67` |
| WBNB | `0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c` |

Default launch settings:

- Chain: BNB Chain mainnet, chain id `56`.
- Pool type: Topaz V2 volatile pool.
- Stable flag: `stable = false`.
- Quote asset: `USDT` for the self-serve MVP. `WBNB` can be handled later as a guided/admin exception.
- LP asset: fungible ERC20 LP token, where the pool address is also the LP token address.
- First fee path: non-gauged V2 LP fees claimed by the launchpad locker with `pool.claimFees()`.

The launchpad should quote liquidity with the live router signature `quoteAddLiquidity(tokenA, tokenB, stable, factory, amountADesired, amountBDesired)`, apply nonzero slippage minimums, approve both assets to the Topaz router, and call `addLiquidity(..., to = locker, ...)` so ERC20 LP tokens are minted directly into the fee-split locker.

Important fee distinction:

- If the pool has no gauge, the locker holding the LP tokens can claim and split LP-side trading fees.
- If the pool later gets a gauge, fee and reward handling should move to the Topaz voter/reward flow instead of assuming the LP locker continues receiving all passive fees.

### LaunchFactory

Creates and registers new launches.

Responsibilities:

- Deploy launch contracts or clones.
- Store launch metadata.
- Enforce approved launch templates.
- Emit events for launch discovery.

### SaleVault

Holds buyer contributions and project tokens.

Responsibilities:

- Accept deposits.
- Track buyer allocations.
- Enforce caps.
- Enable refunds if soft cap fails.
- Release funds only during successful finalization.
- Enable claims after finalization.

### TokenFactory, optional

Lets projects deploy a standardized launch token.

This is optional but useful because standardized tokens are easier to review.

Allowed first-version token:

- Fixed supply.
- No transfer tax.
- No blacklist.
- No hidden mint.
- Verified source.
- Ownership renounced or transferred to a timelock after setup.

If custom tokens are allowed, the launchpad should run a disclosure checklist and risk badge system.

### VestingVault

Locks team, treasury, and ecosystem allocations.

Responsibilities:

- Cliff and linear vesting.
- Public beneficiary view.
- Public unlock schedule.
- Claim events.

### LiquidityLauncher

Creates the Topaz pair and adds initial liquidity.

Responsibilities:

- Take the configured percentage of raised funds.
- Pair it with the configured token allocation.
- Create or reuse the Topaz V2 volatile pool with `stable = false`.
- Quote liquidity and enforce nonzero slippage minimums.
- Add liquidity through the Topaz V2 router.
- Mint ERC20 LP tokens directly to the locker.

The first version should avoid fee-on-transfer project tokens unless they are tested end to end with Topaz V2 liquidity and fee accounting.

### LPLockerAdapter

Connects finalization to the fee-split LP locker.

Responsibilities:

- Approve and deposit LP position into the locker.
- Store lock proof.
- Expose LP lock status to the launch page.
- Support permanent fee-split locking where possible.

Important distinction:

The locker should not be described as a burn unless fees are actually destroyed. The better phrase is:

> Permanently locked LP with claimable fees.

### IncentiveManager

Funds first launch incentives.

Responsibilities:

- Hold incentive budget from the project.
- Deposit approved rewards into the relevant Topaz incentive or bribe contract.
- Publish the incentive schedule.
- Link the incentive to the launched pair.

This should be manual in MVP if the exact Topaz gauge and bribe interfaces are not confirmed.

### ProjectRegistry

Stores project status and disclosures.

Responsibilities:

- Project identity metadata.
- Contract addresses.
- Review status.
- Risk flags.
- Audit links.
- Social links.
- Launch history.

## Launch lifecycle

### 1. Apply

Project submits:

- Token name and symbol.
- Project token logo.
- Token contract or request to deploy one.
- Supply allocation.
- Raise target.
- Accepted raise asset.
- Liquidity percentage.
- Team vesting schedule.
- Incentive budget.
- Optional social share settings, including campaign hashtag and creator channels.
- Project links and disclosures.

### 2. Review

Topaz reviews:

- Token permissions.
- Allocation plan.
- LP lock plan.
- Vesting plan.
- Incentive plan.
- Website and social presence.
- Basic scam and impersonation risks.

The review badge should be careful:

> Reviewed disclosures

Not:

> Safe

### 3. Publish upcoming launch

The public launch page goes live with:

- Countdown.
- Raise terms.
- Allocation chart.
- Risk disclosures.
- Contract links.
- Vesting schedule.
- LP lock commitment.
- Incentive commitment.

### 4. Accept contributions

Participants connect wallet and contribute.

The UI should show:

- Amount contributed.
- Estimated token allocation.
- Cap remaining.
- Refund rules.
- Claim timing.
- Whether the sale is soft-cap safe or already finalizable.

### 5. Finalize

If soft cap is met:

- Sale closes.
- The actual final raise becomes the accounting base, even if the hard cap was not reached.
- 2% Arbor Foundry success fee is accounted from the actual final raise and routed through internal platform treasury configuration.
- Liquidity funds are calculated from the remaining successful raise according to the creator-set LP commitment.
- The UI should show total raised, platform success fee, net raise after fee, liquidity commitment percentage, amount sent to Topaz liquidity, and remaining creator/project proceeds.
- Topaz pool is created or seeded.
- LP is locked.
- Vesting vault is funded.
- Launch incentives are funded or queued.
- Buyer claim opens.
- Trading opens.
- Direct Topaz trade link and pool/LP proof are published, even if the Topaz frontend indexer needs time to surface the new pair automatically.

If soft cap is not met:

- Project cannot withdraw funds.
- Buyers can refund.
- Arbor Foundry platform success fee is `0`.
- No Topaz pool is created.
- No LP token is minted or locked.
- Buyer token claims do not open.
- Launch page moves to failed/refunded status.

### 6. Post-launch dashboard

After launch, the page should continue to matter.

Show:

- LP lock proof.
- Pool liquidity.
- Volume.
- Fees.
- Vesting unlocks.
- Incentives funded.
- Gauge/vote status.
- Holder concentration.
- Contract permissions.

This is where Topaz can separate itself from launchpads that disappear after the sale.

## Frontend screens

### Launch list

Tabs:

- Approved
- Live
- Upcoming
- Finalized
- Refunding

Cards should show:

- Token symbol.
- Raise progress.
- Time remaining.
- LP lock badge.
- Vesting badge.
- Incentives funded badge.
- Review status.
- Soft-cap status.
- Refund/finalization outcome.

### Launch detail

Main sections:

- Plain-language launch summary.
- Buyer trust checklist.
- Launch outcome math for fee, net raise, liquidity, and creator proceeds.
- Buy panel.
- Raise progress.
- Sale terms.
- Token allocation.
- Liquidity plan.
- LP lock proof.
- Vesting schedule.
- Incentive schedule.
- Optional creator share kit.
- Contract links.
- Risk disclosures.

The buy panel should be compact and direct. It should change by launch state: contribute for live raises, watch for upcoming raises, claim for finalized raises, and refund for failed raises. The proof sections should be easy to inspect before buying and must not imply that LP is locked before a successful close.

Buyers should immediately understand whether the project is approved, whether it is live, whether soft cap has been met, what happens if the raise fails, where refunds happen, when claims open, where proof is published, and where to trade after finalization.

Mobile and tablet layouts should be treated as first-class. Navigation, launch rows, buyer action panels, proof strips, tables, social share cards, and the create-launch drawer should collapse without horizontal page overflow. On small screens, tables may stack or scroll inside their own container, but core actions must remain thumb-friendly.

### Create launch wizard

Steps:

1. Token
2. Sale
3. Liquidity
4. Vesting
5. Incentives
6. Links
7. Social
8. Review

The wizard should create a draft or pending-review launch, not a live launch. It should block approval if required proof fields are missing. In the MVP, Fair Launch is the self-serve automated path. Fixed-price sale and liquidity bootstrap can be offered from the beginning with guided review/setup, but should not bypass review or be treated as fully automated until contracts and backend support exist.

Creator inputs should be constrained where the platform must enforce known options. Sale type, accepted asset, contract mode, quote asset, lock duration, refund behavior, audit/review status, and social-share cadence should use dropdown choices rather than free text. In the MVP, the sale-type dropdown can show all three modes, but should label Fair Launch as self-serve and the other two as guided setup modes. Soft cap, hard cap, wallet max, and liquidity commitment should use number inputs. Platform economics, LP fee split, pool defaults, and proof routes should be read-only in the creator form. Private treasury routing should stay out of the public creator UI.

Each wizard step should show short domain guidance so creators understand the consequence of the fields they are setting, especially soft cap, hard cap, liquidity commitment, vesting, incentives, and optional social sharing.

The review gate is an anti-spam and quality control layer. It should reduce low-quality launches by checking token behavior, disclosures, project links, social links, liquidity commitment, vesting terms, and refund safety before anything can go live.

The Social step is optional. A creator can enable or disable generated progress posts without changing sale terms, token terms, liquidity routing, refunds, or proof requirements. If enabled, Arbor Foundry should generate copy-ready updates for soft-cap pushes, soft-cap-met milestones, hard-cap progress, finalization, proof publication, and refund notices.

### Verify This Launch

Each launched token gets a permanent verification page. The user-facing purpose is to check the sale result, liquidity status, LP lock, vesting, claims/refunds, and Topaz pair before trusting or acting on the launch.

State-aware verification should show:

- Launch status.
- Soft cap and hard cap.
- Final raised amount or current progress.
- Arbor Foundry platform success fee.
- Net raise after fee.
- Liquidity amount added to Topaz.
- Topaz pair address or pending state.
- LP lock status.
- Buyer claim status.
- Refund status.
- Vesting status if applicable.
- Incentive deposits if applicable.
- Trade on Topaz link when available.

State behavior:

- Draft or pending review: not public or not approved yet.
- Approved: reviewed, but deposits are not open.
- Upcoming: approved and scheduled, but not live.
- Live: raise in progress.
- Finalized: liquidity, LP lock, claims, and trade proof are visible.
- Refunding: refund proof is visible, with no liquidity proof because no Topaz pair was created.

This page is the trust asset.

## Risk controls

Minimum requirements:

- Reentrancy protection.
- Refund path tested.
- Finalization can only happen once.
- Funds cannot be withdrawn before success.
- Soft-cap failure cannot trap buyer funds.
- LP lock cannot be bypassed after a successful launch.
- Team tokens cannot be claimed before vesting.
- Fee-on-transfer tokens are blocked in MVP.
- Upgradeability avoided unless there is a very clear reason.

Project risk flags:

- Owner can mint.
- Owner can blacklist.
- Transfer tax exists.
- Tax can change.
- Trading can be paused.
- Team allocation unlocked.
- LP lock shorter than default.
- No audit.
- New or unverified social presence.

The UI should show flags plainly and avoid overpromising safety.

## MVP scope

The first useful version should be narrow:

- One self-serve sale type: fair launch.
- Guided setup intake for fixed-price sale and liquidity bootstrap, with review required before any live launch.
- One or two accepted raise assets.
- Manual project approval.
- Mandatory Topaz liquidity creation.
- Mandatory LP lock.
- Basic vesting vault.
- Buyer refund and claim flow.
- Public launch detail page.
- Optional creator share kit for progress updates.
- Public launch verification page.
- Admin panel for review and launch status.
- Private platform accounting for total raised, expected 2% success fees, actual collected fees, failed launches at $0 fee, liquidity committed, LP fee split status, approval queue, finalization tasks, and refund enablement tasks.
- Configurable private platform treasury settings, kept out of normal public UI.

Do not start with:

- Permissionless launch creation.
- Permissionless fixed-price sale contracts before the fair-launch path is tested.
- Permissionless liquidity bootstrap contracts before the fair-launch path is tested.
- Complex bonding curves.
- Multi-chain support.
- Custom token taxes.
- Fully automated gauge onboarding.
- Launch NFTs or gamified tiers.

## Version 1 upgrades

After MVP:

- veTOPAZ holder launch voting.
- Launch tiers based on locked TOPAZ or veTOPAZ.
- Automated bribe or incentive deposits.
- Project analytics leaderboard.
- Reputation score for launch teams.
- Referral tracking.
- Audit partner marketplace.
- Post-launch milestone unlocks.
- Self-serve fixed-price sales.
- Self-serve liquidity bootstrap launches.

## Open implementation questions

These need answers before contracts are written:

- Quote asset policy is selected: USDT first for self-serve MVP; WBNB later only as guided/admin setup.
- Should the launchpad deploy tokens, accept existing tokens, or support both?
- Should LP locking be permanent by default or time-locked by default?
- Should launch incentives be required for every launch?
- What is the platform fee, and how much should route back into TOPAZ or veTOPAZ?
- Should Arbor Foundry charge a small configurable BNB application/deploy fee once contract support exists?
- What review standard is required before a launch appears publicly?
- What legal/compliance policy applies to launch participation?

## Recommended build path

1. Confirm the Topaz V2 router/factory ABI against the live BNB Chain deployment.
2. Lock Fair Launch as the self-serve MVP sale type, keep the other modes available through guided setup, and decide accepted raise asset.
3. Write a concrete launch configuration schema.
4. Draft contracts around the schema.
5. Build the launch detail UI and launch verification page first.
6. Add create-launch/admin tooling.
7. Test refund, finalization, LP locking, vesting, and claims.
8. Run a private test launch before opening public submissions.

## Short public positioning

Arbor Foundry is an independently operated, liquidity-first launchpad for projects that want to root their launch liquidity on Topaz V2. Its promise is simple: liquidity rooted on Topaz. Every launch is built around public sale terms, locked Topaz V2 liquidity, transparent vesting, and early Topaz incentives, so buyers can inspect the launch and veTOPAZ voters can see which new pools are worth supporting.
