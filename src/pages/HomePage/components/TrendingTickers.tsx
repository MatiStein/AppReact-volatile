import React, { useState, useEffect } from 'react';
import axios from 'axios';


const TrendingTickers: React.FC = () => {
    const [trendingTickers, setTrendingTickers] = useState<any>(null);

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
                setTrendingTickers(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {trendingTickers === null ? (
                <div>Loading...</div>
            ) : (
                <pre>{JSON.stringify(trendingTickers, null, 2)}</pre>
            )}
        </div>
    );
};


export default TrendingTickers;