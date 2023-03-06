import axios from 'axios';
import React, { useState, useContext } from 'react';
import config from '../../../Utils/Config';
import DatesFeature from '../../../page_layout/DatesFeature';
import { Button, Table } from 'react-bootstrap';
import { UserContext } from '../../../UserContext';
import { StockNameContext } from '../../../page_layout/StockNameContext';


interface SelfAnalyzeDetailsProps {
  stock: string;
  stockName: string;
}


const SelfAnalyzeDetails = (props: { stock: string }) => {
  const [user, setUser] = useContext(UserContext)
  const date = new Date().toISOString().split("T")[0];
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState(date)
  const [multiplier, setMultiplier] = useState(2.3263)
  const [selfAnalyzedStocks, setSelfAnalyzedStocks] = useState<any>()
  const stockNameContext = useContext(StockNameContext);
  const stockName = stockNameContext.stockName;

  const fromDateHandler = (date: string) => {
    setFromDate(date)
    console.log(date)
  }

  const toDateHandler = (date: string) => {
    setToDate(date)
    console.log(date)
  }

  const multiplierHandler = (multi: number) => {
    setMultiplier(multi)
    console.log(multi)
  }

  const sendSelfAnalyzeData = () => {

    if (!fromDate) {
      return alert("Please fill in your date")
    }

    if (multiplier < 1) {
      return alert("Multiplier must be greater than 1")
    }

    axios.get(config.analyzeQueryUrl + `?ticker=${props.stock}&from_date=${fromDate}&to_date=${toDate}&multi=${multiplier}`, { headers: { "Authorization": user } })
      .then((response) => {
        setSelfAnalyzedStocks(response?.data)
        })
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ margin: 0 }}>{props.stock}</h3>
                <h6 style={{ margin: 0, marginLeft: '15px' }}>{stockName}</h6>
            </div>
      <span className="stock-name-context">{stockName}</span>
      <h6>Function to find dates which has Volume above the Average by Multiplier. Rating = Vol/AvgVol</h6>
      {props.stock && <div><DatesFeature fromDateSetter={fromDateHandler} addMultiplierFilter={true}
        toDateSetter={toDateHandler} multiplierSetter={multiplierHandler} />
        <Button variant="secondary" onClick={() => { sendSelfAnalyzeData() }}>Submit</Button></div>}
      {selfAnalyzedStocks?.stockDays?.length > 0 && <Table bordered size="sm">;
        <tr>
          <th>Ticker Name</th>
          <th>Volume in M</th>
          <th>Average in M</th>
          <th>Rating</th>
          <th>Time</th>
          <th>Open Price</th>
          <th>Close Price</th>
        </tr>
        {selfAnalyzedStocks?.stockDays?.map((stockDate: any) => {
          return <tr className={stockDate.open_price > stockDate.close_price ? "loss-marker" : "profit-marker"}>
            <td>{stockDate.ticker}</td>
            <td>{(stockDate.volume / 1000000).toFixed(3)}</td>
            <td>{(selfAnalyzedStocks.averageVolume / 1000000).toFixed(3)}</td>
            <td>{(stockDate.volume / selfAnalyzedStocks.averageVolume).toFixed(1)}</td>
            <td>{stockDate.time.split("T")[0]}</td>
            <td>{Number(stockDate.open_price).toFixed(2)}</td>
            <td>{Number(stockDate.close_price).toFixed(2)}</td>
          </tr>
        })}
      </Table>}
    </div>
  )
}
export default SelfAnalyzeDetails