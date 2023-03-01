import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StockNameContainer from '../../page_layout/StockNameContainer'
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
                <SelfAnalyzeDetails stock={currentStock} />
                
            </div>
        </div>

    )


}

export default SelfAnalyzePage