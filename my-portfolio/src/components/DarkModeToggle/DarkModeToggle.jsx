// src/components/DarkModeToggle.jsx

import React from 'react';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <button
            onClick={toggleDarkMode}
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