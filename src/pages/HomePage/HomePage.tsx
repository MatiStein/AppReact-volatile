import React from 'react'
import config from '../../Utils/Config'
import Peeking from './components/Peeking';
import TrendingTickers from './components/TrendingTickers';


interface Props {
  User: string
}

const HomePage = ({User}: Props) => {
  return (
  
    <div>
      <Peeking stock={''}/>
      <hr/>
      <h5 className='trending-ticker-title'>Most Trending Stocks Today</h5>
      <TrendingTickers/>
    </div>
  );
};

export default HomePage;