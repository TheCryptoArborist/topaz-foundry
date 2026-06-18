// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { FeeSplitLPLocker } from "../src/FeeSplitLPLocker.sol";
import { IncentiveEscrow } from "../src/IncentiveEscrow.sol";
import { LaunchFactory } from "../src/LaunchFactory.sol";
import { TopazFinalizer } from "../src/TopazFinalizer.sol";
import { VestingVault } from "../src/VestingVault.sol";

interface VerifyVm {
    function envAddress(string calldata name) external returns (address);
}

contract VerifyArborFoundryTestnet {
    VerifyVm private constant vm = VerifyVm(address(uint160(uint256(keccak256("hevm cheat code")))));

    struct Verification {
        address launchFactory;
        address topazFinalizer;
        address lpLocker;
        address vestingVault;
        address incentiveEscrow;
        address owner;
        address platformTreasury;
        address quoteToken;
        address topazFactory;
        address topazRouter;
        uint256 launchCount;
        bool quoteAllowlistEnabled;
        bool quoteTokenAllowed;
    }

    error UnexpectedAddress(string field, address actual, address expected);
    error UnexpectedBool(string field, bool actual, bool expected);

    function run() external returns (Verification memory verification) {
        LaunchFactory launchFactory = LaunchFactory(vm.envAddress("LAUNCH_FACTORY"));
        TopazFinalizer topazFinalizer = TopazFinalizer(vm.envAddress("TOPAZ_FINALIZER"));
        FeeSplitLPLocker lpLocker = FeeSplitLPLocker(vm.envAddress("LP_LOCKER"));
        VestingVault vestingVault = VestingVault(vm.envAddress("VESTING_VAULT"));
        IncentiveEscrow incentiveEscrow = IncentiveEscrow(vm.envAddress("INCENTIVE_ESCROW"));

        address expectedOwner = vm.envAddress("ARBOR_OWNER");
        address expectedTreasury = vm.envAddress("PLATFORM_TREASURY");
        address expectedQuoteToken = vm.envAddress("USDT_QUOTE_TOKEN");
        address expectedTopazFactory = vm.envAddress("TOPAZ_FACTORY");
        address expectedTopazRouter = vm.envAddress("TOPAZ_ROUTER");

        _expectAddress("LaunchFactory.owner", launchFactory.owner(), expectedOwner);
        _expectAddress("LaunchFactory.platformTreasury", launchFactory.platformTreasury(), expectedTreasury);
        _expectAddress("LaunchFactory.finalizer", launchFactory.finalizer(), address(topazFinalizer));
        _expectBool("LaunchFactory.quoteTokenAllowlistEnabled", launchFactory.quoteTokenAllowlistEnabled(), true);
        _expectBool("LaunchFactory.quoteTokenAllowed", launchFactory.quoteTokenAllowed(expectedQuoteToken), true);

        _expectAddress("TopazFinalizer.owner", topazFinalizer.owner(), expectedOwner);
        _expectAddress("TopazFinalizer.factory", address(topazFinalizer.factory()), expectedTopazFactory);
        _expectAddress("TopazFinalizer.router", address(topazFinalizer.router()), expectedTopazRouter);

        _expectAddress("FeeSplitLPLocker.owner", lpLocker.owner(), expectedOwner);
        _expectAddress("VestingVault.owner", vestingVault.owner(), expectedOwner);
        _expectAddress("IncentiveEscrow.owner", incentiveEscrow.owner(), expectedOwner);

        verification = Verification({
            launchFactory: address(launchFactory),
            topazFinalizer: address(topazFinalizer),
            lpLocker: address(lpLocker),
            vestingVault: address(vestingVault),
            incentiveEscrow: address(incentiveEscrow),
            owner: expectedOwner,
            platformTreasury: expectedTreasury,
            quoteToken: expectedQuoteToken,
            topazFactory: expectedTopazFactory,
            topazRouter: expectedTopazRouter,
            launchCount: launchFactory.launchCount(),
            quoteAllowlistEnabled: launchFactory.quoteTokenAllowlistEnabled(),
            quoteTokenAllowed: launchFactory.quoteTokenAllowed(expectedQuoteToken)
        });
    }

    function _expectAddress(string memory field, address actual, address expected) private pure {
        if (actual != expected) revert UnexpectedAddress(field, actual, expected);
    }

    function _expectBool(string memory field, bool actual, bool expected) private pure {
        if (actual != expected) revert UnexpectedBool(field, actual, expected);
    }
}
