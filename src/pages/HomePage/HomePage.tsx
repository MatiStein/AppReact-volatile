import React from 'react'
import config from '../../Utils/Config'
import Peeking from './components/Peeking';
import TrendingBanner from './components/TrendingBanner';
import TrendingTickers from './components/TrendingTickers';


interface Props {
  User: string
}

const HomePage = ({User}: Props) => {
  return (
  
    <div>
      {/* <TrendingBanner CompanyName={'CompanyName'} Symbol={'Symbol'} Trading={0} LastClose={0} ChangePercent={0} /> */}
      
      <Peeking stock={''}/>
      <hr/>
      <h5>Most Trending Stocks Today</h5>
      <TrendingTickers/>
    </div>
  );
};

export default HomePage;