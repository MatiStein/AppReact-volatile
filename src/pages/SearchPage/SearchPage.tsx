import { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function SearchPage() {
    const [ticker, setTicker] = useState('');
    const [date, setDate] = useState('');
    const [responseJson, setResponseJson] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await axios.get(`https://api.polygon.io/v2/reference/news?ticker=${ticker}&published_utc.gte=${date}&order=asc&limit=20&sort=published_utc&apiKey=nyd1QVoAqt4QVkHYYMqe_5kvFfN40G8D`);
        const data = response.data;
        setResponseJson(data);
    };

    interface SearchResult {
        title: string;
        link: string;
    }

    const handleGoogleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await axios.get(`https://www.googleapis.com/customsearch/v1?q=${searchTerm}&cx=30e630d2aaa14440e&key=AIzaSyAehJ15VcPRield-Zo452WuOpJk6zwbIk8`);
        const data = response.data;
        setSearchResults(data.items);
    }

    return (
        <div>
            <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px' }}>
                <h5>Media Search</h5>
                <form onSubmit={handleSubmit}>
                    <label>
                        Ticker: <input type="text" value={ticker} placeholder='TICKER' style={{ marginLeft: '10px' }}
                            onChange={e => setTicker(e.target.value)} />
                    </label>
                    <label style={{ marginLeft: '10px' }}>
                        Date: <input type="text" value={date} placeholder='YYYY-mm-dd' style={{ marginLeft: '10px' }}
                            onChange={e => setDate(e.target.value)} />
                    </label>
                    <Button type="submit" style={{ marginLeft: '10px' }} >Search</Button>
                </form>
                {responseJson && (
                    <code
                        style={{
                            display: 'block', whiteSpace: 'pre-wrap', overflowX: 'auto', color: 'black',
                            fontWeight: 'bold',
                        }}>
                        {JSON.stringify(responseJson, null, 2)}
                    </code>)}</div>

            <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px' }}>
                <h5>Google Search</h5>
                <form onSubmit={handleGoogleSearch} style={{ display: 'flex', alignItems: 'center' }}>
                    <label style={{ marginRight: '10px' }}>
                        <input type="text" value={searchTerm} style={{ width: '150%', marginLeft: '5px' }}
                            placeholder='TICKER stock at YYYY-mm-dd' onChange={e => setSearchTerm(e.target.value)} />
                    </label>
                    <Button type="submit" style={{ marginLeft: '100px' }}>Search</Button>
                </form>
                {searchResults.length > 0 && (
                    <ul>
                        {searchResults.map((result, index) => (
                            <li key={index}>
                                <a href={result.link}>{result.title}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}


export default SearchPage;