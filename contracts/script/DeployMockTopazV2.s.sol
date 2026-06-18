// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { MockTopazV2Factory } from "../src/mocks/MockTopazV2Factory.sol";
import { MockTopazV2Router } from "../src/mocks/MockTopazV2Router.sol";
import { TestnetMockERC20 } from "../src/mocks/TestnetMockERC20.sol";

interface MockDeployVm {
    function addr(uint256 privateKey) external returns (address);
    function envUint(string calldata name) external returns (uint256);
    function startBroadcast(uint256 privateKey) external;
    function stopBroadcast() external;
}

contract DeployMockTopazV2 {
    MockDeployVm private constant vm = MockDeployVm(address(uint160(uint256(keccak256("hevm cheat code")))));

    struct Deployment {
        address deployer;
        address mockTopazFactory;
        address mockTopazRouter;
        address mockUsdt;
        uint256 mockUsdtSupply;
    }

    uint256 public constant MOCK_USDT_SUPPLY = 1_000_000_000 ether;

    function run() external returns (Deployment memory deployment) {
        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        address deployer = vm.addr(deployerPrivateKey);

        vm.startBroadcast(deployerPrivateKey);

        MockTopazV2Factory factory = new MockTopazV2Factory();
        MockTopazV2Router router = new MockTopazV2Router(address(factory));
        TestnetMockERC20 mockUsdt = new TestnetMockERC20("Mock USDT", "mUSDT", 18, deployer, MOCK_USDT_SUPPLY);

        vm.stopBroadcast();

        deployment = Deployment({
            deployer: deployer,
            mockTopazFactory: address(factory),
            mockTopazRouter: address(router),
            mockUsdt: address(mockUsdt),
            mockUsdtSupply: MOCK_USDT_SUPPLY
        });
    }
}
