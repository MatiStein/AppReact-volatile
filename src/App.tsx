import React from 'react';
import  Navbar  from './page_layout/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AnalyzePage from './pages/AnalyzePage/AnalyzePage';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import SelfAnalyzePage from './pages/SelfAnalyzePage/SelfAnalyzePage';
import StocksPage from './pages/StocksPage/Stockspage';


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
        <Route path='/self_analyze' element={<SelfAnalyzePage />}/>
        <Route path='/search' element={<SearchPage />}/>
      </Routes>

      </div>
    </div>
  );
}

export default App;
