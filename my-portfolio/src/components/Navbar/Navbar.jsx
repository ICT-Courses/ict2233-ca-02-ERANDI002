// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

// Now accepts isDarkMode and toggleDarkMode as props
const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  // State for the mobile menu's visibility remains here
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">ERANDI WICKRAMAARACHCHI</Link>
      </div>

      {/* Hamburger menu toggle button */}
      <button className={styles['menu-toggle']} onClick={handleMenuToggle}>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Navigation links */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* The toggle now uses the prop function */}
      <div onClick={toggleDarkMode} className={styles['dark-mode-toggle']}>
        {isDarkMode ? '🌙' : '☀️'}
      </div>
    </nav>
  );
};

export default Navbar;