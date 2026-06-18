// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { IERC20 } from "../interfaces/IERC20.sol";
import { ITopazV2Pair } from "../interfaces/ITopazV2Pair.sol";
import { TestnetMockERC20 } from "./TestnetMockERC20.sol";

contract MockTopazV2Pair is TestnetMockERC20, ITopazV2Pair {
    address public override token0;
    address public override token1;

    uint256 public reserve0;
    uint256 public reserve1;

    constructor(address tokenA, address tokenB) TestnetMockERC20("Mock Topaz V2 LP", "mTOPAZ-LP", 18, address(0), 0) {
        (token0, token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
    }

    function mint(address to, uint256 liquidity, uint256 amount0, uint256 amount1) external {
        reserve0 += amount0;
        reserve1 += amount1;
        _mint(to, liquidity);
    }

    function claimable0(address) external pure returns (uint256) {
        return 0;
    }

    function claimable1(address) external pure returns (uint256) {
        return 0;
    }

    function claimFees() external pure returns (uint256 claimed0, uint256 claimed1) {
        return (0, 0);
    }
}
