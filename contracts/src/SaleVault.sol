// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { ArborFoundryTypes } from "./ArborFoundryTypes.sol";
import { IERC20 } from "./interfaces/IERC20.sol";
import { ArborReentrancyGuard } from "./lib/ArborReentrancyGuard.sol";
import { SafeTransferLib } from "./lib/SafeTransferLib.sol";

contract SaleVault is ArborReentrancyGuard {
    using SafeTransferLib for IERC20;

    uint16 public constant BPS = 10_000;

    ArborFoundryTypes.LaunchConfig public config;
    ArborFoundryTypes.LaunchStatus public status;

    address public immutable factory;
    address public platformTreasury;
    address public finalizer;

    uint256 public totalRaised;
    bool public saleTokensFunded;

    mapping(address => uint256) public contributions;
    mapping(address => bool) public refunded;
    mapping(address => bool) public claimed;

    event StatusChanged(ArborFoundryTypes.LaunchStatus indexed status);
    event SaleTokensFunded(address indexed funder, uint256 amount);
    event Deposited(address indexed buyer, uint256 amount);
    event RefundClaimed(address indexed buyer, uint256 amount);
    event TokensClaimed(address indexed buyer, uint256 amount);
    event FinalizerSet(address indexed finalizer);
    event TreasurySet(address indexed treasury);
    event QuoteReleasedForFinalization(
        uint256 totalRaised, uint256 platformFee, uint256 quoteToLiquidity, uint256 creatorProceeds
    );

    error NotFactory();
    error NotFinalizer();
    error InvalidConfig();
    error InvalidStatus();
    error InvalidAmount();
    error CapExceeded();
    error SaleNotOpen();
    error SoftCapMet();
    error SoftCapNotMet();
    error AlreadyClaimed();
    error NothingToClaim();
    error GuidedModeNeedsAdapter();

    modifier onlyFactory() {
        if (msg.sender != factory) revert NotFactory();
        _;
    }

    modifier onlyFinalizer() {
        if (msg.sender != finalizer) revert NotFinalizer();
        _;
    }

    constructor(ArborFoundryTypes.LaunchConfig memory config_, address platformTreasury_) {
        if (
            config_.creator == address(0) || config_.saleToken == address(0) || config_.quoteToken == address(0)
                || platformTreasury_ == address(0) || config_.softCap == 0 || config_.hardCap < config_.softCap
                || config_.platformFeeBps > 1_000 || config_.liquidityBps > BPS
        ) revert InvalidConfig();

        factory = msg.sender;
        config = config_;
        platformTreasury = platformTreasury_;
        status = ArborFoundryTypes.LaunchStatus.Draft;
        emit StatusChanged(status);
    }

    function setFinalizer(address finalizer_) external onlyFactory {
        if (finalizer_ == address(0)) revert InvalidConfig();
        finalizer = finalizer_;
        emit FinalizerSet(finalizer_);
    }

    function setPlatformTreasury(address platformTreasury_) external onlyFactory {
        if (platformTreasury_ == address(0)) revert InvalidConfig();
        platformTreasury = platformTreasury_;
        emit TreasurySet(platformTreasury_);
    }

    function submitForReview() external onlyFactory {
        _setStatus(ArborFoundryTypes.LaunchStatus.PendingReview);
    }

    function approve() external onlyFactory {
        _setStatus(ArborFoundryTypes.LaunchStatus.Approved);
    }

    function schedule(uint256 startsAt, uint256 endsAt) external onlyFactory {
        if (status != ArborFoundryTypes.LaunchStatus.Approved) revert InvalidStatus();
        if (startsAt == 0 || endsAt <= startsAt) revert InvalidConfig();
        config.startsAt = startsAt;
        config.endsAt = endsAt;
        _setStatus(ArborFoundryTypes.LaunchStatus.Upcoming);
    }

    function open() external onlyFactory {
        if (status != ArborFoundryTypes.LaunchStatus.Upcoming && status != ArborFoundryTypes.LaunchStatus.Approved) {
            revert InvalidStatus();
        }
        if (!saleTokensFunded) revert InvalidStatus();
        _setStatus(ArborFoundryTypes.LaunchStatus.Live);
    }

    function cancel() external onlyFactory {
        if (status == ArborFoundryTypes.LaunchStatus.Finalized) revert InvalidStatus();
        if (totalRaised != 0) revert InvalidStatus();
        _setStatus(ArborFoundryTypes.LaunchStatus.Cancelled);
    }

    function saleToken() external view returns (address) {
        return config.saleToken;
    }

    function quoteToken() external view returns (address) {
        return config.quoteToken;
    }

    function fundSaleTokens(uint256 amount) external nonReentrant {
        if (msg.sender != config.creator) revert InvalidConfig();
        if (amount != config.saleTokenAmount) revert InvalidAmount();
        IERC20(config.saleToken).safeTransferFrom(msg.sender, address(this), amount);
        saleTokensFunded = true;
        emit SaleTokensFunded(msg.sender, amount);
    }

    function deposit(uint256 amount) external nonReentrant {
        if (status != ArborFoundryTypes.LaunchStatus.Live) revert InvalidStatus();
        if (config.saleType != ArborFoundryTypes.SaleType.FairLaunch) revert GuidedModeNeedsAdapter();
        if (config.startsAt != 0 && block.timestamp < config.startsAt) revert SaleNotOpen();
        if (config.endsAt != 0 && block.timestamp > config.endsAt) revert SaleNotOpen();
        if (amount == 0) revert InvalidAmount();

        uint256 nextContribution = contributions[msg.sender] + amount;
        if (nextContribution < config.walletMin || nextContribution > config.walletMax) revert InvalidAmount();
        if (totalRaised + amount > config.hardCap) revert CapExceeded();

        contributions[msg.sender] = nextContribution;
        totalRaised += amount;

        IERC20(config.quoteToken).safeTransferFrom(msg.sender, address(this), amount);
        emit Deposited(msg.sender, amount);
    }

    function enableRefunds() external onlyFactory {
        if (status != ArborFoundryTypes.LaunchStatus.Live && status != ArborFoundryTypes.LaunchStatus.Upcoming) {
            revert InvalidStatus();
        }
        if (totalRaised >= config.softCap) revert SoftCapMet();
        _setStatus(ArborFoundryTypes.LaunchStatus.Refunding);
    }

    function claimRefund() external nonReentrant {
        if (status != ArborFoundryTypes.LaunchStatus.Refunding) revert InvalidStatus();
        if (refunded[msg.sender]) revert AlreadyClaimed();

        uint256 amount = contributions[msg.sender];
        if (amount == 0) revert NothingToClaim();

        refunded[msg.sender] = true;
        IERC20(config.quoteToken).safeTransfer(msg.sender, amount);
        emit RefundClaimed(msg.sender, amount);
    }

    function claimTokens() external nonReentrant {
        if (status != ArborFoundryTypes.LaunchStatus.Finalized) revert InvalidStatus();
        if (claimed[msg.sender]) revert AlreadyClaimed();

        uint256 amount = claimableTokens(msg.sender);
        if (amount == 0) revert NothingToClaim();

        claimed[msg.sender] = true;
        IERC20(config.saleToken).safeTransfer(msg.sender, amount);
        emit TokensClaimed(msg.sender, amount);
    }

    function claimableTokens(address buyer) public view returns (uint256) {
        if (totalRaised == 0) return 0;
        return (contributions[buyer] * config.saleTokenAmount) / totalRaised;
    }

    function previewAccounting() public view returns (ArborFoundryTypes.LaunchAccounting memory accounting) {
        accounting.totalRaised = totalRaised;
        if (totalRaised < config.softCap || status == ArborFoundryTypes.LaunchStatus.Refunding) {
            accounting.refundTotal = totalRaised;
            return accounting;
        }

        accounting.platformFee = (totalRaised * config.platformFeeBps) / BPS;
        accounting.netRaise = totalRaised - accounting.platformFee;
        accounting.quoteToLiquidity = (accounting.netRaise * config.liquidityBps) / BPS;
        accounting.creatorProceeds = accounting.netRaise - accounting.quoteToLiquidity;
    }

    function releaseQuoteForFinalization(address liquidityReceiver, address creatorProceedsReceiver)
        external
        onlyFinalizer
        nonReentrant
        returns (ArborFoundryTypes.LaunchAccounting memory accounting)
    {
        if (status != ArborFoundryTypes.LaunchStatus.Live) revert InvalidStatus();
        if (totalRaised < config.softCap) revert SoftCapNotMet();
        if (liquidityReceiver == address(0) || creatorProceedsReceiver == address(0)) revert InvalidConfig();

        accounting = previewAccounting();
        _setStatus(ArborFoundryTypes.LaunchStatus.Finalized);

        if (accounting.platformFee != 0) {
            IERC20(config.quoteToken).safeTransfer(platformTreasury, accounting.platformFee);
        }
        if (accounting.quoteToLiquidity != 0) {
            IERC20(config.quoteToken).safeTransfer(liquidityReceiver, accounting.quoteToLiquidity);
        }
        if (accounting.creatorProceeds != 0) {
            IERC20(config.quoteToken).safeTransfer(creatorProceedsReceiver, accounting.creatorProceeds);
        }

        emit QuoteReleasedForFinalization(
            accounting.totalRaised, accounting.platformFee, accounting.quoteToLiquidity, accounting.creatorProceeds
        );
    }

    function _setStatus(ArborFoundryTypes.LaunchStatus nextStatus) internal {
        status = nextStatus;
        emit StatusChanged(nextStatus);
    }
}
