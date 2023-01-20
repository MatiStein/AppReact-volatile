import React from 'react';
import  Navbar  from './page_layout/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StocksPage from './pages/StocksPage/StocksPage';
import AnalyzePage from './pages/AnalyzePage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';


function App() {
  return (
    <div>
    <div className="Navbar">
      <header className="App-header">
        <Navbar/>
      </header>
      <Routes>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/stocks' element={<StocksPage />}/>
        <Route path='/analyze' element={<AnalyzePage />}/>
        <Route path='/search' element={<SearchPage />}/>
      </Routes>

      </div>
    </div>
  );
}

export default App;
