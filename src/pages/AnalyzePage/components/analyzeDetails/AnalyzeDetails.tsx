import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../../UserContext';
import config from '../../../../Utils/Config';

const AnalyzeDetails = (props:{stock:string}) => {
    const [user,setUser] = useContext(UserContext)
    const [IrregularStockDetails,setIrregularStockDetails] = useState([])
    console.log(props.stock);

    const getStockDetails = (stock:string) => {
        if (stock !== "") {
            axios.get(config.analyzeUrl + "?ticker=" +stock,{headers:{"Authorization":user}}).then((response) => {
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
            <h6>Function using methods 'Moving Average' & 'Standard deviation' 
                of 30 trade days. Rating(n) is Vol = (n-1) * AvgVol</h6>
                <Table bordered size="sm">
                <tr>
                    <th>Ticker Name</th>
                    <th>Volume in_M</th>
                    <th>Average in_M</th>
                    <th>Rating</th>
                    <th>Deviation in_M</th>
                    <th>Time</th>
                    <th>Open Price</th>
                    <th>Close Price</th>
                </tr>
                {IrregularStockDetails.map((stockDate:any) => {
                    return <tr className={stockDate.open_price > stockDate.close_price ? 
                    "loss-marker" : "profit-marker"}>
                        <td>{stockDate.ticker}</td>
                        <td>{(stockDate.volume / 1000000).toFixed(3)}</td>
                        <td>{(stockDate.avg_volume / 1000000).toFixed(3)}</td>
                        <td>{stockDate.rating}</td>
                        <td>{(stockDate.dev_volume / 1000000).toFixed(3)}</td>
                        <td>{stockDate.time.split("T")[0]}</td>
                        <td>{Number(stockDate.open_price).toFixed(2)}</td>
                        <td>{Number(stockDate.close_price).toFixed(2)}</td>
                    </tr>
                })}

            </Table>
            
        </div>

    )
}

export default AnalyzeDetails