import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DatesFeature from "../../../../page_layout/DatesFeature";
import config from "../../../../Utils/Config";
import "./StockDetails.css";
import { StockNameContext } from "../../../../page_layout/StockNameContext";
import { UserContext } from '../../../../UserContext';
import {
    Line, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, Bar, ComposedChart
} from "recharts";


interface StockDetailsProps {
    stock: string;
    stockName: string;
}

const StockDetails: React.FC<StockDetailsProps> = ({ stock }) => {
    const [user, setUser] = useContext(UserContext)
    const [stockDetails, setStockDetails] = useState([])
    const date = new Date().toISOString().split("T")[0];
    const [fromDate, setFromDate] = useState("2020-01-01")
    const [toDate, setToDate] = useState(date)
    const stockNameContext = useContext(StockNameContext);
    const [stockName, setStockName] = useState(stockNameContext.stockName);
    useEffect(() => {
        setStockName(stockNameContext.stockName);
    }, [stockNameContext.stockName]);

    const fromDateHandler = (date: string) => {
        setFromDate(date)
    }
    const toDateHandler = (date: string) => {
        setToDate(date)
    }

    const getStockDetails = async (stock: string) => {
        if (stock !== "") {
            await axios
                .get(config.stocksUrl + "?ticker=" + stock + "&from_date=" + fromDate + "&to_date=" + toDate, { headers: { "Authorization": user } })
                .then((response) => {
                    setStockDetails(response.data);
                });
        }
    };

    useEffect(() => {
        getStockDetails(stock)
    }, [stock, fromDate, toDate, user])

    if (stockDetails.length === 0) {
        return <div>Please choose a Stock for details</div>
    }

    const data = stockDetails.map((stockDate: any, index: number) => {
        return {
            time: stockDate.time.split("T")[0],
            openPrice: Number(stockDate.open_price).toFixed(2),
            closePrice: Number(stockDate.close_price).toFixed(2),
            volume: Number(stockDate.volume / 1000000).toFixed(3)
        };
    });
    const maxVolume = Math.max(...data.map((d) => Number(d.volume) * 1.1));
    const volumeDomain = [0, Math.ceil(maxVolume)];
    const maxClosePrice = Math.max(...data.map((d) => Number(d.closePrice) * 1.1));
    const closePriceDomain = [0, Math.ceil(maxClosePrice)];

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ margin: 0 }}>{stock}</h3>
                <h6 style={{ margin: 0, marginLeft: '15px' }}>{stockNameContext.stockName}</h6>
            </div>

            <DatesFeature multiplierSetter={null} fromDateSetter={fromDateHandler} toDateSetter={toDateHandler} addMultiplierFilter={false} />
            <ComposedChart
                width={1000}
                height={550}
                data={data}
                margin={{
                    top: 40,
                    right: 20,
                    left: 20,
                    bottom: 20
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="time" reversed={true} />
                <YAxis dataKey="closePrice" type="number"
                    yAxisId="0" domain={closePriceDomain} />
                <YAxis dataKey="volume" type="number"
                    yAxisId="1" orientation="left" domain={volumeDomain} />
                <Tooltip />
                <Legend />
                <Line yAxisId="0" strokeWidth={5} type="basis"
                    dataKey="closePrice" stroke="#008000" activeDot={{ r: 8 }} />
                <Line yAxisId="0" strokeWidth={3} type="linear"
                    dataKey="openPrice" stroke="#0000FF" />
                <Bar yAxisId="1" type="number" dataKey="volume"
                    barSize={20} fill="#413ea0" />
            </ComposedChart>
        </div>
    );
}


export default StockDetails