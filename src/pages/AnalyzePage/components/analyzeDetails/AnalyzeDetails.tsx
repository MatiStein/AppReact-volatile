import axios from 'axios';
import React, { useEffect, useState } from 'react'
import config from '../../../../Utils/Config';

const AnalyzeDetails = (props:{stock:string}) => {
    const [IrregularStockDetails,setIrregularStockDetails] = useState([])
    console.log(props.stock);

    const stockDate = new Date();
    const dateOnly = stockDate.toLocaleDateString();

    const getStockDetails = (stock:string) => {
        if (stock !== "") {
            axios.get(config.analyzeUrl + "?ticker=" +stock).then((response) => {
                console.log(response.data);
                setIrregularStockDetails(response.data);

            })
        }
    }

    useEffect(() => {
        getStockDetails(props.stock)
    },[props.stock])

    if (IrregularStockDetails.length === 0) {
        return <div>No Irregular Stock Details for this stock</div>;
    }

    return (
    
        <div>
            <h2>{props.stock}</h2>
            <table>
                <tr>
                    <th>Ticker Name</th>
                    <th>Volume</th>
                    <th>Average</th>
                    <th>Rating</th>
                    <th>Deviation</th>
                    <th>Time</th>
                    <th>Open Price</th>
                    <th>Close Price</th>
                </tr>
                {IrregularStockDetails.map((stockDate:any) => {
                    return <tr className={stockDate.open_price > stockDate.close_price ? "loss-marker" : "profit-marker"}>
                        <td>{stockDate.ticker}</td>
                        <td>{stockDate.volume}</td>
                        <td>{stockDate.avg_volume}</td>
                        <td>{stockDate.rating}</td>
                        <td>{stockDate.dev_volume}</td>
                        <td>{dateOnly}</td>
                        <td>{stockDate.open_price}</td>
                        <td>{stockDate.close_price}</td>
                    </tr>
                })}

            </table>
            
        </div>

    )
}

export default AnalyzeDetails