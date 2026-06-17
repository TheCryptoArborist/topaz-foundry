// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

library ArborFoundryTypes {
    enum SaleType {
        FairLaunch,
        FixedPrice,
        LiquidityBootstrap
    }

    enum SetupMode {
        SelfServe,
        GuidedSetup
    }

    enum LaunchStatus {
        Draft,
        PendingReview,
        Approved,
        Upcoming,
        Live,
        Finalized,
        Refunding,
        Cancelled
    }

    struct LaunchConfig {
        address creator;
        address saleToken;
        address quoteToken;
        SaleType saleType;
        SetupMode setupMode;
        uint256 saleTokenAmount;
        uint256 softCap;
        uint256 hardCap;
        uint256 walletMin;
        uint256 walletMax;
        uint256 startsAt;
        uint256 endsAt;
        uint16 liquidityBps;
        uint16 platformFeeBps;
    }

    struct LaunchAccounting {
        uint256 totalRaised;
        uint256 platformFee;
        uint256 netRaise;
        uint256 quoteToLiquidity;
        uint256 creatorProceeds;
        uint256 refundTotal;
    }
}
