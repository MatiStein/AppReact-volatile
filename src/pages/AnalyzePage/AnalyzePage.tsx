import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StocksList from '../../page_layout/StocksList';
import config from '../../Utils/Config';
import AnalyzeDetails from './components/analyzeDetails/AnalyzeDetails';
import "./AnalyzePage.css";
import StockNameProvider from '../../page_layout/StockNameContext';


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
        setCurrentStock(stockName)
    }

    useEffect(() => {
        getStocks()
    }, [])



    return (
        <div>
            <div className='stocks-page-container'>
                <StocksList stockChangeHandler={getCurrentStockFromStockList} stocks={stocksList} />
                <StockNameProvider stock={currentStock} setStockName={() => {}}>
                    <AnalyzeDetails stock={currentStock} />
                </StockNameProvider>

            </div>
        </div>

    )

}

export default AnalyzePage