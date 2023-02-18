import { Pagination, Table } from 'react-bootstrap'

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DatesFeature from "../../../../page_layout/DatesFeature";
import config from "../../../../Utils/Config";
import "./StockDetails.css";
import { UserContext } from '../../../../UserContext';

const StockDetails = (props: { stock: string }) => {
    const [user,setUser] = useContext(UserContext)
    const [stockDetails, setStockDetails] = useState([])
    const date = new Date().toISOString().split("T")[0];
    const [fromDate, setFromDate] = useState("2020-01-01")
    const [toDate, setToDate] = useState(date)

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
            axios.get(config.stocksUrl + "?ticker=" + stock + "&from_date=" + fromDate +"&to_date="+toDate,
            {headers:{"Authorization":user}}).then((response) => {
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
            
            <Table bordered size="sm">
            <thead>
                <tr>
                    <th>Ticker Name</th>
                    <th>Open Price</th>
                    <th>Close Price</th>
                    <th>Volume in M</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                {stockDetails.map((stockDate: any, index: number) => {
                    return <tr key={index} className={stockDate.open_price > stockDate.close_price ? "loss-marker" : "profit-marker"}>
                        <td>{stockDate.ticker}</td>
                        <td>{Number(stockDate.open_price).toFixed(2)}</td>
                        <td>{Number(stockDate.close_price).toFixed(2)}</td>
                        <td>{(stockDate.volume / 1000000).toFixed(3)}</td>
                        <td>{stockDate.time.split("T")[0]}</td>
                    </tr>
                })}
            </tbody>
            </Table>
            

        </div>

    )
}

export default StockDetails