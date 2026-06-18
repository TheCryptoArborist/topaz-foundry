// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { ArborFoundryTypes } from "../src/ArborFoundryTypes.sol";
import { FeeSplitLPLocker } from "../src/FeeSplitLPLocker.sol";
import { IncentiveEscrow } from "../src/IncentiveEscrow.sol";
import { LaunchFactory } from "../src/LaunchFactory.sol";
import { SaleVault } from "../src/SaleVault.sol";
import { TopazFinalizer } from "../src/TopazFinalizer.sol";
import { VestingVault } from "../src/VestingVault.sol";
import { IERC20 } from "../src/interfaces/IERC20.sol";
import { ITopazV2Factory } from "../src/interfaces/ITopazV2Factory.sol";
import { ITopazV2Router } from "../src/interfaces/ITopazV2Router.sol";

contract ArborFoundryMvpTest {
    function testFairLaunchRefundsWhenSoftCapMissed() external {
        TestContext memory context = _createLaunchContext(1000 ether, 2000 ether, 10_000 ether, 6000);

        _fundAndOpen(context, 1, type(uint256).max);

        context.quoteToken.approve(context.launch, 500 ether);
        SaleVault(context.launch).deposit(500 ether);

        context.factory.enableRefunds(context.launch);

        uint256 beforeRefund = context.quoteToken.balanceOf(address(this));
        SaleVault(context.launch).claimRefund();

        _assertEq(uint256(SaleVault(context.launch).status()), uint256(ArborFoundryTypes.LaunchStatus.Refunding));
        _assertEq(context.quoteToken.balanceOf(address(this)), beforeRefund + 500 ether);
        _assertEq(context.quoteToken.balanceOf(context.platformTreasury), 0);
    }

    function testSuccessfulFairLaunchFinalizesAccountingAndClaims() external {
        TestContext memory context = _createLaunchContext(1000 ether, 2000 ether, 10_000 ether, 6000);

        MockTopazFactory topazFactory = new MockTopazFactory();
        MockTopazRouter router = new MockTopazRouter(topazFactory);
        TopazFinalizer finalizer = new TopazFinalizer(address(this), address(topazFactory), address(router));
        context.factory.setLaunchFinalizer(context.launch, address(finalizer));

        _fundAndOpen(context, 1, type(uint256).max);

        context.quoteToken.approve(context.launch, 1000 ether);
        SaleVault(context.launch).deposit(1000 ether);

        context.saleToken.approve(address(finalizer), 5000 ether);
        TopazFinalizer.FinalizeParams memory params = TopazFinalizer.FinalizeParams({
            launch: context.launch,
            token: address(context.saleToken),
            quoteToken: address(context.quoteToken),
            creatorProceedsReceiver: context.creatorProceedsReceiver,
            lpReceiver: context.lpReceiver,
            tokenAmountDesired: 5000 ether,
            tokenAmountMin: 1,
            quoteAmountMin: 1,
            deadline: type(uint256).max
        });

        (ArborFoundryTypes.LaunchAccounting memory accounting, address pair, uint256 liquidity) =
            finalizer.finalizeLaunch(params);

        _assertEq(accounting.totalRaised, 1000 ether);
        _assertEq(accounting.platformFee, 20 ether);
        _assertEq(accounting.netRaise, 980 ether);
        _assertEq(accounting.quoteToLiquidity, 588 ether);
        _assertEq(accounting.creatorProceeds, 392 ether);
        _assertEq(context.quoteToken.balanceOf(context.platformTreasury), 20 ether);
        _assertEq(context.quoteToken.balanceOf(context.creatorProceedsReceiver), 392 ether);
        _assertEq(MockTopazPair(pair).balanceOf(context.lpReceiver), liquidity);
        _assertEq(uint256(SaleVault(context.launch).status()), uint256(ArborFoundryTypes.LaunchStatus.Finalized));

        uint256 beforeClaim = context.saleToken.balanceOf(address(this));
        SaleVault(context.launch).claimTokens();
        _assertEq(context.saleToken.balanceOf(address(this)), beforeClaim + 10_000 ether);
    }

    function testDoubleRefundIsRejected() external {
        TestContext memory context = _createLaunchContext(1000 ether, 2000 ether, 10_000 ether, 6000);

        _fundAndOpen(context, 1, type(uint256).max);

        context.quoteToken.approve(context.launch, 500 ether);
        SaleVault(context.launch).deposit(500 ether);

        context.factory.enableRefunds(context.launch);
        SaleVault(context.launch).claimRefund();

        (bool refundedAgain,) = context.launch.call(abi.encodeCall(SaleVault.claimRefund, ()));
        _assertFalse(refundedAgain);
    }

    function testDoubleTokenClaimIsRejected() external {
        TestContext memory context = _createLaunchContext(1000 ether, 2000 ether, 10_000 ether, 6000);
        TopazFinalizer finalizer = _attachFinalizer(context);

        _fundAndOpen(context, 1, type(uint256).max);

        context.quoteToken.approve(context.launch, 1000 ether);
        SaleVault(context.launch).deposit(1000 ether);

        TopazFinalizer.FinalizeParams memory params = _finalizeParams(context, 5000 ether);
        context.saleToken.approve(address(finalizer), 5000 ether);
        finalizer.finalizeLaunch(params);

        SaleVault(context.launch).claimTokens();

        (bool claimedAgain,) = context.launch.call(abi.encodeCall(SaleVault.claimTokens, ()));
        _assertFalse(claimedAgain);
    }

    function testHardCapIsEnforced() external {
        TestContext memory context = _createLaunchContextWithTerms({
            softCap: 500 ether,
            hardCap: 1000 ether,
            saleTokenAmount: 10_000 ether,
            liquidityBps: 6000,
            walletMin: 1 ether,
            walletMax: 2000 ether,
            saleType: ArborFoundryTypes.SaleType.FairLaunch,
            setupMode: ArborFoundryTypes.SetupMode.SelfServe
        });

        _fundAndOpen(context, 1, type(uint256).max);

        context.quoteToken.approve(context.launch, 2000 ether);
        SaleVault(context.launch).deposit(900 ether);

        (bool overHardCap,) = context.launch.call(abi.encodeCall(SaleVault.deposit, (200 ether)));
        _assertFalse(overHardCap);
        _assertEq(SaleVault(context.launch).totalRaised(), 900 ether);
    }

    function testWalletMinAndMaxAreEnforced() external {
        TestContext memory context = _createLaunchContextWithTerms({
            softCap: 500 ether,
            hardCap: 1000 ether,
            saleTokenAmount: 10_000 ether,
            liquidityBps: 6000,
            walletMin: 100 ether,
            walletMax: 300 ether,
            saleType: ArborFoundryTypes.SaleType.FairLaunch,
            setupMode: ArborFoundryTypes.SetupMode.SelfServe
        });

        _fundAndOpen(context, 1, type(uint256).max);

        context.quoteToken.approve(context.launch, 1000 ether);

        (bool belowMin,) = context.launch.call(abi.encodeCall(SaleVault.deposit, (50 ether)));
        _assertFalse(belowMin);

        SaleVault(context.launch).deposit(200 ether);

        (bool aboveMax,) = context.launch.call(abi.encodeCall(SaleVault.deposit, (150 ether)));
        _assertFalse(aboveMax);
        _assertEq(SaleVault(context.launch).totalRaised(), 200 ether);
    }

    function testGuidedSetupSaleCannotUseSelfServeDepositPath() external {
        TestContext memory context = _createLaunchContextWithTerms({
            softCap: 500 ether,
            hardCap: 1000 ether,
            saleTokenAmount: 10_000 ether,
            liquidityBps: 6000,
            walletMin: 1 ether,
            walletMax: 1000 ether,
            saleType: ArborFoundryTypes.SaleType.FixedPrice,
            setupMode: ArborFoundryTypes.SetupMode.GuidedSetup
        });

        _fundAndOpen(context, 1, type(uint256).max);

        context.quoteToken.approve(context.launch, 100 ether);

        (bool usedSelfServeDeposit,) = context.launch.call(abi.encodeCall(SaleVault.deposit, (100 ether)));
        _assertFalse(usedSelfServeDeposit);
        _assertEq(SaleVault(context.launch).totalRaised(), 0);
    }

    function testDoubleFinalizationIsRejected() external {
        TestContext memory context = _createLaunchContext(1000 ether, 2000 ether, 10_000 ether, 6000);
        TopazFinalizer finalizer = _attachFinalizer(context);

        _fundAndOpen(context, 1, type(uint256).max);

        context.quoteToken.approve(context.launch, 1000 ether);
        SaleVault(context.launch).deposit(1000 ether);

        TopazFinalizer.FinalizeParams memory params = _finalizeParams(context, 5000 ether);
        context.saleToken.approve(address(finalizer), 5000 ether);
        finalizer.finalizeLaunch(params);

        (bool finalizedAgain,) = address(finalizer).call(abi.encodeCall(TopazFinalizer.finalizeLaunch, (params)));
        _assertFalse(finalizedAgain);
    }

    function testLPLockerSplitsClaimedFeesEightyTwenty() external {
        MockERC20 token0 = new MockERC20("Fee Token 0", "FEE0", 18);
        MockERC20 token1 = new MockERC20("Fee Token 1", "FEE1", 18);
        MockTopazPair pair = new MockTopazPair(address(token0), address(token1));
        FeeSplitLPLocker locker = new FeeSplitLPLocker(address(this));

        address creator = address(0xCAFE);
        address platform = address(0xFEE);

        locker.registerLock(address(pair), creator, platform, type(uint256).max, false);
        token0.mint(address(pair), 100 ether);
        token1.mint(address(pair), 50 ether);

        locker.claimAndSplitFees(address(pair));

        _assertEq(token0.balanceOf(creator), 80 ether);
        _assertEq(token0.balanceOf(platform), 20 ether);
        _assertEq(token1.balanceOf(creator), 40 ether);
        _assertEq(token1.balanceOf(platform), 10 ether);
    }

    function testIncentiveEscrowBlocksOverFundingAndReleasesFundedAmount() external {
        MockERC20 incentiveToken = new MockERC20("Incentive", "INC", 18);
        IncentiveEscrow escrow = new IncentiveEscrow(address(this));
        address distributor = address(0xBEEF);

        incentiveToken.mint(address(this), 100 ether);
        incentiveToken.approve(address(escrow), 100 ether);

        uint256 incentiveId =
            escrow.createIncentive(IERC20(address(incentiveToken)), address(0xA11CE), distributor, 100 ether);
        escrow.fundIncentive(incentiveId, 70 ether);

        (bool overFunded,) =
            address(escrow).call(abi.encodeCall(IncentiveEscrow.fundIncentive, (incentiveId, 40 ether)));
        _assertFalse(overFunded);

        escrow.releaseIncentive(incentiveId);
        _assertEq(incentiveToken.balanceOf(distributor), 70 ether);
    }

    function testVestingVaultReleasesVestedTokens() external {
        MockERC20 vestingToken = new MockERC20("Vesting", "VEST", 18);
        VestingVault vault = new VestingVault(address(this));

        vestingToken.mint(address(this), 100 ether);
        vestingToken.approve(address(vault), 100 ether);

        uint256 scheduleId = vault.createSchedule(IERC20(address(vestingToken)), address(this), 100 ether, 0, 0, 1);

        uint256 beforeClaim = vestingToken.balanceOf(address(this));
        vault.claim(scheduleId);

        _assertEq(vestingToken.balanceOf(address(this)), beforeClaim + 100 ether);
    }

    function _createLaunchContext(uint256 softCap, uint256 hardCap, uint256 saleTokenAmount, uint16 liquidityBps)
        internal
        returns (TestContext memory context)
    {
        context = _createLaunchContextWithTerms({
            softCap: softCap,
            hardCap: hardCap,
            saleTokenAmount: saleTokenAmount,
            liquidityBps: liquidityBps,
            walletMin: 1 ether,
            walletMax: hardCap,
            saleType: ArborFoundryTypes.SaleType.FairLaunch,
            setupMode: ArborFoundryTypes.SetupMode.SelfServe
        });
    }

    function _createLaunchContextWithTerms(
        uint256 softCap,
        uint256 hardCap,
        uint256 saleTokenAmount,
        uint16 liquidityBps,
        uint256 walletMin,
        uint256 walletMax,
        ArborFoundryTypes.SaleType saleType,
        ArborFoundryTypes.SetupMode setupMode
    ) internal returns (TestContext memory context) {
        context.saleToken = new MockERC20("Launch Token", "LAUNCH", 18);
        context.quoteToken = new MockERC20("Quote Token", "QUOTE", 18);
        context.platformTreasury = address(0xF011);
        context.creatorProceedsReceiver = address(0xC0FFEE);
        context.lpReceiver = address(0x10CC);
        context.saleTokenAmount = saleTokenAmount;
        context.factory = new LaunchFactory(address(this), context.platformTreasury);

        context.saleToken.mint(address(this), 20_000 ether);
        context.quoteToken.mint(address(this), 20_000 ether);

        ArborFoundryTypes.LaunchConfig memory config = ArborFoundryTypes.LaunchConfig({
            creator: address(this),
            saleToken: address(context.saleToken),
            quoteToken: address(context.quoteToken),
            saleType: saleType,
            setupMode: setupMode,
            saleTokenAmount: saleTokenAmount,
            softCap: softCap,
            hardCap: hardCap,
            walletMin: walletMin,
            walletMax: walletMax,
            startsAt: 0,
            endsAt: 0,
            liquidityBps: liquidityBps,
            platformFeeBps: 200
        });

        context.launch = context.factory.createLaunch(config);
    }

    function _attachFinalizer(TestContext memory context) internal returns (TopazFinalizer finalizer) {
        MockTopazFactory topazFactory = new MockTopazFactory();
        MockTopazRouter router = new MockTopazRouter(topazFactory);
        finalizer = new TopazFinalizer(address(this), address(topazFactory), address(router));
        context.factory.setLaunchFinalizer(context.launch, address(finalizer));
    }

    function _finalizeParams(TestContext memory context, uint256 tokenAmountDesired)
        internal
        pure
        returns (TopazFinalizer.FinalizeParams memory params)
    {
        params = TopazFinalizer.FinalizeParams({
            launch: context.launch,
            token: address(context.saleToken),
            quoteToken: address(context.quoteToken),
            creatorProceedsReceiver: context.creatorProceedsReceiver,
            lpReceiver: context.lpReceiver,
            tokenAmountDesired: tokenAmountDesired,
            tokenAmountMin: 1,
            quoteAmountMin: 1,
            deadline: type(uint256).max
        });
    }

    function _fundAndOpen(TestContext memory context, uint256 startsAt, uint256 endsAt) internal {
        context.saleToken.approve(context.launch, context.saleTokenAmount);
        SaleVault(context.launch).fundSaleTokens(context.saleTokenAmount);
        context.factory.approveLaunch(context.launch);
        context.factory.scheduleLaunch(context.launch, startsAt, endsAt);
        context.factory.openLaunch(context.launch);
    }

    function _assertEq(uint256 actual, uint256 expected) internal pure {
        require(actual == expected, "uint mismatch");
    }

    function _assertFalse(bool value) internal pure {
        require(!value, "expected false");
    }
}

