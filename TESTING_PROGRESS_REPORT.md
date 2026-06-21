# Arbor Foundry Testing Progress Report

Date: June 21, 2026

## Realistic Testing Completion Estimate

Estimated testing completion: **55%**

This is not yet a 75-80% complete project for mainnet readiness. The fair-launch MVP is meaningfully tested, and the BNB testnet UI has proven several real flows, but the project still has unresolved production-readiness gaps around edge cases, source verification, redeployment of local fixes, admin controls, emergency response, and external security review.

Practical breakdown:

| Area | Current State | Estimated Completion |
| --- | --- | ---: |
| Fair-launch contract unit tests | Core success, refund, claim, fee, and LP-lock paths covered | 65% |
| BNB testnet UI flow | Draft, setup, contribution, refund, finalize, claim, proof, and LP-fee rehearsal paths manually tested | 60% |
| Frontend/backend integration | Hard-coded BNB testnet contracts, Netlify proof reader, role-based UI visibility | 55% |
| Edge-case and abuse testing | Important gaps remain | 35% |
| Mainnet deployment readiness | Not ready without redeploy, verification, multisig, emergency plan, and audit | 35% |

## Fully Tested

The following areas have meaningful automated or repeated manual coverage:

- Contract compilation succeeds with `forge build`.
- Contract test suite passes: **17 tests passed, 0 failed**.
- JavaScript syntax checks pass for `app.js`.
- Netlify proof-reader syntax checks pass for `netlify/functions/testnet-proof-records.mjs`.
- Fair launch refund path when soft cap is missed.
- Successful fair launch finalization accounting.
- Buyer token claims after successful finalization.
- Duplicate refund rejection.
- Duplicate buyer token claim rejection.
- Hard cap enforcement.
- Wallet minimum and maximum contribution enforcement.
- Guided setup sale cannot use the self-serve fair-launch deposit path.
- Quote token allowlist blocks unapproved quote assets.
- Mock Topaz finalization path creates or reuses a pool and mints LP.
- Incentive escrow prevents overfunding and releases only funded amounts.
- Vesting vault releases vested tokens.
- LP fee split distributes fees 80% creator / 20% Arbor Foundry.
- LP lock registration can no longer be overwritten in local source.
- Cancellation after buyer deposits is now rejected in local source.
- Finalizer rejects token/quote mismatches between finalization parameters and SaleVault config in local source.
- Manual BNB testnet flows have been exercised for draft creation, setup, contribution, failed-launch refund, successful finalization, buyer claim, proof page display, and LP-fee split transaction capture.

## Partially Tested

These areas are promising but not complete enough for mainnet:

- BNB testnet end-to-end launch flow: tested manually, but not yet repeatable as an automated integration suite.
- Netlify proof indexing: returns records and proof pages, but depends on public RPC/log reads and should not be treated as the only source of truth.
- LP fee claiming: basic split behavior is tested; more edge cases are needed around zero-fee claims, repeated claims, fee accrual, and proving LP principal remains locked.
- Role-based UI visibility: tested visually for admin and non-admin wallets, but contract-level role enforcement still needs explicit unauthorized test coverage.
- Sale windows: start/end fields exist, but early and late contribution scenarios need direct tests.
- Topaz V2 integration: covered with mocks and a local reusable layer; live mainnet Topaz fork rehearsal is not part of the normal passing test run.
- Mobile and tablet layout: manually improved, but no automated viewport regression suite exists.
- Contract deployment scripts and constructor arguments: documented for BNB testnet, but mainnet arguments are not finalized or verified.

## Not Tested

These are not sufficiently tested yet:

- Exact soft cap contribution and finalization behavior.
- Exact hard cap contribution behavior.
- Early contribution rejection before `startsAt`.
- Late contribution rejection after `endsAt`.
- Zero contribution attempts.
- Creator cancellation with no deposits.
- Unauthorized finalization from a non-owner wallet.
- Unauthorized launch approval/open/refund actions.
- Treasury/platform-fee receipt verification across multiple launches.
- Mainnet USDT and real Topaz V2 router/factory integration.
- Fixed-price sale adapter.
- Liquidity-bootstrap adapter.
- Contract source verification on explorer.
- External security review.
- Emergency pause and incident response behavior.
- Multiple-buyer pro-rata rounding and final dust handling.
- Mainnet wrong-chain/wrong-contract frontend regression tests.
- Large or adversarial contribution sequences.

## Current Mainnet Blockers

- Local safety fixes are not automatically included in the already deployed BNB testnet contracts. A fresh testnet redeploy or targeted upgrade/redeployment rehearsal is needed before treating those fixes as proven on-chain.
- No external security review has been completed.
- Admin/owner powers are still concentrated in one owner model; mainnet should use a multisig or equivalent operational control.
- No emergency pause/response plan is implemented.
- Mainnet Topaz V2 router/factory and USDT addresses must be reconfirmed immediately before deployment.
- Contracts are not recorded as verified with constructor arguments.
- Fixed-price and liquidity-bootstrap modes are still guided/manual modes, not fully automated public self-serve flows.
- Test coverage is still missing several edge cases listed above.

## 75-80% Reality Check

Arbor Foundry is **not** realistically 75-80% tested for mainnet. It is closer to **55% overall**.

The strongest part is the fair-launch MVP path. The weakest parts are production safety, edge-case coverage, admin/owner operational controls, source verification, and testnet redeployment of newly fixed safety issues.

## Current Classification

**Safe for continued testnet only.**

It is not yet safe for limited mainnet smoke testing until the mainnet blockers above are resolved.
