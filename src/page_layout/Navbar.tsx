import '../App.css';
import * as reactRouterRedux from 'react-router-redux'
import {Router, Route} from 'react-router'
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <div>
        <h1>Volatile Means Σίγμα</h1>
        <nav>
            <ul className="header-list">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/stocks">Stocks</NavLink>
                <NavLink to="/analyze">Analyze</NavLink>
                <NavLink to="/self_analyze">Self Analyze</NavLink>
                <NavLink to="/search">Search</NavLink>
            </ul>
            </nav>
            <nav>
            <ul className="header-auth">
                <NavLink to="/support">Support</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </ul>
        </nav>
        </div>
    );
}

export default Navbar
