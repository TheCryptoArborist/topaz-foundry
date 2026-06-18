// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { FeeSplitLPLocker } from "../src/FeeSplitLPLocker.sol";
import { IncentiveEscrow } from "../src/IncentiveEscrow.sol";
import { LaunchFactory } from "../src/LaunchFactory.sol";
import { TopazFinalizer } from "../src/TopazFinalizer.sol";
import { VestingVault } from "../src/VestingVault.sol";

interface Vm {
    function addr(uint256 privateKey) external returns (address);
    function envAddress(string calldata name) external returns (address);
    function envUint(string calldata name) external returns (uint256);
    function startBroadcast(uint256 privateKey) external;
    function stopBroadcast() external;
}

contract DeployArborFoundryMvp {
    Vm private constant vm = Vm(address(uint160(uint256(keccak256("hevm cheat code")))));

    struct Deployment {
        address launchFactory;
        address topazFinalizer;
        address lpLocker;
        address vestingVault;
        address incentiveEscrow;
        address owner;
        address platformTreasury;
        address usdtQuoteToken;
        address topazFactory;
        address topazRouter;
    }

    error InvalidDeploymentConfig();

    function run() external returns (Deployment memory deployment) {
        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        address deployer = vm.addr(deployerPrivateKey);
        address arborOwner = vm.envAddress("ARBOR_OWNER");
        address platformTreasury = vm.envAddress("PLATFORM_TREASURY");
        address usdtQuoteToken = vm.envAddress("USDT_QUOTE_TOKEN");
        address topazFactory = vm.envAddress("TOPAZ_FACTORY");
        address topazRouter = vm.envAddress("TOPAZ_ROUTER");

        if (
            deployer == address(0) || arborOwner == address(0) || platformTreasury == address(0)
                || usdtQuoteToken == address(0) || topazFactory == address(0) || topazRouter == address(0)
        ) {
            revert InvalidDeploymentConfig();
        }

        vm.startBroadcast(deployerPrivateKey);

        LaunchFactory launchFactory = new LaunchFactory(deployer, platformTreasury);
        TopazFinalizer topazFinalizer = new TopazFinalizer(deployer, topazFactory, topazRouter);
        FeeSplitLPLocker lpLocker = new FeeSplitLPLocker(deployer);
        VestingVault vestingVault = new VestingVault(deployer);
        IncentiveEscrow incentiveEscrow = new IncentiveEscrow(deployer);

        launchFactory.setFinalizer(address(topazFinalizer));
        launchFactory.setQuoteTokenAllowlistEnabled(true);
        launchFactory.setQuoteTokenAllowed(usdtQuoteToken, true);

        if (arborOwner != deployer) {
            launchFactory.transferOwnership(arborOwner);
            topazFinalizer.transferOwnership(arborOwner);
            lpLocker.transferOwnership(arborOwner);
            vestingVault.transferOwnership(arborOwner);
            incentiveEscrow.transferOwnership(arborOwner);
        }

        vm.stopBroadcast();

        deployment = Deployment({
            launchFactory: address(launchFactory),
            topazFinalizer: address(topazFinalizer),
            lpLocker: address(lpLocker),
            vestingVault: address(vestingVault),
            incentiveEscrow: address(incentiveEscrow),
            owner: arborOwner,
            platformTreasury: platformTreasury,
            usdtQuoteToken: usdtQuoteToken,
            topazFactory: topazFactory,
            topazRouter: topazRouter
        });
    }
}
