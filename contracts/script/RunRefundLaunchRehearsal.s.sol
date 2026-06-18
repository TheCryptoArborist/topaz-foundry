// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { ArborFoundryTypes } from "../src/ArborFoundryTypes.sol";
import { LaunchFactory } from "../src/LaunchFactory.sol";
import { SaleVault } from "../src/SaleVault.sol";
import { IERC20 } from "../src/interfaces/IERC20.sol";
import { TestnetMockERC20 } from "../src/mocks/TestnetMockERC20.sol";

interface RefundRehearsalVm {
    function addr(uint256 privateKey) external returns (address);
    function envAddress(string calldata name) external returns (address);
    function envUint(string calldata name) external returns (uint256);
    function startBroadcast(uint256 privateKey) external;
    function stopBroadcast() external;
}

contract RunRefundLaunchRehearsal {
    RefundRehearsalVm private constant vm = RefundRehearsalVm(address(uint160(uint256(keccak256("hevm cheat code")))));

    uint256 public constant SALE_TOKEN_SUPPLY = 1_000_000 ether;
    uint256 public constant SALE_TOKEN_AMOUNT = 100_000 ether;
    uint256 public constant SOFT_CAP = 100 ether;
    uint256 public constant HARD_CAP = 1_000 ether;
    uint256 public constant REFUNDABLE_CONTRIBUTION = 25 ether;
    uint16 public constant LIQUIDITY_BPS = 6_000;
    uint16 public constant PLATFORM_FEE_BPS = 200;

    struct RefundRehearsalResult {
        address launch;
        address launchToken;
        address quoteToken;
        address buyer;
        uint256 totalRaised;
        uint256 refundTotal;
        uint256 contribution;
        uint256 quoteBalanceBefore;
        uint256 quoteBalanceAfterRefund;
        uint256 vaultQuoteBalanceAfterRefund;
        uint256 launchStatus;
        bool refundClaimed;
    }

    error UnexpectedAddress(string field, address actual, address expected);
    error UnexpectedValue(string field, uint256 actual, uint256 expected);
    error UnexpectedBool(string field, bool actual, bool expected);

    function run() external returns (RefundRehearsalResult memory result) {
        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        address deployer = vm.addr(deployerPrivateKey);

        LaunchFactory launchFactory = LaunchFactory(vm.envAddress("LAUNCH_FACTORY"));
        address quoteToken = vm.envAddress("USDT_QUOTE_TOKEN");

        _expectAddress("LaunchFactory.owner", launchFactory.owner(), deployer);
        _expectBool("LaunchFactory.quoteTokenAllowed", launchFactory.quoteTokenAllowed(quoteToken), true);

        uint256 quoteBalanceBefore = IERC20(quoteToken).balanceOf(deployer);

        vm.startBroadcast(deployerPrivateKey);

        TestnetMockERC20 launchToken =
            new TestnetMockERC20("Arbor Foundry Refund Rehearsal Token", "AFRR", 18, deployer, SALE_TOKEN_SUPPLY);

        address launch = launchFactory.createLaunch(_launchConfig(deployer, address(launchToken), quoteToken));
        launchToken.approve(launch, SALE_TOKEN_AMOUNT);
        SaleVault(launch).fundSaleTokens(SALE_TOKEN_AMOUNT);
        launchFactory.approveLaunch(launch);
        launchFactory.openLaunch(launch);

        IERC20(quoteToken).approve(launch, REFUNDABLE_CONTRIBUTION);
        SaleVault(launch).deposit(REFUNDABLE_CONTRIBUTION);

        launchFactory.enableRefunds(launch);
        SaleVault(launch).claimRefund();

        vm.stopBroadcast();

        ArborFoundryTypes.LaunchAccounting memory accounting = SaleVault(launch).previewAccounting();
        uint256 quoteBalanceAfterRefund = IERC20(quoteToken).balanceOf(deployer);
        uint256 vaultQuoteBalanceAfterRefund = IERC20(quoteToken).balanceOf(launch);

        _expectValue("totalRaised", accounting.totalRaised, REFUNDABLE_CONTRIBUTION);
        _expectValue("refundTotal", accounting.refundTotal, REFUNDABLE_CONTRIBUTION);
        _expectValue("platformFee", accounting.platformFee, 0);
        _expectValue("vaultQuoteBalanceAfterRefund", vaultQuoteBalanceAfterRefund, 0);
        _expectValue("quoteBalanceAfterRefund", quoteBalanceAfterRefund, quoteBalanceBefore);
        _expectValue("status", uint256(SaleVault(launch).status()), uint256(ArborFoundryTypes.LaunchStatus.Refunding));
        _expectBool("refunded", SaleVault(launch).refunded(deployer), true);

        result = RefundRehearsalResult({
            launch: launch,
            launchToken: address(launchToken),
            quoteToken: quoteToken,
            buyer: deployer,
            totalRaised: accounting.totalRaised,
            refundTotal: accounting.refundTotal,
            contribution: REFUNDABLE_CONTRIBUTION,
            quoteBalanceBefore: quoteBalanceBefore,
            quoteBalanceAfterRefund: quoteBalanceAfterRefund,
            vaultQuoteBalanceAfterRefund: vaultQuoteBalanceAfterRefund,
            launchStatus: uint256(SaleVault(launch).status()),
            refundClaimed: SaleVault(launch).refunded(deployer)
        });
    }

    function _launchConfig(address creator, address saleToken, address quoteToken)
        private
        pure
        returns (ArborFoundryTypes.LaunchConfig memory config)
    {
        config = ArborFoundryTypes.LaunchConfig({
            creator: creator,
            saleToken: saleToken,
            quoteToken: quoteToken,
            saleType: ArborFoundryTypes.SaleType.FairLaunch,
            setupMode: ArborFoundryTypes.SetupMode.SelfServe,
            saleTokenAmount: SALE_TOKEN_AMOUNT,
            softCap: SOFT_CAP,
            hardCap: HARD_CAP,
            walletMin: 1 ether,
            walletMax: HARD_CAP,
            startsAt: 0,
            endsAt: 0,
            liquidityBps: LIQUIDITY_BPS,
            platformFeeBps: PLATFORM_FEE_BPS
        });
    }

    function _expectAddress(string memory field, address actual, address expected) private pure {
        if (actual != expected) revert UnexpectedAddress(field, actual, expected);
    }

    function _expectValue(string memory field, uint256 actual, uint256 expected) private pure {
        if (actual != expected) revert UnexpectedValue(field, actual, expected);
    }

    function _expectBool(string memory field, bool actual, bool expected) private pure {
        if (actual != expected) revert UnexpectedBool(field, actual, expected);
    }
}
