//src/components/Footer.jsx

import React from 'react';

const Footer =() => {
    return (
        <footer className = "bg-gray-800 text-purple-400 py-6 mt-12 ">
            <div className ="container mx-auto px-4 text-center flex justify-center items-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Made with React & Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;