import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import config from '../Utils/Config';

interface StockNameContextType {
    stockName: string;
}

export const StockNameContext = createContext<StockNameContextType>({
    stockName: '',
});

interface StockNameProviderProps {
    stock: string;
    setStockName: React.Dispatch<React.SetStateAction<string>>;
    children: React.ReactNode;
}


const StockNameProvider: React.FC<StockNameProviderProps> = ({ stock, children }) => {
    const [stockName, setStockName] = useState<string>('');

    useEffect(() => {
        const getStockName = async (stock: string) => {
            try {
                const response = await axios.get(config.get_name_from_ticker_url + "?ticker=" + stock);
                setStockName(response.data);
            } catch (error) {
                console.log("getStockName error:", error);
            }
        };

        if (stock !== "") {
            getStockName(stock);
        }
    }, [stock]);

    return (
        <StockNameContext.Provider value={{ stockName }}>
            {children}
        </StockNameContext.Provider>
    );
};

export const useStockName = () => useContext(StockNameContext);

export default StockNameProvider;
