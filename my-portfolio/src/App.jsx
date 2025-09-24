//src/App.jsx
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import MainPortfolio from './components/MainPortfolio.jsx';
import Footer from './components/Footer.jsx';
import './styles/global.css';

const App =() => {
   const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle('dark', newMode);
  };

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<MainPortfolio isDarkMode={isDarkMode} />} />
        <Route path="*" element ={<NotFound/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;