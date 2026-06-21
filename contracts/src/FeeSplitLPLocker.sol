// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { IERC20 } from "./interfaces/IERC20.sol";
import { ITopazV2Pair } from "./interfaces/ITopazV2Pair.sol";
import { ArborOwnable } from "./lib/ArborOwnable.sol";
import { ArborReentrancyGuard } from "./lib/ArborReentrancyGuard.sol";
import { SafeTransferLib } from "./lib/SafeTransferLib.sol";

contract FeeSplitLPLocker is ArborOwnable, ArborReentrancyGuard {
    using SafeTransferLib for IERC20;

    uint16 public constant BPS = 10_000;
    uint16 public constant CREATOR_FEE_SHARE_BPS = 8_000;
    uint16 public constant PLATFORM_FEE_SHARE_BPS = 2_000;

    struct LockInfo {
        address creatorBeneficiary;
        address platformBeneficiary;
        uint256 unlockTime;
        bool permanent;
        bool exists;
    }

    mapping(address => LockInfo) public locks;

    event LockRegistered(
        address indexed lpToken,
        address indexed creatorBeneficiary,
        address indexed platformBeneficiary,
        uint256 unlockTime,
        bool permanent
    );
    event FeesClaimed(
        address indexed pair, address indexed token0, address indexed token1, uint256 amount0, uint256 amount1
    );

    error InvalidConfig();
    error UnknownLock();
    error Locked();

    constructor(address owner_) ArborOwnable(owner_) { }

    function registerLock(
        address lpToken,
        address creatorBeneficiary,
        address platformBeneficiary,
        uint256 unlockTime,
        bool permanent
    ) external onlyOwner {
        if (lpToken == address(0) || creatorBeneficiary == address(0) || platformBeneficiary == address(0)) {
            revert InvalidConfig();
        }
        if (!permanent && unlockTime <= block.timestamp) revert InvalidConfig();
        if (locks[lpToken].exists) revert InvalidConfig();

        locks[lpToken] = LockInfo({
            creatorBeneficiary: creatorBeneficiary,
            platformBeneficiary: platformBeneficiary,
            unlockTime: unlockTime,
            permanent: permanent,
            exists: true
        });

        emit LockRegistered(lpToken, creatorBeneficiary, platformBeneficiary, unlockTime, permanent);
    }

    function claimAndSplitFees(address pair) external nonReentrant {
        LockInfo memory lock = locks[pair];
        if (!lock.exists) revert UnknownLock();

        address token0 = ITopazV2Pair(pair).token0();
        address token1 = ITopazV2Pair(pair).token1();

        uint256 before0 = IERC20(token0).balanceOf(address(this));
        uint256 before1 = IERC20(token1).balanceOf(address(this));

        ITopazV2Pair(pair).claimFees();

        uint256 claimed0 = IERC20(token0).balanceOf(address(this)) - before0;
        uint256 claimed1 = IERC20(token1).balanceOf(address(this)) - before1;

        _splitToken(IERC20(token0), lock.creatorBeneficiary, lock.platformBeneficiary, claimed0);
        _splitToken(IERC20(token1), lock.creatorBeneficiary, lock.platformBeneficiary, claimed1);

        emit FeesClaimed(pair, token0, token1, claimed0, claimed1);
    }

    function withdrawUnlockedLp(address lpToken, address to, uint256 amount) external onlyOwner nonReentrant {
        LockInfo memory lock = locks[lpToken];
        if (!lock.exists) revert UnknownLock();
        if (lock.permanent || block.timestamp < lock.unlockTime) revert Locked();
        IERC20(lpToken).safeTransfer(to, amount);
    }

    function _splitToken(IERC20 token, address creator, address platform, uint256 amount) internal {
        if (amount == 0) return;
        uint256 creatorShare = (amount * CREATOR_FEE_SHARE_BPS) / BPS;
        uint256 platformShare = amount - creatorShare;
        token.safeTransfer(creator, creatorShare);
        token.safeTransfer(platform, platformShare);
    }
}
