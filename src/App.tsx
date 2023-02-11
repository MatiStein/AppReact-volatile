import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './page_layout/Header';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnalyzePage from './pages/AnalyzePage/AnalyzePage';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import SelfAnalyzePage from './pages/SelfAnalyzePage/SelfAnalyzePage';
import AddStockPage from './pages/AddStockPage/AddStockPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import StocksPage from './pages/StocksPage/Stockspage';
import axios from 'axios';
import Config from './Utils/Config';
import SendEmail from './pages/SupportPage/SendEmail';
import {UserContext} from "./UserContext";

function App() {
  const [user, setUser] = useState<any>("")
  useEffect(() => {
      setUser(localStorage.getItem("Authorization"))
    }, [user]);

  return (
    <UserContext.Provider value={[user,setUser]}>
    <div>
      <main>
      <Container>
      <Router>
      <Header />

        <Routes>
        <Route path='/home' element={<HomePage User={'user'} />} />
        <Route path='/stocks' element={<StocksPage/>} />
        <Route path='/analyze' element={<AnalyzePage/>} />
        <Route path='/self_analyze' element={<SelfAnalyzePage/>} />
        <Route path='/search' element={<SearchPage/>} />
        <Route path="/find_stock" element={<AddStockPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/support" element={<SendEmail />} />
        </Routes>
        </Router>
      </Container>
    </main>
</div>
</UserContext.Provider>
  );
};

export default App;
