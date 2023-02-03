import axios from 'axios'
import React, { useState } from 'react'
import config from '../../Utils/Config'


const AddStockPage = () => {
    const [stockTicker, setStockTicker] = useState("")
    const [result, setResult] = useState("Search For Stock")

    const addNewStock = () => {
        setResult("Loading.... getting new stock from server...")
        axios.get(config.get_data_url + "?ticker=" + stockTicker).then((response) => {
            console.log(response.data)
            setResult("Success," + response.data)
        }).catch((error) => setResult(error.response.data))
    }
    return (
        <div>
            <h2>Add Stock Page</h2>
            <input onChange={(e) => {setStockTicker(e.target.value)}} type="text" placeholder="Add new stock" />
            <button onClick={addNewStock}>Submit</button>
            <h3>{result}</h3>
        </div>
    )
}

export default AddStockPage