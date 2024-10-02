require('dotenv').config()
require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 1,
      // blockGasLimit: 12000000, // Custom gas limit
      // gasPrice: 20000000000, // Custom gas price (in wei)
      // initialBaseFeePerGas: 0, // Base fee per gas for the EIP-1559 (use 0 for legacy-style gas pricing)
      // mining: {
      //   auto: true, // Enable automatic mining
      //   interval: 5000, // Optional: Manual mining interval (in ms)
      // },
      forking: {
        url: "https://site1.moralis-nodes.com/eth/4439963949d341ca8f99cab64b8dab55",
      },
    }
  }
};
