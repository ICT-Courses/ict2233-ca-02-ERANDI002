//src/components/Navbar/Navbar.jsx
import React from 'react';
import{Link} from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle.jsx';
import styles from './Navbar/.module.css';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 flex justify-between items-center text-white">
           <div className="text-xl font-bold">
            <Link to = "/"className="hover:text-teal-400
            transition-colors duration-300">
              Erandi Wickramaarachchi  
            </Link>
            </div> 
            <ul className ="flex space-x-6">
              <li>
          <a href="#home" className="hover:text-teal-400 transition-colors duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-teal-400 transition-colors duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-teal-400 transition-colors duration-300">
            Skills
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-teal-400 transition-colors duration-300">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-teal-400 transition-colors duration-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-teal-400 transition-colors duration-300">
            Contact
          </a>
        </li>
      </ul>
      
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar; 
