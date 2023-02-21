import React, { useState } from 'react';
import axios from 'axios';


function CompanyInfo() {
    const [symbol, setSymbol] = useState('');
    const [companyName, setCompanyName] = useState('');
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSymbol(event.target.value);
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const url = `http://d.yimg.com/autoc.finance.yahoo.com/autoc?query=${symbol}&region=1&lang=en`;
        try {
            const response = await axios.get(url);
            const result = response.data;

            for (let x of result.ResultSet.Result) {
                if (x.symbol === symbol) {
                    setCompanyName(x.name);
                    break;
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Symbol:
                    <input type="text" value={symbol} onChange={handleInputChange} />
                </label>
                <button type="submit">Get Company Name</button>
            </form>
            {companyName && <p>Company name: {companyName}</p>}
        </div>
    );
}

export default CompanyInfo;
