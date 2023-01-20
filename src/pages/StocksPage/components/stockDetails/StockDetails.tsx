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

    return (
        <div>
            <h1>{props.stock}</h1>
            <table>
                <th>
                    <td>Ticker Name</td>
                    <td>Open Price</td>
                    <td>Close Price</td>
                    <td>Volume</td>
                    <td>Time</td>
                </th>
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