// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { ITopazV2Factory } from "../interfaces/ITopazV2Factory.sol";
import { MockTopazV2Pair } from "./MockTopazV2Pair.sol";

contract MockTopazV2Factory is ITopazV2Factory {
    mapping(bytes32 => address) public pools;
    address[] public allPools;

    event PoolCreated(address indexed token0, address indexed token1, bool indexed stable, address pool);

    function getPool(address tokenA, address tokenB, bool stable) external view returns (address pool) {
        return pools[_poolKey(tokenA, tokenB, stable)];
    }

    function createPool(address tokenA, address tokenB, bool stable) external returns (address pool) {
        bytes32 key = _poolKey(tokenA, tokenB, stable);
        pool = pools[key];
        if (pool != address(0)) return pool;

        MockTopazV2Pair pair = new MockTopazV2Pair(tokenA, tokenB);
        pool = address(pair);
        pools[key] = pool;
        pools[_poolKey(tokenB, tokenA, stable)] = pool;
        allPools.push(pool);

        (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        emit PoolCreated(token0, token1, stable, pool);
    }

    function allPoolsLength() external view returns (uint256) {
        return allPools.length;
    }

    function _poolKey(address tokenA, address tokenB, bool stable) private pure returns (bytes32) {
        return keccak256(abi.encode(tokenA, tokenB, stable));
    }
}
