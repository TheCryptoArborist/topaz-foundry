// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { IERC20 } from "../interfaces/IERC20.sol";
import { ITopazV2Factory } from "../interfaces/ITopazV2Factory.sol";
import { ITopazV2Router } from "../interfaces/ITopazV2Router.sol";
import { MockTopazV2Pair } from "./MockTopazV2Pair.sol";

contract MockTopazV2Router is ITopazV2Router {
    address public immutable factory;

    error Expired();
    error Slippage();
    error TransferFailed();

    constructor(address factory_) {
        factory = factory_;
    }

    function quoteAddLiquidity(address, address, bool, address, uint256 amountADesired, uint256 amountBDesired)
        external
        pure
        returns (uint256 amountA, uint256 amountB, uint256 liquidity)
    {
        amountA = amountADesired;
        amountB = amountBDesired;
        liquidity = _min(amountADesired, amountBDesired);
    }

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
    ) external returns (uint256 amountA, uint256 amountB, uint256 liquidity) {
        if (block.timestamp > deadline) revert Expired();

        amountA = amountADesired;
        amountB = amountBDesired;
        liquidity = _min(amountA, amountB);
        if (amountA < amountAMin || amountB < amountBMin || liquidity == 0) revert Slippage();

        address pair = ITopazV2Factory(factory).getPool(tokenA, tokenB, stable);
        if (pair == address(0)) {
            pair = ITopazV2Factory(factory).createPool(tokenA, tokenB, stable);
        }

        if (!IERC20(tokenA).transferFrom(msg.sender, pair, amountA)) revert TransferFailed();
        if (!IERC20(tokenB).transferFrom(msg.sender, pair, amountB)) revert TransferFailed();

        (uint256 amount0, uint256 amount1) = tokenA < tokenB ? (amountA, amountB) : (amountB, amountA);
        MockTopazV2Pair(pair).mint(to, liquidity, amount0, amount1);
    }

    function _min(uint256 a, uint256 b) private pure returns (uint256) {
        return a < b ? a : b;
    }
}
