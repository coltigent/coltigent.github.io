import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  useEffect(() => {
    // Check for saved theme preference or default to dark theme
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
      setIsDark(false);
      document.body.classList.remove('dark-theme');
    } else {
      setIsDark(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      className={`theme-toggle-ultimate ${isDark ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className="theme-toggle-container">
        <div className="theme-icon-container">
          {isDark ? (
            <div className="theme-moon-icon">
              <div className="moon-crescent"></div>
            </div>
          ) : (
            <div className="theme-sun-icon">
              <div className="sun-center"></div>
              <div className="sun-rays">
                <div className="ray ray-1"></div>
                <div className="ray ray-2"></div>
                <div className="ray ray-3"></div>
                <div className="ray ray-4"></div>
                <div className="ray ray-5"></div>
                <div className="ray ray-6"></div>
                <div className="ray ray-7"></div>
                <div className="ray ray-8"></div>
              </div>
            </div>
          )}
        </div>
        <div className="theme-ripple-effect"></div>
        <div className="theme-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
