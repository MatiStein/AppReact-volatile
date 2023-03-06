import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import StocksList from '../../page_layout/StocksList';
import config from '../../Utils/Config';
import StockDetails from './components/stockDetails/StockDetails';
import "./StocksPage.css";
import StockNameProvider from '../../page_layout/StockNameContext';
import { UserContext } from '../../UserContext';
import { StockNameContext } from '../../page_layout/StockNameContext';

const StocksPage = () => {
    const [stocksList, setStocksList] = useState([]);
    const [currentStock, setCurrentStock] = useState("");
    const [user, setUser] = useContext(UserContext);
    const { stockName } = useContext(StockNameContext);

    const getStocks = () => {
        const stocksListUrl = config.stock_list_url
        axios.get(stocksListUrl, { headers: { "Authorization": user } }).then((response) => {
            setStocksList(response?.data?.Stocks)
        });
    }

    const getCurrentStockFromStockList = (stock: string) => {
        setCurrentStock(stock)
    }

    useEffect(() => {
        getStocks()
    }, [])

    return (
        <div>
            <div className='stocks-page-container'>
                <StocksList stockChangeHandler={getCurrentStockFromStockList} stocks={stocksList} />
                <StockNameProvider stock={currentStock} setStockName={() => {}}>
                    <StockDetails stock={currentStock} stockName={''} />
                </StockNameProvider>

            </div>
        </div>
    )
}

export default StocksPage;
