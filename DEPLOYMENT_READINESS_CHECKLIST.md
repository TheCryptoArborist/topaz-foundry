# Arbor Foundry Deployment Readiness Checklist

Date: June 21, 2026

## Final Recommendation

Current recommendation: **No-go for mainnet deployment.**

Current classification: **safe for continued testnet only.**

Arbor Foundry should not move to limited mainnet smoke testing until the latest local safety fixes are redeployed and verified on testnet, the remaining edge cases are covered, and operational controls are hardened.

## Readiness Checklist

| Item | Status | Notes |
| --- | --- | --- |
| Contracts compile cleanly | Partial pass | `forge build` succeeds, but lint warnings remain around timestamp comparisons and test mock unchecked transfers. |
| Tests pass | Pass | `forge test` passes: 17 tests, 0 failures. |
| Testnet addresses recorded | Pass, needs refresh | BNB testnet addresses are recorded in `docs/bnb-testnet-deployment-record.md`, but the deployed contracts do not automatically include the latest local safety fixes. |
| Constructor arguments recorded | Partial | Deployment docs and scripts describe arguments, but each deployed contract should have source/constructor verification recorded. |
| Treasury address confirmed | Partial | Testnet/frontend treasury is `0x90f9c1c0c675A0ce9D539c540DB7F4A1f7e583AE`; confirm final mainnet treasury before deployment. |
| Owner/admin wallet confirmed | Partial | Testnet owner/admin is `0xE8b63245DdDAB73C7A276818942341D8Cfb7D7A7`; mainnet should use a multisig or stronger custody model. |
| Contracts verified | Not ready | No complete verified-source record is present for production readiness. |
| Frontend points to correct chain/contracts | Testnet pass | Frontend is wired to BNB testnet 97 and recorded testnet contracts. Mainnet config is not production-ready. |
| Small-value mainnet smoke test plan | Draft only | Do not run until blockers are cleared. |
| Emergency pause/response plan | Missing | Must be implemented or explicitly designed before mainnet. |
| External security review | Missing | Required before handling mainnet user funds. |
| Final go/no-go | No-go | Continue testnet only. |

## Current BNB Testnet Configuration

Recorded testnet values:

| Item | Address |
| --- | --- |
| Owner/test wallet | `0xE8b63245DdDAB73C7A276818942341D8Cfb7D7A7` |
| Platform treasury | `0x90f9c1c0c675A0ce9D539c540DB7F4A1f7e583AE` |
| Mock USDT quote token | `0xA7C16a4CadA1c3bCC884904144B372aB09674A1d` |
| LaunchFactory | `0xC6b44e114BD06c08257aC6EEEB409c022EDCb16B` |
| TopazFinalizer | `0x4CfCBC52355bFf61bC99E8F0f43B38Fe5AAEa466` |
| FeeSplitLPLocker | `0xB00f7c3a599a01A1A4D9312633ca86f74bdF85Ce` |
| VestingVault | `0x109060137eF2C77980136aC2f9e72353f2Aa45Ce` |
| IncentiveEscrow | `0x8BAE46797C58B5870F65EB564D53CA11bb3b7a35` |

Important: these addresses should be treated as the previous testnet deployment set. The latest local fixes should be redeployed to testnet before they are considered proven on-chain.

## Required Before Limited Mainnet Smoke Testing

- Fresh BNB testnet deployment using the latest source.
- Fresh successful-launch rehearsal.
- Fresh failed-launch refund rehearsal.
- Exact soft-cap and exact hard-cap tests.
- Early, late, and zero-contribution tests.
- Unauthorized admin/finalization tests.
- LP fee claim test proving fee split works without unlocking LP principal.
- Permanent LP lock withdrawal rejection test.
- Explorer source verification for all deployed contracts.
- Constructor arguments recorded.
- Mainnet treasury wallet confirmed.
- Mainnet owner/admin custody upgraded to multisig or equivalent.
- Emergency pause/response plan implemented and tested.
- External security review completed.
- Frontend production configuration separated from testnet configuration.

## Small-Value Mainnet Smoke Test Plan

Only run this after the required blockers are cleared:

1. Deploy fresh mainnet contracts with final audited source.
2. Use a multisig or confirmed production owner/admin wallet.
3. Verify all contracts and constructor arguments on explorer.
4. Confirm mainnet Topaz V2 router/factory, USDT quote token, and treasury address.
5. Use a controlled test token and a private/known-wallet launch with very small values.
6. Run a successful launch: create, approve, fund, open, contribute, finalize, lock LP, claim buyer tokens, and check proof.
7. Run or simulate a failed-launch path with tiny values: contribute below soft cap, enable refunds, claim refund, confirm no platform fee and no LP pair.
8. Confirm frontend proof links, explorer links, Topaz pair link, and treasury receipt.
9. Stop new launches until results are reviewed.

## Emergency Response Plan Needed

Before mainnet, Arbor Foundry should have a written and tested plan for:

- Pausing new deposits during an incident.
- Leaving refunds and claims available when appropriate.
- Disabling new launch creation if config is wrong.
- Publishing a public status note.
- Rotating frontend contract config only after verification.
- Multisig approval requirements for sensitive changes.

## Final Classification

**1. safe for continued testnet only**

The project should continue active BNB testnet testing. It is not yet ready for limited mainnet smoke testing, and it is not ready for public mainnet deployment.
