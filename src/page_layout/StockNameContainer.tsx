import axios from 'axios';
import React, { useEffect, useState } from 'react';
import config from '../Utils/Config';

const StockNameContainer: React.FC = () => {
    const [stockName, setStockName] = useState<string>('');
    const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStockName(e.target.value);
    };

    const fetchStockName = async () => {
        try {
            const response = await axios.get(
                config.get_name_from_ticker_url + "?ticker=" + stockName
            );
            const data = response.data;
            setStockName(data.name);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (stockName) {
            fetchStockName();
        }
    }, [stockName]);

    return <div>{stockName}</div>;
};

export default StockNameContainer;
