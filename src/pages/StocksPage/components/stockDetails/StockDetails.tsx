import axios from "axios";
import { useEffect, useState } from "react";
import DatesFeature from "../../../../page_layout/DatesFeature";
import config from "../../../../Utils/Config";
import "./StockDetails.css";

const StockDetails = (props: { stock: string }) => {
    const [stockDetails, setStockDetails] = useState([])
    const date = new Date().toISOString().split("T")[0];
    const [fromDate, setFromDate] = useState("2020-01-01")
    const [toDate, setToDate] = useState(date)

    const stockDate = new Date();
    const dateOnly = stockDate.toLocaleDateString();

    const fromDateHandler = (date: string) => {
        setFromDate(date)
        console.log(date)
    }

    const toDateHandler = (date: string) => {
        setToDate(date)
        console.log(date)
    }
    console.log(props.stock);

    const getStockDetails = (stock: string) => {
        if (stock !== "") {
            axios.get(config.stocksUrl + "?ticker=" + stock + "&from_date=" + fromDate +"&to_date="+toDate).then((response) => {
                console.log(response.data);
                setStockDetails(response.data);

            })
        }
    }

    useEffect(() => {
        getStockDetails(props.stock)
    }, [props.stock,fromDate,toDate])

    if (getStockDetails.length === 0) {
        return <div>Please choose a Stock for details</div>;
    }
    if (stockDetails.length === 0) {
        return <div>Please choose a Stock for details</div>
    }

    return (
        <div>
            <h2>{props.stock}</h2>
            <DatesFeature multiplierSetter={null} fromDateSetter={fromDateHandler} toDateSetter={toDateHandler} addMultiplierFilter={false} />
            
            <table>
                <tr>
                    <th>Ticker Name</th>
                    <th>Open Price</th>
                    <th>Close Price</th>
                    <th>Volume</th>
                    <th>Time</th>
                </tr>
                {stockDetails.map((stockDate: any) => {
                    return <tr className={stockDate.open_price > stockDate.close_price ? "loss-marker" : "profit-marker"}>
                        <td>{stockDate.ticker}</td>
                        <td>{stockDate.open_price}</td>
                        <td>{stockDate.close_price}</td>
                        <td>{stockDate.volume}</td>
                        <td>{dateOnly}</td>
                    </tr>
                })}

            </table>

        </div>

    )
}

export default StockDetails