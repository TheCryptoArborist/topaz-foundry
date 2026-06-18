// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { IERC20 } from "../interfaces/IERC20.sol";

contract TestnetMockERC20 is IERC20 {
    string public name;
    string public symbol;
    uint8 public immutable override decimals;
    uint256 public override totalSupply;

    mapping(address => uint256) public override balanceOf;
    mapping(address => mapping(address => uint256)) public override allowance;

    constructor(
        string memory name_,
        string memory symbol_,
        uint8 decimals_,
        address initialHolder,
        uint256 initialSupply
    ) {
        name = name_;
        symbol = symbol_;
        decimals = decimals_;
        if (initialSupply != 0) {
            _mint(initialHolder, initialSupply);
        }
    }

    function approve(address spender, uint256 amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transfer(address to, uint256 amount) external returns (bool) {
        _transfer(msg.sender, to, amount);
        return true;
    }

    function transferFrom(address from, address to, uint256 amount) external returns (bool) {
        uint256 currentAllowance = allowance[from][msg.sender];
        require(currentAllowance >= amount, "allowance");
        allowance[from][msg.sender] = currentAllowance - amount;
        emit Approval(from, msg.sender, allowance[from][msg.sender]);
        _transfer(from, to, amount);
        return true;
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }

    function _mint(address to, uint256 amount) internal {
        require(to != address(0), "zero to");
        balanceOf[to] += amount;
        totalSupply += amount;
        emit Transfer(address(0), to, amount);
    }

    function _transfer(address from, address to, uint256 amount) internal {
        require(to != address(0), "zero to");
        require(balanceOf[from] >= amount, "balance");
        balanceOf[from] -= amount;
        balanceOf[to] += amount;
        emit Transfer(from, to, amount);
    }

    event Transfer(address indexed from, address indexed to, uint256 amount);
    event Approval(address indexed owner, address indexed spender, uint256 amount);
}
