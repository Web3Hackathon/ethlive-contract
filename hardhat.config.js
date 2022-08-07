/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");

const {MAINNET_API_URL, POLYGON_API_URL, MUMBAI_API_URL, RINKEBY_API_URL ,ROPSTEN_API_URL ,KOVAN_API_URL ,PRIVATE_KEY ,ETHERSCAN_API_KEY, LOCALHOST } = process.env;

module.exports = {
   defaultNetwork: "localhost",
   networks: {
      hardhat: {},
      localhost: {
         url: LOCALHOST,
          accounts: [`0x${PRIVATE_KEY}`],
       },
      rinkeby: {
         url: RINKEBY_API_URL,
         accounts: [`0x${PRIVATE_KEY}`],
         gasPrice: 1000000000, // 1 gwei
      },
      mainnet: {
         url: MAINNET_API_URL,
         accounts: [`0x${PRIVATE_KEY}`],
         gasPrice: 55000000000, // 55 gwei
      },
      polygon: {
         url: POLYGON_API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
      mumbai: {
         url: MUMBAI_API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
      ropsten: {
         url: ROPSTEN_API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan: {
      apiKey: ETHERSCAN_API_KEY,
    },
   solidity: {
      version: "0.8.10",
      settings: {
         optimizer: {
            enabled: true,
            runs: 200
         }
      }
   },
}
