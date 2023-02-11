import { SyntheticEvent, useContext, useEffect, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import  {UserContext} from '../UserContext'

interface Props {
    User: string 
    setUser: (user: string) => void 
}

const Header = () => {
    const [user,setUser] = useContext(UserContext)
    const navigate = useNavigate()
    const logoutHandler = (e: SyntheticEvent) =>{
        e.preventDefault()
        localStorage.removeItem("Authorization")
        setUser(null)
        navigate("/login")
        window.location.reload();
        }


    return (
        <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
            <Container>
        <Navbar.Brand>Volatile Means Σίγμα</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="basic">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/stocks">Data</Nav.Link>
            <Nav.Link href="/analyze">Analyzed</Nav.Link>
            <Nav.Link href="/self_analyze">Test It</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/find_stock">Get Stock</Nav.Link>
            </Nav>
            {user ? (
                <Nav className="ms-auto">
                <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
                <Nav.Link href="/support">Support</Nav.Link>
            </Nav>
                ) : (
                    <Nav className="ms-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/support">Support</Nav.Link>
                </Nav>
            )}    
            
            
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header