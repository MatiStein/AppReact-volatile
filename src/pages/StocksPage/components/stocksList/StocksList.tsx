import "./StocksList.css";

const StocksList = (props: {stocks:string[],stockChangeHandler:Function}) => {
    return (
        <div className="stocks-list-container">
            <h1>Stocks:</h1>
            <ol className="stocks-list">
                {props.stocks?.map((stockName:string) => {
                    return <button className="stock-ticker" onClick={() => {props.stockChangeHandler(stockName)}}>{stockName}</button>
                })}
            </ol>
        </div>
    )
}

export default StocksList