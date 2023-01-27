import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers',
    params: {region: 'US'},
    headers: {
    'X-RapidAPI-Key': '5eaedbb38bmsh367e02e2054b38fp1be9c2jsnb099746cda7f',
    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});



// const news_search = {
//     method: 'GET',
// f"https://api.polygon.io/v2/reference/news?ticker={ticker}&published_utc={$YYYY-mm-dd}&order=asc&limit=20&sort=published_utc&apiKey=nyd1QVoAqt4QVkHYYMqe_5kvFfN40G8D"