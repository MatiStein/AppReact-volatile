import axios from "axios";
import { useState } from "react";
import config from "../Utils/Config";
import "./StocksList.css";

const StocksPage = () => {
    const [stocksList, setStocksList] = useState([])
    const [currentStock, setCurrentStock] = useState("")

    const getStocks = () => {
        const stocksListUrl = config.stock_list_url
        axios.get(stocksListUrl).then((response) => {
            setStocksList(response?.data?.Stocks)
        })
    }
}

const StocksList = (props: { stocks: string[], stockChangeHandler: Function }) => {
    return (
        <div className="stocks-list-container">
            <h4>Stocks:</h4>
            <select className="stocks-list" onChange={(event) => { props.stockChangeHandler(event.target.value) }}>
                <option value="" disabled selected>Select a Ticker</option>
                {props.stocks?.map((stockName: string) => {
                    return <option className="stock-ticker" value={stockName} >{stockName}</option>
                })}
            </select>
        </div>
    )
}

export default StocksList