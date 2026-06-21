// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { ArborFoundryTypes } from "./ArborFoundryTypes.sol";
import { SaleVault } from "./SaleVault.sol";
import { IERC20 } from "./interfaces/IERC20.sol";
import { ITopazV2Factory } from "./interfaces/ITopazV2Factory.sol";
import { ITopazV2Router } from "./interfaces/ITopazV2Router.sol";
import { ArborOwnable } from "./lib/ArborOwnable.sol";
import { ArborReentrancyGuard } from "./lib/ArborReentrancyGuard.sol";
import { SafeTransferLib } from "./lib/SafeTransferLib.sol";

contract TopazFinalizer is ArborOwnable, ArborReentrancyGuard {
    using SafeTransferLib for IERC20;

    ITopazV2Factory public immutable factory;
    ITopazV2Router public immutable router;
    bool public constant STABLE = false;

    event LaunchFinalized(
        address indexed launch,
        address indexed pair,
        address indexed lpReceiver,
        uint256 quoteUsed,
        uint256 tokenUsed,
        uint256 liquidity
    );

    error InvalidConfig();
    error DeadlineExpired();

    struct FinalizeParams {
        address launch;
        address token;
        address quoteToken;
        address creatorProceedsReceiver;
        address lpReceiver;
        uint256 tokenAmountDesired;
        uint256 tokenAmountMin;
        uint256 quoteAmountMin;
        uint256 deadline;
    }

    constructor(address owner_, address topazFactory_, address topazRouter_) ArborOwnable(owner_) {
        if (topazFactory_ == address(0) || topazRouter_ == address(0)) revert InvalidConfig();
        factory = ITopazV2Factory(topazFactory_);
        router = ITopazV2Router(topazRouter_);
    }

    function finalizeLaunch(FinalizeParams calldata params)
        external
        onlyOwner
        nonReentrant
        returns (ArborFoundryTypes.LaunchAccounting memory accounting, address pair, uint256 liquidity)
    {
        if (params.deadline < block.timestamp) revert DeadlineExpired();
        if (
            params.launch == address(0) || params.token == address(0) || params.quoteToken == address(0)
                || params.lpReceiver == address(0) || params.creatorProceedsReceiver == address(0)
        ) revert InvalidConfig();
        if (SaleVault(params.launch).saleToken() != params.token || SaleVault(params.launch).quoteToken() != params.quoteToken) {
            revert InvalidConfig();
        }

        accounting = SaleVault(params.launch).releaseQuoteForFinalization(address(this), params.creatorProceedsReceiver);

        pair = factory.getPool(params.token, params.quoteToken, STABLE);
        if (pair == address(0)) {
            pair = factory.createPool(params.token, params.quoteToken, STABLE);
        }

        IERC20(params.token).safeTransferFrom(msg.sender, address(this), params.tokenAmountDesired);
        IERC20(params.token).safeApprove(address(router), 0);
        IERC20(params.token).safeApprove(address(router), params.tokenAmountDesired);
        IERC20(params.quoteToken).safeApprove(address(router), 0);
        IERC20(params.quoteToken).safeApprove(address(router), accounting.quoteToLiquidity);

        (uint256 tokenUsed, uint256 quoteUsed, uint256 lpMinted) = router.addLiquidity(
            params.token,
            params.quoteToken,
            STABLE,
            params.tokenAmountDesired,
            accounting.quoteToLiquidity,
            params.tokenAmountMin,
            params.quoteAmountMin,
            params.lpReceiver,
            params.deadline
        );

        liquidity = lpMinted;
        IERC20(params.token).safeApprove(address(router), 0);
        IERC20(params.quoteToken).safeApprove(address(router), 0);

        if (params.tokenAmountDesired > tokenUsed) {
            IERC20(params.token).safeTransfer(msg.sender, params.tokenAmountDesired - tokenUsed);
        }
        if (accounting.quoteToLiquidity > quoteUsed) {
            IERC20(params.quoteToken)
                .safeTransfer(params.creatorProceedsReceiver, accounting.quoteToLiquidity - quoteUsed);
        }

        emit LaunchFinalized(params.launch, pair, params.lpReceiver, quoteUsed, tokenUsed, lpMinted);
    }
}
