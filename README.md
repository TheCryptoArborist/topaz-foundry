# Arbor Foundry Prototype

This is a dependency-free frontend prototype for Arbor Foundry, an independently operated launchpad that routes launch liquidity into Topaz V2.

Brand promise: Liquidity rooted on Topaz.

Open `index.html` directly in a browser, or serve this folder with any small static server.

Technical build spec: `docs/arbor-foundry-mvp-technical-spec.md`

Smart contract scaffold: `contracts/README.md`

The prototype shows:

- Launch list tabs for approved, live, upcoming, finalized, and refunding launches.
- Selected launch detail with sale terms, LP lock proof, vesting, incentives, and risk flags.
- Plain-language launch summary cards for buyers and project creators, including current state, next milestone, and creator focus.
- State-aware buyer actions for live contributions, upcoming watches, finalized claims, and refunding launches.
- Phone and tablet responsive layout for navigation, launch rows, action panels, tables, proof sections, and the create-launch drawer.
- Contribution panel with simulated wallet state and estimated token receipt.
- Buyer trust checklist and launch outcome math showing approval, soft-cap state, 2% platform success fee, net raise, Topaz liquidity, creator proceeds, claims, refunds, and trade readiness.
- Verify This Launch page for sale result, platform fee accounting, Topaz pair, LP lock, vesting, claims/refunds, incentives, and Topaz trade proof.
- Topaz V2 integration screen with BNB Chain mainnet addresses, `stable=false` volatile pool defaults, and the bonded-launch to LP-lock flow.
- Buyer portfolio, refund, rewards, LP-lock registry, project review, and admin readiness screens.
- Create-launch drawer where project creators add a token logo and set controlled raise, liquidity, vesting, incentive, links, social, and review details. Fair Launch is the self-serve MVP path; fixed-price sale and liquidity bootstrap are available with guided review/setup.
- Optional creator share kit with generated X/Telegram/Discord progress updates, campaign tags, and launch-link copying for each token raise.
- Approval gate: new launches move Draft -> Pending Review -> Approved before they can be scheduled or go live.
- Soft-cap outcome rules: launches that meet soft cap finalize from the actual raise, while launches below soft cap move to refunds with 0% platform fee, no Topaz pool, no LP lock, and no buyer claims.
- Platform fee disclosure with a 2% launch success fee and 80/20 LP-fee split, without exposing private treasury routing in the public UI.
- Finalize Launch workspace showing the post-goal flow: platform fee accounting, Topaz pair creation, liquidity add, LP lock, buyer claims, proof publication, and Topaz trade link.
- Admin/private accounting for total raised, expected and collected success fees, failed launches at $0 fee, liquidity committed, LP fee split status, approval queue, finalization tasks, and refund tasks.
- Custom Arbor Foundry tree logo in `assets/arbor-foundry-logo.jpeg`.

No wallet transaction, contract call, or backend request is made from the frontend yet. The `contracts/` folder is the starting Solidity scaffold for the MVP and still needs tests, Topaz ABI confirmation, testnet dry runs, and security review before handling user funds.
