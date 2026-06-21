# Arbor Foundry Security Review

Date: June 21, 2026

Scope reviewed:

- Launch creation
- Contributions
- Refunds
- Finalization
- Buyer claims
- Platform fees
- Creator proceeds
- LP creation
- LP locking
- LP fee claiming
- Treasury handling
- Admin/owner powers
- Frontend contract configuration

This is a focused readiness review, not a replacement for an external audit.

## Summary

No obvious critical "anyone can drain all funds" bug was found in the reviewed local source. However, several high-impact mainnet blockers remain. The project should remain on testnet until admin controls, pause/response controls, edge-case coverage, contract verification, and external review are complete.

Recent local fixes added during review:

- `SaleVault.cancel()` now rejects cancellation after any buyer deposits.
- `FeeSplitLPLocker.registerLock()` now rejects overwriting an existing LP lock.
- `TopazFinalizer.finalizeLaunch()` now rejects mismatched token/quote parameters that do not match the SaleVault config.
- Tests were added for each of those fixes.

## Critical Risks

No confirmed Critical issue was found in this focused review.

## High Risks

### ARB-H-01: Single owner/admin control is too powerful for mainnet

| Field | Detail |
| --- | --- |
| Severity | High |
| Affected file/function | `contracts/src/LaunchFactory.sol`: `setPlatformTreasury`, `setFinalizer`, `setLaunchFinalizer`, `setLaunchPlatformTreasury`, `approveLaunch`, `scheduleLaunch`, `openLaunch`, `enableRefunds`, `cancelLaunch`; `contracts/src/TopazFinalizer.sol`: `finalizeLaunch`; `contracts/src/FeeSplitLPLocker.sol`: `registerLock`, `withdrawUnlockedLp` |
| Scenario | If the owner wallet is compromised or misconfigured, an attacker could change finalizer or treasury routing, approve/open unsafe launches, register bad LP-lock parameters, or withdraw unlocked LP where non-permanent locks exist. |
| Recommended fix | Use a multisig owner before mainnet, separate platform admin and emergency roles, and document a change-control process. Consider timelocks for sensitive config changes after launch creation. |
| Blocks mainnet deployment | Yes |

### ARB-H-02: No emergency pause or incident response control

| Field | Detail |
| --- | --- |
| Severity | High |
| Affected file/function | `contracts/src/SaleVault.sol`: `deposit`; `contracts/src/LaunchFactory.sol`: launch state controls |
| Scenario | If a token issue, router issue, frontend misconfiguration, or live exploit appears while a launch is accepting deposits, there is no clean pause mechanism. Refunds only work when the soft cap is missed, so a live issue above soft cap could be operationally messy. |
| Recommended fix | Add a narrowly scoped pause for new deposits and admin actions, plus a documented incident runbook. The pause should not block refunds or buyer claims once those states are valid. Add tests for pause/unpause and safe escape paths. |
| Blocks mainnet deployment | Yes |

### ARB-H-03: Deployed testnet contracts may be stale relative to local safety fixes

| Field | Detail |
| --- | --- |
| Severity | High |
| Affected file/function | `SaleVault.cancel`, `FeeSplitLPLocker.registerLock`, `TopazFinalizer.finalizeLaunch` |
| Scenario | The local source now contains safety fixes, but already deployed BNB testnet contracts will not include those fixes unless redeployed. Treating the live testnet deployment as equivalent to the fixed source would create false confidence. |
| Recommended fix | Redeploy or otherwise rehearse the fixed contract set on BNB testnet, then repeat successful launch, failed refund, buyer claim, LP lock, and LP fee split tests. Record new addresses and constructor arguments. |
| Blocks mainnet deployment | Yes |

### ARB-H-04: Mainnet Topaz V2 and USDT configuration has not been independently verified

| Field | Detail |
| --- | --- |
| Severity | High |
| Affected file/function | `contracts/src/TopazFinalizer.sol`: `finalizeLaunch`; `app.js`: `bnbTestnet` and Topaz config |
| Scenario | If the mainnet router, factory, quote token, stable flag, or token ordering is wrong, finalization can fail or create the wrong market path. |
| Recommended fix | Reconfirm mainnet Topaz V2 router/factory and USDT addresses from authoritative sources immediately before deployment. Run a fork rehearsal and a tiny private smoke test after audit signoff. |
| Blocks mainnet deployment | Yes |

## Medium Risks

### ARB-M-01: Sale window edge cases are under-tested

| Field | Detail |
| --- | --- |
| Severity | Medium |
| Affected file/function | `contracts/src/SaleVault.sol`: `deposit`; `contracts/src/LaunchFactory.sol`: `scheduleLaunch`, `openLaunch` |
| Scenario | Early or late contributions could behave unexpectedly if start/end windows are misconfigured or frontend timing differs from contract timing. |
| Recommended fix | Add tests for early contributions, late contributions, exact open time, exact close time, and admin scheduling mistakes. |
| Blocks mainnet deployment | Yes |

### ARB-M-02: Non-standard ERC20 behavior is not supported as a public self-serve path

