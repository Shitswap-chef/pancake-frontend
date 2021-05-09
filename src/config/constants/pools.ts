import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'SHIT',
    stakingTokenName: QuoteToken.SHIT,
    stakingTokenAddress: '0x0D5baC1F158a3f9cEa2ED18C28a4b15b0c3D5436', // SHIT
    contractAddress: {
      97: '0x7cadd186dF3037e7D85208BE12c14687D8cf5d68', // MasterChef
      56: '0x7cadd186dF3037e7D85208BE12c14687D8cf5d68', // MasterChef
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
