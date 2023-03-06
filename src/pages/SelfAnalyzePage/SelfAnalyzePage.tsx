import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import StockNameProvider from '../../page_layout/StockNameContext'
import StocksList from '../../page_layout/StocksList'
import config from '../../Utils/Config'
import SelfAnalyzeDetails from './components/SelfAnalyzeDetails'

const SelfAnalyzePage = () => {
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
                <StockNameProvider stock={currentStock} setStockName={ () => {}}>
                    <SelfAnalyzeDetails stock={currentStock} />
                </StockNameProvider>
            </div>
        </div>

    )


}

export default SelfAnalyzePage