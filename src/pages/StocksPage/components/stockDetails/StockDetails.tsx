import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../../../Utils/Config";
import "./StockDetails.css";

const StockDetails = (props:{stock:string}) => {
    const [stockDetails,setStockDetails] = useState([])
    console.log(props.stock);

    const getStockDetails = (stock:string) => {
        if (stock !== "") {
            axios.get(config.stocksUrl + "?ticker=" +stock).then((response) => {
                console.log(response.data);
                setStockDetails(response.data);

            })
        }
    }

    useEffect(() => {
        getStockDetails(props.stock)
    },[props.stock])

    if (getStockDetails.length === 0) {
        return <div>Please choose a Stock for details</div>;
    }

    return (
        <div>
            <h2>{props.stock}</h2>
            <table>
                <tr>
                    <th>Ticker Name</th>
                    <th>Open Price</th>
                    <th>Close Price</th>
                    <th>Volume</th>
                    <th>Time</th>
                </tr>
                {stockDetails.map((stockDate:any) => {
                    return <tr>
                        <td>{stockDate.ticker}</td>
                        <td>{stockDate.open_price}</td>
                        <td>{stockDate.close_price}</td>
                        <td>{stockDate.volume}</td>
                        <td>{stockDate.time}</td>
                    </tr>
                })}

            </table>
            
        </div>

    )
}

export default StockDetails