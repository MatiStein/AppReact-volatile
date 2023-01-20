import React from 'react';
import  Navbar  from './page_layout/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StocksPage from './pages/StocksPage/Stockspage';
import AnalyzePage from './pages/AnalyzePage';

function App() {
  return (
    <div>
    <div className="Navbar">
      <header className="App-header">
        <Navbar/>
      </header>
      <Routes>
        <Route path='/stocks' element={<StocksPage />}/>
        <Route path='/analyze' element={<AnalyzePage />}/>
      </Routes>

      </div>
    </div>
  );
}

export default App;
