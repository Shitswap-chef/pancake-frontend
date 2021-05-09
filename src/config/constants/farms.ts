import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'SHIT',
    lpAddresses: {
      97: '0x0D5baC1F158a3f9cEa2ED18C28a4b15b0c3D5436', // SHIT
      56: '0x0D5baC1F158a3f9cEa2ED18C28a4b15b0c3D5436', // SHIT
    },
    tokenSymbol: 'FOAM',
    tokenAddresses: {
      97: '0x07102bC107B84a46cD4C02C220d1d62903b9f96E', // SHIT
      56: '0x07102bC107B84a46cD4C02C220d1d62903b9f96E', // SHIT
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'SHIT-BNB LP',
    lpAddresses: {
      97: '0x6718544961a6008c8c6a21d140ba6900c813876f', // SHIT-BNB LP
      56: '0x6718544961a6008c8c6a21d140ba6900c813876f', // SHIT-BNB LP
    },
    tokenSymbol: 'SHIT',
    tokenAddresses: {
      97: '0x0D5baC1F158a3f9cEa2ED18C28a4b15b0c3D5436', // SHIT
      56: '0x0D5baC1F158a3f9cEa2ED18C28a4b15b0c3D5436', // SHIT
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'SHIT-BUSD LP',
    lpAddresses: {
      97: '0xDC6252e0D0C265edD682D482c1baf6F917796A04', // SHIT-BUSD LP
      56: '0xDC6252e0D0C265edD682D482c1baf6F917796A04', // SHIT-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    lpSymbol: 'SHIT-CAKE LP',
    lpAddresses: {
      97: '0xE2DD1214a65a173Dce04372930Fc0a22F8df7f23', // SHIT-CAKE LP
      56: '0xE2DD1214a65a173Dce04372930Fc0a22F8df7f23', // SHIT-CAKE LP
    },
    tokenSymbol: 'SHIT',
    tokenAddresses: {
      97: '0x0D5baC1F158a3f9cEa2ED18C28a4b15b0c3D5436', // SHIT
      56: '0x0D5baC1F158a3f9cEa2ED18C28a4b15b0c3D5436', // SHIT
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BUSD-BNB LP
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BUSD-BNB LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
