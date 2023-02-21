import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TrendingTickers.css'
import { Table } from 'react-bootstrap';

const TrendingTickers: React.FC = () => {
    const [trendingTickers, setTrendingTickers] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'GET',
                    // url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers',
                    params: { region: 'US' },
                    headers: {
                        'X-RapidAPI-Key': '5eaedbb38bmsh367e02e2054b38fp1be9c2jsnb099746cda7f',
                        'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
                    }
                };
                const response = await axios(options);
                console.log(response.data.finance.result[0].quotes)
                setTrendingTickers(response.data.finance.result[0].quotes);
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
            <div className="spinner"></div>
            </div>
            ) : (
            <div>
        <Table>
            <thead>
                <tr>
                    <th>Ticker Name</th>
                    <th>Company Name</th>
                    <th>Trading</th>
                    <th>Last Close</th>
                    <th>Change Percent</th>
                </tr>
                </thead>
                <tbody>
                {trendingTickers.map((stockDate: any, index: number) => {
                    if (stockDate.market !== "us_market") {
                        return;
                    }
                    return <tr key={index} className={stockDate.regularMarketChangePercent <= 0 ? "loss-marker" : "profit-marker"}>
                        <td>{stockDate.symbol}</td>
                        <td>{stockDate.longName}</td>
                        <td>{stockDate.regularMarketPrice}</td>
                        <td>{stockDate.regularMarketPreviousClose}</td>
                        <td>{stockDate.regularMarketChangePercent}</td>
                    </tr>
                })}
            </tbody>
            </Table>
                </div>
                )}
        </div>
    );
};


export default TrendingTickers;