import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'Shit',
    lpAddresses: {
      97: '0x7115d4aBd6296E6C1B95Ca1ECc4e371e218E91D6', // SHIT
      56: '0x7115d4aBd6296E6C1B95Ca1ECc4e371e218E91D6', // SHIT
    },
    tokenSymbol: 'FOAM',
    tokenAddresses: {
      97: '0x7115d4aBd6296E6C1B95Ca1ECc4e371e218E91D6', // SHIT
      56: '0x7115d4aBd6296E6C1B95Ca1ECc4e371e218E91D6', // SHIT
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'Shit-BNB LP',
    lpAddresses: {
      97: '0xef3a29acaf49f05f464b3b24cfd96d0f6bef1966', // SHIT-BNB LP
      56: '0xef3a29acaf49f05f464b3b24cfd96d0f6bef1966', // SHIT-BNB LP
    },
    tokenSymbol: 'Shit',
    tokenAddresses: {
      97: '0x7115d4aBd6296E6C1B95Ca1ECc4e371e218E91D6', // SHIT
      56: '0x7115d4aBd6296E6C1B95Ca1ECc4e371e218E91D6', // SHIT
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'Shit-BUSD LP',
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
    lpSymbol: 'Shit-CAKE LP',
    lpAddresses: {
      97: '0xE2DD1214a65a173Dce04372930Fc0a22F8df7f23', // SHIT-CAKE LP
      56: '0xE2DD1214a65a173Dce04372930Fc0a22F8df7f23', // SHIT-CAKE LP
    },
    tokenSymbol: 'Shit',
    tokenAddresses: {
      97: '0x7115d4aBd6296E6C1B95Ca1ECc4e371e218E91D6', // SHIT
      56: '0x7115d4aBd6296E6C1B95Ca1ECc4e371e218E91D6', // SHIT
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
