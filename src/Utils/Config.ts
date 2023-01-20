class Config {
    public supportEmail = 'matistein@gmail.com';
    public baseUrl = "http://127.0.0.1:8000/api/v1/";
    public stocksUrl = this.baseUrl +'stocks/';
    public analyzeUrl = this.baseUrl + 'analyzed/';
    public analyzeQueryUrl = this.baseUrl + 'analyze_query/';
    public get_data_url = this.baseUrl + 'get_data/';
    public stock_list_url = this.baseUrl + 'ticker_list';
    public user_ticker_url = this.baseUrl + 'user_ticker';
    public registerUrl = this.baseUrl + 'register/';
    public loginUrl = this.baseUrl + 'token';
    public refreshUrl = this.baseUrl + 'token/refresh';
    public userUrl = this.baseUrl + 'user/';

}
const config = new Config();
export default config;