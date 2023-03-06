import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Pagination, Table } from 'react-bootstrap';
import { StockNameContext } from '../../../../page_layout/StockNameContext';
import { UserContext } from '../../../../UserContext';
import config from '../../../../Utils/Config';


interface AnalyzeDetailsProps {
    stock: string;
    stockName: string;
}


const AnalyzeDetails = (props: { stock: string }) => {
    const [user, setUser] = useContext(UserContext)
    const [IrregularStockDetails, setIrregularStockDetails] = useState([])
    const stockNameContext = useContext(StockNameContext);
    const stockName = stockNameContext.stockName;
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(15);
    console.log(props.stock);

    const getStockDetails = (stock: string) => {
        if (stock !== "") {
            axios.get(config.analyzeUrl + "?ticker=" + stock, { headers: { "Authorization": user } }).then((response) => {
                console.log(response.data);
                setIrregularStockDetails(response.data);

            })
        }
    }

    useEffect(() => {
        getStockDetails(props.stock)
    }, [props.stock])

    if (IrregularStockDetails.length === 0) {
        return <div>No Irregular Stock Details for this stock</div>;
    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = IrregularStockDetails.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(IrregularStockDetails.length / itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handleClick = (event: any) => {
        setCurrentPage(Number(event.target.id));
    }
    const renderPageNumbers = pageNumbers.map(number => (
        <Pagination.Item
            key={number.toString()}
            id={number.toString()}
            active={number === currentPage}
            onClick={handleClick}
        >
            {number}
        </Pagination.Item>
    ));

    return (

        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ margin: 0 }}>{props.stock}</h3>
                <h6 style={{ margin: 0, marginLeft: '15px' }}>{stockNameContext.stockName}</h6>
            </div>
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
                {currentItems.map((stockDate: any) => {
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
                <Pagination>
                    <Pagination.First onClick={() => setCurrentPage(1)} />
                    <Pagination.Prev onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)} />
                    {renderPageNumbers}
                    <Pagination.Next onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)} />
                    <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
                </Pagination>
            </Table>

        </div>

    )
}

export default AnalyzeDetails