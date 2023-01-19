class Config {
    public supportEmail = 'matistein@gmail.com';
    public stocksUrl = 'http://127.0.0.1:8000/api/v1/stocks/';
    public analyzeUrl = 'http://127.0.0.1:8000/api/v1/analyzed/';
    public analyzeQueryUrl = 'http://127.0.0.1:8000/api/v1/analyze_query/';
    public get_data_url = 'http://127.0.0.1:8000/api/v1/get_data/';
    public stock_list_url = 'http://127.0.0.1:8000/api/v1/ticker_list';
    public user_ticker_url = 'http://127.0.0.1:8000/api/v1/user_ticker';
    public registerUrl = 'http://127.0.0.1:8000:/api/v1/register/';
    public loginUrl = 'http://127.0.0.1:8000/api/v1\token';
    public refreshUrl = 'http://127.0.0.1:8000/api/v1/token/refresh';
    public userUrl = 'http://127.0.0.1:8000/api/v1/user/';

}
const config = new Config();
export default config;