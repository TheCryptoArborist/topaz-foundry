// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { IERC20 } from "./interfaces/IERC20.sol";
import { ArborOwnable } from "./lib/ArborOwnable.sol";
import { ArborReentrancyGuard } from "./lib/ArborReentrancyGuard.sol";
import { SafeTransferLib } from "./lib/SafeTransferLib.sol";

contract IncentiveEscrow is ArborOwnable, ArborReentrancyGuard {
    using SafeTransferLib for IERC20;

    struct Incentive {
        IERC20 token;
        address project;
        address distributor;
        uint256 promisedAmount;
        uint256 fundedAmount;
        bool released;
        bool exists;
    }

    uint256 public nextIncentiveId = 1;
    mapping(uint256 => Incentive) public incentives;

    event IncentiveCreated(
        uint256 indexed incentiveId, address indexed project, address indexed token, uint256 promisedAmount
    );
    event IncentiveFunded(uint256 indexed incentiveId, uint256 amount);
    event IncentiveReleased(uint256 indexed incentiveId, address indexed distributor, uint256 amount);

    error InvalidConfig();
    error UnknownIncentive();
    error AlreadyReleased();
    error OverFunded();
    error NothingFunded();

    constructor(address owner_) ArborOwnable(owner_) { }

    function createIncentive(IERC20 token, address project, address distributor, uint256 promisedAmount)
        external
        onlyOwner
        returns (uint256 incentiveId)
    {
        if (address(token) == address(0) || project == address(0) || distributor == address(0) || promisedAmount == 0) {
            revert InvalidConfig();
        }

        incentiveId = nextIncentiveId++;
        incentives[incentiveId] = Incentive({
            token: token,
            project: project,
            distributor: distributor,
            promisedAmount: promisedAmount,
            fundedAmount: 0,
            released: false,
            exists: true
        });

        emit IncentiveCreated(incentiveId, project, address(token), promisedAmount);
    }

    function fundIncentive(uint256 incentiveId, uint256 amount) external nonReentrant {
        Incentive storage incentive = incentives[incentiveId];
        if (!incentive.exists) revert UnknownIncentive();
        if (incentive.released) revert AlreadyReleased();
        if (amount == 0) revert InvalidConfig();
        if (incentive.fundedAmount + amount > incentive.promisedAmount) revert OverFunded();

        incentive.fundedAmount += amount;
        incentive.token.safeTransferFrom(msg.sender, address(this), amount);
        emit IncentiveFunded(incentiveId, amount);
    }

    function releaseIncentive(uint256 incentiveId) external onlyOwner nonReentrant {
        Incentive storage incentive = incentives[incentiveId];
        if (!incentive.exists) revert UnknownIncentive();
        if (incentive.released) revert AlreadyReleased();
        if (incentive.fundedAmount == 0) revert NothingFunded();

        incentive.released = true;
        incentive.token.safeTransfer(incentive.distributor, incentive.fundedAmount);
        emit IncentiveReleased(incentiveId, incentive.distributor, incentive.fundedAmount);
    }
}
