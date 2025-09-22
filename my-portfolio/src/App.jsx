//src/App.jsx
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import MainPortfolio from './components/MainPortfolio.jsx';

const App =() => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<MainPortfolio/>} />
      </Routes></>
  );
};

export default App;