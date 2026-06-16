# Topaz Foundry Prototype

This is a dependency-free frontend prototype for Topaz Foundry, a TopazDEX launchpad built around the promise: Liquidity rooted on Topaz.

Open `index.html` directly in a browser, or serve this folder with any small static server.

The prototype shows:

- Launch list tabs for live, upcoming, finalized, and refunding launches.
- Selected launch detail with sale terms, LP lock proof, vesting, incentives, and risk flags.
- Contribution panel with simulated wallet state and estimated token receipt.
- Proof dashboard for Topaz V2 ERC20 LP-token locking, vesting, and incentives.
- Topaz V2 integration screen with BNB Chain mainnet addresses, `stable=false` volatile pool defaults, and the bonded-launch to LP-lock flow.
- Buyer portfolio, refund, rewards, LP-lock registry, project review, and admin readiness screens.
- Create-launch drawer that walks through token, sale, liquidity, vesting, incentives, and review steps.

## Local Preview

Run this from the repository root with Node.js:

```bash
node server.js
```

Then open `http://127.0.0.1:5185/`.

## Product Spec

The launchpad design brief is in `docs/topaz-token-launchpad-design.md`.

No wallet transaction, contract call, or backend request is made. This is only a visual and interaction prototype.
