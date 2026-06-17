// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IERC20} from "./interfaces/IERC20.sol";
import {ArborOwnable} from "./lib/ArborOwnable.sol";
import {ArborReentrancyGuard} from "./lib/ArborReentrancyGuard.sol";
import {SafeTransferLib} from "./lib/SafeTransferLib.sol";

contract VestingVault is ArborOwnable, ArborReentrancyGuard {
    using SafeTransferLib for IERC20;

    struct Schedule {
        IERC20 token;
        address beneficiary;
        uint256 totalAmount;
        uint256 start;
        uint256 cliff;
        uint256 duration;
        uint256 claimed;
        bool exists;
    }

    uint256 public nextScheduleId = 1;
    mapping(uint256 => Schedule) public schedules;

    event ScheduleCreated(uint256 indexed scheduleId, address indexed beneficiary, address indexed token, uint256 amount);
    event Claimed(uint256 indexed scheduleId, address indexed beneficiary, uint256 amount);

    error InvalidConfig();
    error UnknownSchedule();
    error NothingToClaim();
    error NotBeneficiary();

    constructor(address owner_) ArborOwnable(owner_) {}

    function createSchedule(
        IERC20 token,
        address beneficiary,
        uint256 totalAmount,
        uint256 start,
        uint256 cliff,
        uint256 duration
    ) external onlyOwner nonReentrant returns (uint256 scheduleId) {
        if (address(token) == address(0) || beneficiary == address(0) || totalAmount == 0 || duration == 0) {
            revert InvalidConfig();
        }
        if (cliff < start) revert InvalidConfig();

        scheduleId = nextScheduleId++;
        schedules[scheduleId] = Schedule({
            token: token,
            beneficiary: beneficiary,
            totalAmount: totalAmount,
            start: start,
            cliff: cliff,
            duration: duration,
            claimed: 0,
            exists: true
        });

        token.safeTransferFrom(msg.sender, address(this), totalAmount);
        emit ScheduleCreated(scheduleId, beneficiary, address(token), totalAmount);
    }

    function claim(uint256 scheduleId) external nonReentrant {
        Schedule storage schedule = schedules[scheduleId];
        if (!schedule.exists) revert UnknownSchedule();
        if (msg.sender != schedule.beneficiary) revert NotBeneficiary();

        uint256 amount = claimable(scheduleId);
        if (amount == 0) revert NothingToClaim();

        schedule.claimed += amount;
        schedule.token.safeTransfer(msg.sender, amount);
        emit Claimed(scheduleId, msg.sender, amount);
    }

    function claimable(uint256 scheduleId) public view returns (uint256) {
        Schedule memory schedule = schedules[scheduleId];
        if (!schedule.exists || block.timestamp < schedule.cliff) return 0;

        uint256 vested;
        if (block.timestamp >= schedule.start + schedule.duration) {
            vested = schedule.totalAmount;
        } else {
            vested = (schedule.totalAmount * (block.timestamp - schedule.start)) / schedule.duration;
        }

        if (vested <= schedule.claimed) return 0;
        return vested - schedule.claimed;
    }
}
