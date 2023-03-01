import { Table } from 'react-bootstrap'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import config from '../../../Utils/Config'


const Peeking = (props: { stock: string }) => {
    const [TopRating, setTopRating] = useState<any[]>([]);
    const [LatestRating, setLatestRating] = useState<any[]>([]);

    const getTopRating = () => {
        axios.get(config.get_top_3_ratings_url).then((response) => {
            console.log(response.data);
            setTopRating(response.data);
        });
    };

    const getLatestRating = () => {
        axios.get(config.get_latest_3_ratings_url).then((response) => {
            console.log(response.data);
            setLatestRating(response.data);
        });
    };

    useEffect(() => {
        getLatestRating()
        getTopRating()
    }, [])

    return (
        <div>
            <Table bordered size="sm">
                <thead>
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
                </thead>
                <h6>Highest Rating in the last 3 month by Date</h6>
                <tbody>
                    {TopRating.map((stockDate: any) => {
                        return <tr className={stockDate.open_price > stockDate.close_price ?
                            "loss-marker" : "profit-marker"}>
                            <td>{stockDate.ticker}</td>
                            <td>{(stockDate.volume / 1000000).toFixed(3)}</td>
                            <td>{(stockDate.avg_volume / 1000000).toFixed(3)}</td>
                            <td>{Number(stockDate.rating).toFixed(1)}</td>
                            <td>{(stockDate.dev_volume / 1000000).toFixed(3)}</td>
                            <td>{stockDate.time.split("T")[0]}</td>
                            <td>{Number(stockDate.open_price).toFixed(2)}</td>
                            <td>{Number(stockDate.close_price).toFixed(2)}</td>
                        </tr>
                    })
                    }
                </tbody>
                <h6>Latest Rating (5 or higher) in the Data by Date</h6>
                <tbody>
                    {LatestRating.map((stockDate: any) => {
                        return <tr className={stockDate.open_price > stockDate.close_price ?
                            "loss-marker" : "profit-marker"}>
                            <td>{stockDate.ticker}</td>
                            <td>{(stockDate.volume / 1000000).toFixed(3)}</td>
                            <td>{(stockDate.avg_volume / 1000000).toFixed(3)}</td>
                            <td>{Number(stockDate.rating).toFixed(1)}</td>
                            <td>{(stockDate.dev_volume / 1000000).toFixed(3)}</td>
                            <td>{stockDate.time.split("T")[0]}</td>
                            <td>{Number(stockDate.open_price).toFixed(2)}</td>
                            <td>{Number(stockDate.close_price).toFixed(2)}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    );
}
export default Peeking