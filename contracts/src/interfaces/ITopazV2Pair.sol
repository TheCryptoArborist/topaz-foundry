// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface ITopazV2Pair {
    function token0() external view returns (address);
    function token1() external view returns (address);
    function claimFees() external returns (uint256 claimed0, uint256 claimed1);
}
