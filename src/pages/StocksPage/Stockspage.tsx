import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import StocksList from '../../page_layout/StocksList';
import config from '../../Utils/Config';
import StockDetails from './components/stockDetails/StockDetails';
import "./StocksPage.css";
import { UserContext } from '../../UserContext';


const StocksPage = () => {
    const [stocksList, setStocksList] = useState([])
    const [currentStock, setCurrentStock] = useState("")
    const [user, setUser] = useContext(UserContext)
    console.log("User", user)

    const getStocks = () => {
        const stocksListUrl = config.stock_list_url
        axios.get(stocksListUrl, { headers: { "Authorization": user } }).then((response) => {
            setStocksList(response?.data?.Stocks)
        })
    }

    const getCurrentStockFromStockList = (stockName: string) => {
        console.log(stockName)
        setCurrentStock(stockName)

    }

    useEffect(() => {
        getStocks()
    }, [])

    return (
        // <UserContext.Provider value={{ currentStock, setCurrentStock }}>
        <div>
            <div className='stocks-page-container'>
                <StocksList stockChangeHandler={getCurrentStockFromStockList} stocks={stocksList} />
                <StockDetails stock={currentStock} />
            </div>
        </div>
        // </UserContext.Provider>
    )
}

export default StocksPage;