import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard';

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/bucket.png'), url('/images/bowl.png');
    background-position: left center, right center;
    background-size: contain;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const FatHeading = styled(Heading)`
  font-weight: 800;
`

const FatText = styled(Text)`
  font-weight: 600;
`

const Home: React.FC = () => {
  return (
    <Page>
      <Hero>
        <FatHeading as="h1" size="xl" mb="24px" color="secondary">
          {/* TranslateString(576, 'PancakeSwap') */}
          ShitSwap
        </FatHeading>
        <FatText>
          {/* TranslateString(578, 'The #1 AMM and yield farm on Binance Smart Chain.') */}
          The shitest AMM and yield farm on Binance Smart Chain.
        </FatText>
      </Hero>
      <Cards>
        <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
        <TotalValueLockedCard />
      </Cards>
    </Page>
  )
}

export default Home
