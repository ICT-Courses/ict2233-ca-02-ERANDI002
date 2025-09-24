// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle.jsx';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">ERANDI WICKRAMAARACHCHI</Link>
      </div>

      <button className={styles['menu-toggle']} onClick={handleMenuToggle}>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li><Link to="/" className="flex transform transition duration-300 hover:scale-105">Home</Link></li>
        <li><Link to="/about" className="flex transform transition duration-300 hover:scale-105">About</Link></li>
        <li><Link to="/skills" className="flex transform transition duration-300 hover:scale-105">Skills</Link></li>
        <li><Link to="/projects" className="flex transform transition duration-300 hover:scale-105">Projects</Link></li>
        <li><Link to="/contact" className="flex transform transition duration-300 hover:scale-105">Contact</Link></li>
        <li>
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;