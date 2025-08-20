import React, { useState, useEffect } from 'react';
import logo from '../images/logo_colt.jpg';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowContent(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 1000);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${showContent ? 'fade-out' : ''}`}>
      <div className="loading-container">
        {/* Logo Animation */}
        <div className="logo-container">
          <img 
            src={logo} 
            alt="Coltigent Logo" 
            className="loading-logo"
          />
          <div className="logo-glow"></div>
        </div>
        
        {/* Company Name Animation */}
        <div className="company-name">
          <span className="letter">C</span>
          <span className="letter">O</span>
          <span className="letter">L</span>
          <span className="letter">T</span>
          <span className="letter">I</span>
          <span className="letter">G</span>
          <span className="letter">E</span>
          <span className="letter">N</span>
          <span className="letter">T</span>
        </div>
        
        {/* Tagline */}
        <p className="loading-tagline">Transforming Businesses Through Technology</p>
        
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <span className="progress-text">{Math.round(loadingProgress)}%</span>
        </div>
        
        {/* Loading Dots */}
        <div className="loading-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
