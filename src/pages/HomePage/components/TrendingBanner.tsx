import React from 'react'
import  TrandingTickers  from './TrendingTickers'

interface Props {
    CompanyName: string;
    Symbol: string;
    Trading: number;
    LastClose: number;
    ChangePercent: number;
    
}

    const TrendingBanner: React.FC<Props> = (
        { Symbol, CompanyName, Trading, LastClose, ChangePercent }) => {
            
        
        
        return (
            <div style={styles.container}>
                <div style={styles.symbol}>{Symbol}</div>
                <div style={styles.name}>{CompanyName}</div>
                <div style={styles.price}>{Trading}</div>
                <div style={styles.price}>{LastClose}</div>
                <div style={ChangePercent > 0 ? styles.changeUp : styles.changeDown}>
        {ChangePercent} ({ChangePercent})</div>
                    
                </div>
            
)};

    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 16,
            backgroundColor: '#f5f5f5',
            borderRadius: 4,
        },
        symbol: {
            fontWeight: 'bold',
            fontSize: 18,
            color: '#333',
        },
        name: {
            fontSize: 16,
            color: '#333',
        },
        price: {
            fontWeight: 'bold',
            fontSize: 20,
            color: '#333',
        },
        changeUp: {
            fontSize: 16,
            color: 'green',
        },
        changeDown: {
            fontSize: 16,
            color: 'red',
        },
    };
        
    export default TrendingBanner;