struct TestContext {
    MockERC20 saleToken;
    MockERC20 quoteToken;
    LaunchFactory factory;
    address launch;
    address platformTreasury;
    address creatorProceedsReceiver;
    address lpReceiver;
    uint256 saleTokenAmount;
}

contract MockTopazRouter is ITopazV2Router {
    MockTopazFactory public immutable factory;

    constructor(MockTopazFactory factory_) {
        factory = factory_;
    }

    function quoteAddLiquidity(address, address, bool, address, uint256 amountADesired, uint256 amountBDesired)
        external
        pure
        returns (uint256 amountA, uint256 amountB, uint256 liquidity)
    {
        return (amountADesired, amountBDesired, _min(amountADesired, amountBDesired));
    }

    function addLiquidity(
        address tokenA,
        address tokenB,
        bool stable,
        uint256 amountADesired,
        uint256 amountBDesired,
        uint256,
        uint256,
        address to,
        uint256
    ) external returns (uint256 amountA, uint256 amountB, uint256 liquidity) {
        address pair = factory.getPool(tokenA, tokenB, stable);
        if (pair == address(0)) {
            pair = factory.createPool(tokenA, tokenB, stable);
        }

        amountA = amountADesired;
        amountB = amountBDesired;
        liquidity = _min(amountA, amountB);

        MockERC20(tokenA).transferFrom(msg.sender, pair, amountA);
        MockERC20(tokenB).transferFrom(msg.sender, pair, amountB);
        MockTopazPair(pair).mint(to, liquidity);
    }

    function _min(uint256 a, uint256 b) private pure returns (uint256) {
        return a < b ? a : b;
    }
}

