import axios from 'axios'
import { useContext, useState } from 'react'
import config from '../../Utils/Config'
import { Button, Card } from 'react-bootstrap';
import { UserContext } from '../../UserContext';


const AddStockPage = () => {
    const [user, setUser] = useContext(UserContext)
    const [stockTicker, setStockTicker] = useState("")
    const [result, setResult] = useState("Search For Stock")

    const addNewStock = () => {
        setResult("Loading.... getting new stock from server...")
        axios.get(config.get_data_url + "?ticker=" + stockTicker, { headers: { "Authorization": user } }).then((response) => {
            console.log(response.data)
            setResult("Success," + response.data)
        }).catch((error) => setResult(error.response.status))
    }
    return (
        <Card style={{ width: '30rem', height: '15rem' }}>
            <Card.Body>
                <Card.Title>Get A New Stock</Card.Title>
                <Card.Text>
                    Put the 'Ticker', in Uppercase Characters. <br></br>
                    It takes time to Download,
                    and even more to process... Bear with me.
                </Card.Text>
                <input onChange={(e) => { setStockTicker(e.target.value) }}
                    type="text" placeholder="Add a 'TICKER'" />
                <Button onClick={addNewStock} variant="secondary">Get Data</Button>
                <h5>{result}</h5>
            </Card.Body>
        </Card>
    );
}
export default AddStockPage

