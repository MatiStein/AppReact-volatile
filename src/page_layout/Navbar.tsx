import '../App.css';
import * as reactRouterRedux from 'react-router-redux'
import {Router, Route} from 'react-router'
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <div>
        <h1>NYSE Market</h1>
        <nav>
            <ul className="header-list">
                <NavLink to="/stocks">Stocks</NavLink>
                <NavLink to="/analyze">Analyze</NavLink>
            </ul>
        </nav>
        {/* <Router  >
            <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
                <Route path ="/homepage">HomePage</Route > |{" "}
                <Route path ="/stockspage">StocksPage</Route > |{" "}
                <Route path ="/analyzepage">AnalyzePage</Route > |{" "}
                <Route path ="/search">SearchPage</Route > |{" "}
            </nav>
            </Router> */}
        </div>
    );
}

export default Navbar
