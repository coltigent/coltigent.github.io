import React, { useEffect, useState } from 'react';
import './MouseAnimation.css';

const MouseAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      createClickParticles(e.clientX, e.clientY);
      
      setTimeout(() => {
        setIsClicking(false);
      }, 150);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const createClickParticles = (x, y) => {
    const newParticles = [];
    for (let i = 0; i < 8; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        life: 1,
        decay: 0.02
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  };

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            life: particle.life - particle.decay
          }))
          .filter(particle => particle.life > 0)
      );
    };

    const interval = setInterval(animateParticles, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Mouse Trail */}
      <div 
        className={`mouse-trail ${isClicking ? 'clicking' : ''}`}
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10
        }}
      />
      
      {/* Click Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="click-particle"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.life,
            transform: `scale(${particle.life})`
          }}
        />
      ))}
      
      {/* Hover Effects */}
      <div className="hover-effects">
        <div className="hover-circle" />
        <div className="hover-circle" />
        <div className="hover-circle" />
      </div>
    </>
  );
};

export default MouseAnimation;
