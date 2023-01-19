import './App.css';
import * as reactRouterRedux from 'react-router-redux'
import { Router, Route } from 'react-router'


function Navbar() {
    return (
        <div>
        <h1>NYSE Market</h1>
        <Router >
            <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
                <Route path ="/homepage">HomePage</Route > |{" "}
                <Route path ="/stockspage">StocksPage</Route > |{" "}
                <Route path ="/analyzepage">AnalyzePage</Route > |{" "}
                <Route path ="/search">SearchPage</Route > |{" "}
            </nav>
            </Router>
        </div>
    );
}

export default Navbar;
