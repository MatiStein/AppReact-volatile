import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StocksList from '../../page_layout/StocksList';
import config from '../../Utils/Config';
import AnalyzeDetails from './components/analyzeDetails/AnalyzeDetails';

const AnalyzePage = () => {
    const [stocksList, setStocksList] = useState([])
    const [currentStock, setCurrentStock] = useState("")

    const getStocks = () => {
        const stocksListUrl = config.stock_list_url
        axios.get(stocksListUrl).then((response) => {
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
        <div>
            <div className='stocks-page-container'>
                <StocksList stockChangeHandler={getCurrentStockFromStockList} stocks={stocksList} />
                <AnalyzeDetails stock={currentStock} />
            </div>
        </div>

    )

}

export default AnalyzePage