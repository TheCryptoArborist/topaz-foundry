// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { ArborFoundryTypes } from "./ArborFoundryTypes.sol";
import { SaleVault } from "./SaleVault.sol";
import { ArborOwnable } from "./lib/ArborOwnable.sol";

contract LaunchFactory is ArborOwnable {
    uint16 public constant DEFAULT_PLATFORM_FEE_BPS = 200;

    address public platformTreasury;
    address public finalizer;

    address[] public allLaunches;
    mapping(address => bool) public isLaunch;

    event LaunchCreated(address indexed launch, address indexed creator, ArborFoundryTypes.SaleType saleType);
    event PlatformTreasurySet(address indexed treasury);
    event FinalizerSet(address indexed finalizer);

    error InvalidConfig();
    error UnknownLaunch();

    constructor(address owner_, address platformTreasury_) ArborOwnable(owner_) {
        if (platformTreasury_ == address(0)) revert InvalidConfig();
        platformTreasury = platformTreasury_;
        emit PlatformTreasurySet(platformTreasury_);
    }

    function setPlatformTreasury(address platformTreasury_) external onlyOwner {
        if (platformTreasury_ == address(0)) revert InvalidConfig();
        platformTreasury = platformTreasury_;
        emit PlatformTreasurySet(platformTreasury_);
    }

    function setFinalizer(address finalizer_) external onlyOwner {
        if (finalizer_ == address(0)) revert InvalidConfig();
        finalizer = finalizer_;
        emit FinalizerSet(finalizer_);
    }

    function setLaunchFinalizer(address launch, address finalizer_) external onlyOwner {
        _requireLaunch(launch);
        SaleVault(launch).setFinalizer(finalizer_);
    }

    function setLaunchPlatformTreasury(address launch, address platformTreasury_) external onlyOwner {
        _requireLaunch(launch);
        SaleVault(launch).setPlatformTreasury(platformTreasury_);
    }

    function createLaunch(ArborFoundryTypes.LaunchConfig memory config) external onlyOwner returns (address launch) {
        if (config.platformFeeBps == 0) {
            config.platformFeeBps = DEFAULT_PLATFORM_FEE_BPS;
        }

        if (config.setupMode == ArborFoundryTypes.SetupMode.SelfServe) {
            if (config.saleType != ArborFoundryTypes.SaleType.FairLaunch) revert InvalidConfig();
        }

        SaleVault vault = new SaleVault(config, platformTreasury);
        if (finalizer != address(0)) {
            vault.setFinalizer(finalizer);
        }

        launch = address(vault);
        allLaunches.push(launch);
        isLaunch[launch] = true;

        emit LaunchCreated(launch, config.creator, config.saleType);
    }

    function submitForReview(address launch) external onlyOwner {
        _requireLaunch(launch);
        SaleVault(launch).submitForReview();
    }

    function approveLaunch(address launch) external onlyOwner {
        _requireLaunch(launch);
        SaleVault(launch).approve();
    }

    function scheduleLaunch(address launch, uint256 startsAt, uint256 endsAt) external onlyOwner {
        _requireLaunch(launch);
        SaleVault(launch).schedule(startsAt, endsAt);
    }

    function openLaunch(address launch) external onlyOwner {
        _requireLaunch(launch);
        SaleVault(launch).open();
    }

    function enableRefunds(address launch) external onlyOwner {
        _requireLaunch(launch);
        SaleVault(launch).enableRefunds();
    }

    function cancelLaunch(address launch) external onlyOwner {
        _requireLaunch(launch);
        SaleVault(launch).cancel();
    }

    function launchCount() external view returns (uint256) {
        return allLaunches.length;
    }

    function _requireLaunch(address launch) internal view {
        if (!isLaunch[launch]) revert UnknownLaunch();
    }
}
