import axios from 'axios'
import { useState } from 'react'
import config from '../../Utils/Config'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const AddStockPage = () => {
    const [stockTicker, setStockTicker] = useState("")
    const [result, setResult] = useState("Search For Stock")

    const addNewStock = () => {
        setResult("Loading.... getting new stock from server...")
        axios.get(config.get_data_url + "?ticker=" + stockTicker).then((response) => {
            console.log(response.data)
            setResult("Success," + response.data)
        }).catch((error) => setResult(error.response.status))
    }
    return (
        <Card style={{ width: '30rem', height: '15rem' }}>
            <Card.Body>
                <Card.Title>Get A New Stock</Card.Title>
                <Card.Text>
                    Put the 'Ticker in', in Capital Letters.
                </Card.Text>
                <input onChange={(e) => { setStockTicker(e.target.value) }} 
                type="text" placeholder="Add a Stock" />
                <Button onClick={addNewStock} variant="primary">Get Data</Button>
                <h5>{result}</h5>
            </Card.Body>
        </Card>
    );
}
export default AddStockPage 

