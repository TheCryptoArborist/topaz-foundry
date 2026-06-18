# Topaz V2 ABI Confirmation

Last checked: June 18, 2026

This note records the live Topaz V2 functions Arbor Foundry depends on before testnet deployment work.

## Sources Checked

| Contract | Address | Source |
| --- | --- | --- |
| Topaz V2 Router | `0x1E98c8226e7d452e1888e3d3d2F929346321c6c3` | `https://repo.sourcify.dev/contracts/full_match/56/0x1E98c8226e7d452e1888e3d3d2F929346321c6c3/metadata.json` |
| Topaz Pool Factory | `0x65E6cD0eF5D3467030103cf3d433034E570b5784` | `https://repo.sourcify.dev/contracts/full_match/56/0x65E6cD0eF5D3467030103cf3d433034E570b5784/metadata.json` |
| Topaz Pool Implementation | `0xdC942D8e37cC20BCf9aD1Fe0111eE6c5908f3678` | `https://repo.sourcify.dev/contracts/full_match/56/0xdC942D8e37cC20BCf9aD1Fe0111eE6c5908f3678/metadata.json` |

Live RPC checks also confirmed:

- Router deployed bytecode exists.
- Factory deployed bytecode exists.
- Factory `implementation()` returns `0xdC942D8e37cC20BCf9aD1Fe0111eE6c5908f3678`.
- Router `defaultFactory()` returns `0x65E6cD0eF5D3467030103cf3d433034E570b5784`.
- Router `weth()` returns BNB Chain WBNB: `0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`.

## MVP Function Matches

### Router

Confirmed:

```solidity
function addLiquidity(
    address tokenA,
    address tokenB,
    bool stable,
    uint256 amountADesired,
    uint256 amountBDesired,
    uint256 amountAMin,
    uint256 amountBMin,
    address to,
    uint256 deadline
) external returns (uint256 amountA, uint256 amountB, uint256 liquidity);
```

Confirmed with one important detail: live `quoteAddLiquidity` includes the factory address.

```solidity
function quoteAddLiquidity(
    address tokenA,
    address tokenB,
    bool stable,
    address factory,
    uint256 amountADesired,
    uint256 amountBDesired
) external view returns (uint256 amountA, uint256 amountB, uint256 liquidity);
```

Arbor Foundry updated `ITopazV2Router` to match this live signature.

### Factory

Confirmed:

```solidity
function getPool(address tokenA, address tokenB, bool stable) external view returns (address pool);
function createPool(address tokenA, address tokenB, bool stable) external returns (address pool);
function implementation() external view returns (address);
function isPool(address pool) external view returns (bool);
```

### Pool / LP Token

Confirmed on the factory implementation:

```solidity
function token0() external view returns (address);
function token1() external view returns (address);
function stable() external view returns (bool);
function claimable0(address account) external view returns (uint256);
function claimable1(address account) external view returns (uint256);
function claimFees() external returns (uint256 claimed0, uint256 claimed1);
```

This supports the MVP assumption that Topaz V2 volatile pools are fungible ERC20 LP tokens and that a non-gauged pool locker can call `claimFees()` and split token0/token1 fees.

## Remaining Before Testnet

- Run a local fork dry run against BNB Chain with the live router and factory.
- Confirm exact quote asset list for MVP: WBNB, USDT, or both.
- Decide whether finalization should call `quoteAddLiquidity` before `addLiquidity`, or rely on an off-chain/admin quote with explicit min amounts.
- Keep gauge/bribe automation manual until Topaz voter/reward interfaces are checked separately.
