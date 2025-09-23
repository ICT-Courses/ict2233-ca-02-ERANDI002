/ src/components/DarkModeToggle/DarkModeToggle.jsx
import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    );
   
     useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
    }, [isDarkMode]);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            onClick={handleToggle}
            className="p-2 rounded-full transition-colors duration-300"
        >
            {isDarkMode ? (
                <span role="img" aria-label="sun" className="text-yellow-400 text-2xl">
                    ☀️
                </span>
            ) : (
                <span role="img" aria-label="moon" className="text-gray-600 text-2xl">
                    🌙
                </span>
            )}
        </button>
    );
};

export default DarkModeToggle;