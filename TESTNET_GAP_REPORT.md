# Arbor Foundry Testnet Gap Report

Date: June 21, 2026

## Purpose

This report lists the remaining testnet scenarios that should be completed before any mainnet smoke test. Some items have local unit coverage, but still need a repeatable BNB testnet rehearsal using the latest fixed source.

## Required Remaining Scenarios

| Scenario | Current Status | What Still Needs To Happen | Mainnet Impact |
| --- | --- | --- | --- |
| Exact soft cap | Not fully tested on BNB testnet | Run a launch where total raised equals soft cap exactly, then finalize and verify fee, creator proceeds, LP, claims, and proof page | Blocks mainnet |
| Exact hard cap | Partially unit-tested | Run exact hard cap on testnet, then attempt one extra contribution and confirm rejection | Blocks mainnet |
| Failed launch refunds | Unit-tested and manually tested | Repeat after redeploying latest fixed source; confirm no platform fee and no LP pair | Blocks mainnet |
| Successful launch claims | Unit-tested and manually tested | Repeat after redeploying latest fixed source; confirm claim amounts and proof page links | Blocks mainnet |
| Duplicate claims | Unit-tested | Perform explicit testnet duplicate claim and duplicate refund attempts from UI or direct wallet flow | Blocks mainnet |
| Early contributions | Not tested | Schedule a future sale and confirm deposits revert before start time | Blocks mainnet |
| Late contributions | Not tested | End a sale window and confirm deposits revert after end time | Blocks mainnet |
| Zero contribution attempts | Not tested | Attempt zero USDT contribution and confirm clean rejection in contract and UI | Blocks mainnet |
| Creator cancellation | Partially fixed | Test cancellation before deposits, after deposits, and after live state. Local source now rejects cancellation after deposits. | Blocks mainnet |
| Unauthorized finalization | Not explicitly tested | Try finalization from a non-owner wallet and confirm rejection | Blocks mainnet |
| Treasury withdrawal / receipt | Partially tested through accounting | Confirm platform success fee reaches the treasury address on testnet for each successful launch; no fee on failed launches | Blocks mainnet |
| Wrong-chain frontend config | Partially observed | Add a regression test or repeatable checklist confirming wrong-chain banner and disabled write actions | Blocks mainnet |
| LP lock verification | Partially tested | After latest-source redeploy, confirm LP lock record, permanent lock settings, proof page, and explorer links | Blocks mainnet |
| Fee claiming without unlocking LP principal | Partially tested | Claim/split fees, confirm 80/20 routing, confirm LP principal balance remains locked, and confirm permanent LP cannot be withdrawn | Blocks mainnet |

## Additional Testnet Gaps

| Scenario | Current Status | Required Next Step |
| --- | --- | --- |
| Multiple-buyer pro-rata claim math | Under-tested | Run at least three buyer wallets with uneven contribution amounts and verify claim math |
| Rounding and dust handling | Under-tested | Confirm leftover token dust amount and define/admin-test final handling |
| Admin config changes | Under-tested | Test changing treasury/finalizer before launch and preventing unsafe changes after launch |
| Quote token allowlist on deployed testnet contracts | Unit-tested | Confirm deployed factory allowlist behavior through reads and a rejected write attempt |
| Fixed-price sale mode | Guided only | Keep off public self-serve until adapter math and tests exist |
| Liquidity bootstrap mode | Guided only | Keep off public self-serve until adapter math and tests exist |
| Token logo persistence | UI-tested locally | Confirm persistence after refresh and across browser sessions |
| Proof indexer stale-data behavior | Partially tested | Confirm UI explains indexing delays and links to explorer authority |
| BNB testnet gas limits | Partially tested | Repeat max contribution, finalization, refund, claim, LP lock, and LP fee split using realistic gas limits |
| Contract verification | Not completed | Verify source and constructor args on explorer after the next testnet redeploy |
| Owner/multisig transfer rehearsal | Not completed | Transfer ownership to intended owner or test multisig and verify all admin actions still work |
| Emergency pause | Not implemented | Implement and test before mainnet |

## Current Testnet Judgment

The current BNB testnet testing has proven that the product direction works, but it is not yet complete enough for mainnet. The next testnet phase should be a **fresh latest-source rehearsal**:

1. Redeploy the fixed contracts on BNB testnet.
2. Record addresses and constructor arguments.
3. Verify the contract source where possible.
4. Run one successful launch through contribution, finalization, LP lock, buyer claim, and LP fee split.
5. Run one failed launch through contribution, refund enablement, buyer refund, and proof page.
6. Run the edge-case checklist above.

Current classification: **safe for continued testnet only**.
