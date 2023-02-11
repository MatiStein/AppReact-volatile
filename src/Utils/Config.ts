class Config {
    public supportEmail = 'matistein@gmail.com';
    public baseUrl = "http://127.0.0.1:8000/api/v1/";
    public adminUrl = this.baseUrl + 'admin/'
    public stocksUrl = this.baseUrl + 'stocks/';
    public analyzeUrl = this.baseUrl + 'analyzed/';
    public analyzeQueryUrl = this.baseUrl + 'analyze_query/';
    public get_data_url = this.baseUrl + 'get_data/';
    public stock_list_url = this.baseUrl + 'ticker_list';
    public user_ticker_url = this.baseUrl + 'user_ticker';
    public registerUrl = this.baseUrl + 'register';
    public loginUrl = this.baseUrl + 'token';
    public refreshUrl = this.baseUrl + 'token/refresh';
    public userUrl = this.baseUrl + 'user/';
    public TradingNewsUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers';
    public NewsFeedUrl = 'https://api.polygon.io/v2/reference/news?ticker={ticker}&published_utc={$YYYY-mm-dd}&order=asc&limit=20&sort=published_utc&apiKey=nyd1QVoAqt4QVkHYYMqe_5kvFfN40G8D';
    public IndexURL = 'http://127.0.0.1:3000'
}

const config = new Config();
export default config;