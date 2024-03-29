import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import './TrendingTickers.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingTickers: React.FC = () => {
    const [trendingTickers, setTrendingTickers] = useState<any>(null);
    const [tickerText, setTickerText] = useState<string>('');
    const settings = {
        draggable: false,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        speed: 30000,
        cssEase: 'linear',
        variableWidth: false,
        pauseOnHover: true
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers',
                    params: { region: 'US' },
                    headers: {
                        'X-RapidAPI-Key': '5eaedbb38bmsh367e02e2054b38fp1be9c2jsnb099746cda7f',
                        'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
                    }
                };

                const response = await axios(options);
                const quotes = response.data.finance.result[0].quotes;
                setTrendingTickers(quotes);
                const text = quotes.map((stockData: any) => stockData.symbol).join(' ');
                setTickerText(text);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {trendingTickers === null ? (
                <div className="loading">
                    <div className="spinner">

                    </div>
                </div>
            ) : (
                <div className='ticker-container'>
                    <Slider {...settings}>
                        {trendingTickers?.filter((stockData: any) =>
                            stockData.market === 'us_market').map((stockData: any, index: number) => (
                                <div key={index} className="ticker">
                                    <span> [ {stockData.symbol} ]</span>
                                    <span>{stockData.longName}  </span>
                                    <span>is Trading: {stockData.regularMarketPrice}, </span>
                                    <span>Previous: {stockData.regularMarketPreviousClose}, </span>
                                    <span style={{ color: stockData.regularMarketChangePercent >= 0 ? 'green' : 'red' }}>
                                        {stockData.regularMarketChangePercent} %
                                    </span>
                                </div>))}
                    </Slider>
                </div>)}
        </div>);
}

export default TrendingTickers