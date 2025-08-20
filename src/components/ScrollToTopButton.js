import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Calculate scroll progress
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div className="scroll-to-top-container">
          <div className="scroll-progress-ring">
            <svg className="progress-ring" width="60" height="60">
              <circle
                className="progress-ring-circle-bg"
                stroke="rgba(13, 110, 253, 0.1)"
                strokeWidth="3"
                fill="transparent"
                r="26"
                cx="30"
                cy="30"
              />
              <circle
                className="progress-ring-circle"
                stroke="var(--primary-color)"
                strokeWidth="3"
                fill="transparent"
                r="26"
                cx="30"
                cy="30"
                style={{
                  strokeDasharray: `${2 * Math.PI * 26}`,
                  strokeDashoffset: `${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`,
                  filter: `drop-shadow(0 0 ${Math.max(2, scrollProgress / 10)}px rgba(13, 110, 253, 0.6))`
                }}
              />
            </svg>
            <button
              onClick={scrollToTop}
              className="scroll-to-top-btn"
              aria-label="Scroll to top"
              title={`Scroll to top (${Math.round(scrollProgress)}% scrolled)`}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
          {/* Progress percentage indicator */}
          <div className="scroll-progress-text">
            {Math.round(scrollProgress)}%
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