| Field | Detail |
| --- | --- |
| Severity | Medium |
| Affected file/function | `contracts/src/SaleVault.sol`: `fundSaleTokens`, `deposit`, `claimRefund`, `claimTokens`; `contracts/src/TopazFinalizer.sol`: `finalizeLaunch` |
| Scenario | Fee-on-transfer, rebasing, blacklistable, pausable, or malicious tokens can break accounting assumptions. |
| Recommended fix | Keep self-serve MVP limited to standard fixed-supply ERC20 launches. Add review checks and explicit allow/block decisions for custom token behavior. |
| Blocks mainnet deployment | Yes for public self-serve mainnet |

### ARB-M-03: LP principal lock needs stronger proof and negative tests

| Field | Detail |
| --- | --- |
| Severity | Medium |
| Affected file/function | `contracts/src/FeeSplitLPLocker.sol`: `registerLock`, `claimAndSplitFees`, `withdrawUnlockedLp` |
| Scenario | LP fees should be claimable without unlocking LP principal. The local overwrite fix helps, but tests should also prove permanent LP principal cannot be withdrawn while fee claims continue to work. |
| Recommended fix | Add tests that claim/split token0/token1 fees, verify LP token balance remains in the locker, and verify `withdrawUnlockedLp` reverts for permanent locks. |
| Blocks mainnet deployment | Yes |

### ARB-M-04: Treasury/platform fee accounting is not fully proven on-chain

| Field | Detail |
| --- | --- |
| Severity | Medium |
| Affected file/function | `contracts/src/SaleVault.sol`: `previewAccounting`, `releaseQuoteForFinalization`; frontend proof/accounting displays |
| Scenario | Platform success fee is meant to be 2% only after soft-cap success and 0% after failed launches. Unit tests cover this, but testnet reporting should explicitly reconcile treasury receipts across multiple launches. |
| Recommended fix | Add an accounting reconciliation test and an admin proof view that shows exact treasury receipts per finalized launch. |
| Blocks mainnet deployment | Yes |

### ARB-M-05: Proof indexer is not an authoritative source of truth

| Field | Detail |
| --- | --- |
| Severity | Medium |
| Affected file/function | `netlify/functions/testnet-proof-records.mjs`; frontend proof pages |
| Scenario | Public RPC reads, log windows, seeded records, or indexing delays can cause stale or incomplete proof displays. |
| Recommended fix | Treat on-chain contracts and explorer links as authority. Use a durable backend/indexer for production, with clear stale-data messaging. |
| Blocks mainnet deployment | Yes for production UX |

### ARB-M-06: Rounding and leftover token dust need explicit policy

| Field | Detail |
| --- | --- |
| Severity | Medium |
| Affected file/function | `contracts/src/SaleVault.sol`: `claimTokens` |
| Scenario | Pro-rata buyer claims can leave dust in the SaleVault because of integer division. |
| Recommended fix | Add multi-buyer rounding tests and define a post-claim dust destination after a long claim period. |
| Blocks mainnet deployment | Yes |

### ARB-M-07: Unauthorized negative tests are incomplete

| Field | Detail |
| --- | --- |
| Severity | Medium |
| Affected file/function | `LaunchFactory` owner actions; `TopazFinalizer.finalizeLaunch`; `FeeSplitLPLocker.registerLock`; `SaleVault.fundSaleTokens` |
| Scenario | Access controls appear present, but mainnet readiness needs tests proving non-owner and non-creator wallets cannot perform privileged actions. |
| Recommended fix | Add explicit negative tests for unauthorized finalization, launch approval/open/refund, LP lock registration, treasury/finalizer config changes, and vault funding. |
| Blocks mainnet deployment | Yes |

## Low Risks

### ARB-L-01: Timestamp warnings remain

| Field | Detail |
| --- | --- |
| Severity | Low |
| Affected file/function | `SaleVault.deposit`; `TopazFinalizer.finalizeLaunch`; `FeeSplitLPLocker.registerLock`; `VestingVault.releasable` |
| Scenario | Validators can slightly influence timestamps, which matters around exact boundaries. |
| Recommended fix | Use reasonable time buffers in launch scheduling and tests. Document that exact-second boundaries are not a UX guarantee. |
| Blocks mainnet deployment | No, if documented and tested |

### ARB-L-02: Unchecked ERC20 transfer warnings are in test mocks

| Field | Detail |
| --- | --- |
| Severity | Low |
| Affected file/function | `contracts/test/ArborFoundryMvp.t.sol` mock router/pair helpers |
| Scenario | Foundry warns about unchecked mock transfers in tests. The production contracts use `SafeTransferLib` for token transfers. |
| Recommended fix | Clean up mocks to reduce warning noise before audit. |
| Blocks mainnet deployment | No |

### ARB-L-03: Frontend role gating is visibility only

| Field | Detail |
| --- | --- |
| Severity | Low |
| Affected file/function | `app.js`: wallet role visibility and admin/creator navigation |
| Scenario | Hidden buttons do not secure contracts. A user can still call contracts directly if the contract allows it. |
| Recommended fix | Continue treating contract permissions as the security boundary. Keep UI labels, but do not rely on UI hiding for security. |
| Blocks mainnet deployment | No, if contracts are tested |

## Mainnet Security Position

Current classification: **safe for continued testnet only**.

Mainnet should wait until the high and blocking medium issues are resolved, fixed contracts are redeployed and verified on testnet, and an external audit/review is complete.
