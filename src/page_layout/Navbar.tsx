import '../App.css';
import * as reactRouterRedux from 'react-router-redux'
import { Router, Route } from 'react-router'
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <h1>Volatile Means Σίγμα</h1>
            <nav>
                <ul className="header-list">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/stocks">Data</NavLink>
                    <NavLink to="/analyze">Analyzed</NavLink>
                    <NavLink to="/self_analyze">Test It</NavLink>
                    <NavLink to="/search">Search</NavLink>
                    <NavLink to="/find_stock">Get Stock</NavLink>
                </ul>
            </nav>
            <nav>
                <ul className="header-auth">
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/support">Support</NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar
