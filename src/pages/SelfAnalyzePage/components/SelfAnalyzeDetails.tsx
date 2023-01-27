import axios from 'axios';
import React, { useState } from 'react'
import config from '../../../Utils/Config';

const SelfAnalyzeDetails = (props:{stock:string}) => {
    let yourDate = new Date();
    const date = yourDate.toISOString().split('T')[0];
    const [fromDate,setFromDate] = useState("")
    const [toDate,setToDate] = useState("")
    const [multiplier,setMultiplier] = useState(2.3263)

    const sendSelfAnalyzeData = () => {
        console.log(fromDate)
        console.log(toDate)
        console.log(multiplier)
        console.log(props.stock)

        axios.get(config.analyzeQueryUrl + `?ticker=${props.stock}&from_date=${fromDate}&to_date=${toDate}&multi=${multiplier}`)
        .then((response) => {
            console.log(response)
        })
        }
  return (
    <div>
        <h1>{props.stock}</h1>
        <label htmlFor='from_date'>From Date</label>
        <input onChange={(e) => setFromDate(e.target.value)} type="date" id='from_date' name='from_date' />
        <label htmlFor='to_date'>To Date</label>
        <input placeholder='dd-mm-yyyy' onChange={(e) => setToDate(e.target.value)} type="date" id='to_date' name='to_date' defaultValue={date} />
        <label htmlFor='multiplier'>Multiplier</label>
        <input onChange={(e) => setMultiplier(Number(e.target.value))} type="number" step="any" id='multiplier' name='multiplier' defaultValue={multiplier} />
        <button onClick={() => sendSelfAnalyzeData()} >Submit</button>
    </div>
  )
}

export default SelfAnalyzeDetails