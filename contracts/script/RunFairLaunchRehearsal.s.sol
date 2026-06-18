// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { ArborFoundryTypes } from "../src/ArborFoundryTypes.sol";
import { FeeSplitLPLocker } from "../src/FeeSplitLPLocker.sol";
import { LaunchFactory } from "../src/LaunchFactory.sol";
import { SaleVault } from "../src/SaleVault.sol";
import { TopazFinalizer } from "../src/TopazFinalizer.sol";
import { IERC20 } from "../src/interfaces/IERC20.sol";
import { ITopazV2Factory } from "../src/interfaces/ITopazV2Factory.sol";
import { TestnetMockERC20 } from "../src/mocks/TestnetMockERC20.sol";

interface RehearsalVm {
    function addr(uint256 privateKey) external returns (address);
    function envAddress(string calldata name) external returns (address);
    function envUint(string calldata name) external returns (uint256);
    function startBroadcast(uint256 privateKey) external;
    function stopBroadcast() external;
}

contract RunFairLaunchRehearsal {
    RehearsalVm private constant vm = RehearsalVm(address(uint160(uint256(keccak256("hevm cheat code")))));

    uint256 public constant SALE_TOKEN_SUPPLY = 1_000_000 ether;
    uint256 public constant SALE_TOKEN_AMOUNT = 100_000 ether;
    uint256 public constant SOFT_CAP = 100 ether;
    uint256 public constant HARD_CAP = 1_000 ether;
    uint256 public constant CONTRIBUTION_AMOUNT = 200 ether;
    uint256 public constant TOKEN_AMOUNT_DESIRED = 50_000 ether;
    uint16 public constant LIQUIDITY_BPS = 6_000;
    uint16 public constant PLATFORM_FEE_BPS = 200;
    uint256 public constant LOCK_DURATION = 365 days;

    struct RehearsalResult {
        address launch;
        address launchToken;
        address pair;
        address lpReceiver;
        uint256 totalRaised;
        uint256 platformFee;
        uint256 netRaise;
        uint256 quoteToLiquidity;
        uint256 creatorProceeds;
        uint256 liquidity;
        uint256 lpBalance;
        uint256 launchStatus;
    }

    error UnexpectedAddress(string field, address actual, address expected);
    error UnexpectedValue(string field, uint256 actual, uint256 expected);
    error UnexpectedBool(string field, bool actual, bool expected);

    function run() external returns (RehearsalResult memory result) {
        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        address deployer = vm.addr(deployerPrivateKey);

        LaunchFactory launchFactory = LaunchFactory(vm.envAddress("LAUNCH_FACTORY"));
        TopazFinalizer topazFinalizer = TopazFinalizer(vm.envAddress("TOPAZ_FINALIZER"));
        FeeSplitLPLocker lpLocker = FeeSplitLPLocker(vm.envAddress("LP_LOCKER"));
        address quoteToken = vm.envAddress("USDT_QUOTE_TOKEN");
        address platformTreasury = vm.envAddress("PLATFORM_TREASURY");

        _expectAddress("LaunchFactory.owner", launchFactory.owner(), deployer);
        _expectAddress("TopazFinalizer.owner", topazFinalizer.owner(), deployer);
        _expectAddress("FeeSplitLPLocker.owner", lpLocker.owner(), deployer);
        _expectAddress("LaunchFactory.finalizer", launchFactory.finalizer(), address(topazFinalizer));
        _expectBool("LaunchFactory.quoteTokenAllowed", launchFactory.quoteTokenAllowed(quoteToken), true);

        vm.startBroadcast(deployerPrivateKey);

        TestnetMockERC20 launchToken =
            new TestnetMockERC20("Arbor Foundry Rehearsal Token", "AFRT", 18, deployer, SALE_TOKEN_SUPPLY);

        address launch = launchFactory.createLaunch(_launchConfig(deployer, address(launchToken), quoteToken));
        launchToken.approve(launch, SALE_TOKEN_AMOUNT);
        SaleVault(launch).fundSaleTokens(SALE_TOKEN_AMOUNT);
        launchFactory.approveLaunch(launch);
        launchFactory.openLaunch(launch);

        IERC20(quoteToken).approve(launch, CONTRIBUTION_AMOUNT);
        SaleVault(launch).deposit(CONTRIBUTION_AMOUNT);

        launchToken.approve(address(topazFinalizer), TOKEN_AMOUNT_DESIRED);
        (ArborFoundryTypes.LaunchAccounting memory accounting, address pair, uint256 liquidity) = topazFinalizer.finalizeLaunch(
            TopazFinalizer.FinalizeParams({
                launch: launch,
                token: address(launchToken),
                quoteToken: quoteToken,
                creatorProceedsReceiver: deployer,
                lpReceiver: address(lpLocker),
                tokenAmountDesired: TOKEN_AMOUNT_DESIRED,
                tokenAmountMin: 1,
                quoteAmountMin: 1,
                deadline: block.timestamp + 1 days
            })
        );

        lpLocker.registerLock(pair, deployer, platformTreasury, block.timestamp + LOCK_DURATION, false);

        vm.stopBroadcast();

        uint256 lpBalance = IERC20(pair).balanceOf(address(lpLocker));
        _expectValue("totalRaised", accounting.totalRaised, CONTRIBUTION_AMOUNT);
        _expectValue("lpBalance", lpBalance, liquidity);
        _expectValue("status", uint256(SaleVault(launch).status()), uint256(ArborFoundryTypes.LaunchStatus.Finalized));
        _expectAddress(
            "TopazFactory.getPool",
            ITopazV2Factory(address(topazFinalizer.factory())).getPool(address(launchToken), quoteToken, false),
            pair
        );

        result = RehearsalResult({
            launch: launch,
            launchToken: address(launchToken),
            pair: pair,
            lpReceiver: address(lpLocker),
            totalRaised: accounting.totalRaised,
            platformFee: accounting.platformFee,
            netRaise: accounting.netRaise,
            quoteToLiquidity: accounting.quoteToLiquidity,
            creatorProceeds: accounting.creatorProceeds,
            liquidity: liquidity,
            lpBalance: lpBalance,
            launchStatus: uint256(SaleVault(launch).status())
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
