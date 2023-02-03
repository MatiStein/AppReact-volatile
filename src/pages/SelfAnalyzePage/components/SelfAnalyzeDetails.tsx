import axios from 'axios';
import React, { useState } from 'react'
import config from '../../../Utils/Config';
import DatesFeature from '../../../page_layout/DatesFeature';


const SelfAnalyzeDetails = (props: { stock: string }) => {
  const date = new Date().toISOString().split("T")[0];
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState(date)
  const [multiplier, setMultiplier] = useState(2.3263)
  const [selfAnalyzedStocks, setSelfAnalyzedStocks] = useState<any>()
  
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

    axios.get(config.analyzeQueryUrl + `?ticker=${props.stock}&from_date=${fromDate}&to_date=${toDate}&multi=${multiplier}`)
      .then((response) => {
        setSelfAnalyzedStocks(response?.data)
        console.log(response)
      })
  }
  
  return (
    <div>
      <h2>{props.stock}</h2>
      {props.stock && <div><DatesFeature fromDateSetter={fromDateHandler} addMultiplierFilter={true}
        toDateSetter={toDateHandler} multiplierSetter={multiplierHandler} />
        <button onClick={() => { sendSelfAnalyzeData() }}>Submit</button></div>}
        
      {selfAnalyzedStocks?.stockDays?.length > 0 && <table>
        <tr>
          <th>Ticker Name</th>
          <th>Volume</th>
          <th>Average</th>
          <th>Rating</th>
          <th>Time</th>
          <th>Open Price</th>
          <th>Close Price</th>
        </tr>
        {selfAnalyzedStocks?.stockDays?.map((stockDate: any) => {
          return <tr className={stockDate.open_price > stockDate.close_price ? "loss-marker" : "profit-marker"}>
            <td>{stockDate.ticker}</td>
            <td>{stockDate.volume}</td>
            <td>{selfAnalyzedStocks.averageVolume}</td>
            <td>{(stockDate.volume / selfAnalyzedStocks.averageVolume).toFixed(1)}</td>
            <td>{stockDate.time}</td>
            <td>{stockDate.open_price}</td>
            <td>{stockDate.close_price}</td>
          </tr>
        })}

      </table>}


    </div>
  )
}

export default SelfAnalyzeDetails