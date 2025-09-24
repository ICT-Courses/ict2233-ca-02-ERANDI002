//src/pages/NotFound.jsx
import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
         <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
         <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-purple-300 pt-24 "> 404 - Page Not Found </h1> 

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
        The page you are looking for does not exist.</p>


         <Link
         to="/"
         className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-200 transition duration-300"
      >
        Go back to the Home page
        </Link>

        </div>
    );
};

export default NotFound;
