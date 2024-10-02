const hre = require("hardhat");

async function main() {
    // Get the contract factory for TokenFactory
    const TokenFactory = await hre.ethers.getContractFactory("TokenFactory");

    // Deploy the contract
    const tokenFactory = await TokenFactory.deploy();

    // Wait for the deployment to finish
    await tokenFactory.deploymentTransaction().wait();

    // Output the deployed contract address
    console.log("TokenFactory deployed to (target):", tokenFactory.target);
    console.log("TokenFactory deployed to (address):", tokenFactory.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
