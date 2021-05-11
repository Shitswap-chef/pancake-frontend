import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'Shit',
    stakingTokenName: QuoteToken.Shit,
    stakingTokenAddress: '0x7115d4aBd6296E6C1B95Ca1ECc4e371e218E91D6', // SHIT
    contractAddress: {
      97: '0x6A807D0119712Cb4AE81EcE817a32E4fa4D0Db63', // MasterChef
      56: '0x6A807D0119712Cb4AE81EcE817a32E4fa4D0Db63', // MasterChef
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://shitswap.app',
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