contract MockTopazFactory is ITopazV2Factory {
    mapping(bytes32 => address) public pools;

    function getPool(address tokenA, address tokenB, bool stable) external view returns (address pool) {
        return pools[_poolKey(tokenA, tokenB, stable)];
    }

    function createPool(address tokenA, address tokenB, bool stable) external returns (address pool) {
        bytes32 key = _poolKey(tokenA, tokenB, stable);
        pool = pools[key];
        if (pool != address(0)) return pool;

        MockTopazPair pair = new MockTopazPair(tokenA, tokenB);
        pool = address(pair);
        pools[key] = pool;
        pools[_poolKey(tokenB, tokenA, stable)] = pool;
    }

    function _poolKey(address tokenA, address tokenB, bool stable) private pure returns (bytes32) {
        return keccak256(abi.encode(tokenA, tokenB, stable));
    }
}

contract MockERC20 is IERC20 {
    string public name;
    string public symbol;
    uint8 public immutable override decimals;
    uint256 public override totalSupply;

    mapping(address => uint256) public override balanceOf;
    mapping(address => mapping(address => uint256)) public override allowance;

    constructor(string memory name_, string memory symbol_, uint8 decimals_) {
        name = name_;
        symbol = symbol_;
        decimals = decimals_;
    }

    function approve(address spender, uint256 amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        return true;
    }

    function transfer(address to, uint256 amount) external returns (bool) {
        _transfer(msg.sender, to, amount);
        return true;
    }

    function transferFrom(address from, address to, uint256 amount) external returns (bool) {
        uint256 currentAllowance = allowance[from][msg.sender];
        require(currentAllowance >= amount, "allowance");
        allowance[from][msg.sender] = currentAllowance - amount;
        _transfer(from, to, amount);
        return true;
    }

    function mint(address to, uint256 amount) public {
        balanceOf[to] += amount;
        totalSupply += amount;
    }

    function _transfer(address from, address to, uint256 amount) internal {
        require(balanceOf[from] >= amount, "balance");
        balanceOf[from] -= amount;
        balanceOf[to] += amount;
    }
}

    contract MockTopazPair is MockERC20 {
        address public token0;
        address public token1;

        constructor(address token0_, address token1_) MockERC20("Mock Topaz LP", "mLP", 18) {
            token0 = token0_;
            token1 = token1_;
        }

        function claimFees() external returns (uint256 claimed0, uint256 claimed1) {
            claimed0 = MockERC20(token0).balanceOf(address(this));
            claimed1 = MockERC20(token1).balanceOf(address(this));

            if (claimed0 != 0) MockERC20(token0).transfer(msg.sender, claimed0);
            if (claimed1 != 0) MockERC20(token1).transfer(msg.sender, claimed1);
        }
    }
