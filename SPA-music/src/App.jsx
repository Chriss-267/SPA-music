// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TopSongs from './components/TopSongs';
import SearchSongs from './components/SearchSongs';
import Login from './components/Login';
import styles from "./styles/SearchSongs.module.css"

function App() {

  
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<TopSongs />} />
        <Route path="/search" element={<SearchSongs />} />
        <Route path="/contact" element={<Login />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
