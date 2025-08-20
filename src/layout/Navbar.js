
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo_colt.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition ${isScrolled ? 'bg-primary shadow' : 'bg-primary'}`}>
      <div className="container">
        {/* Logo + Brand */}
        <Link className="navbar-brand d-flex align-items-center text-white text-decoration-none" to="/">
          <img
            src={logo}
            alt="Coltigent Logo"
            width="50"
            height="50"
            className="d-inline-block align-top rounded"
          />
          <span className="fw-bold ms-3 d-none d-md-inline">
            Coltigent Technology Services
          </span>
          <span className="fw-bold ms-3 d-md-none">
            Coltigent
          </span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-controls="navbarContent"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${isMobileMenuOpen ? 'bg-white' : 'bg-white'}`}></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className={`nav-link text-white ${isActive('/') ? 'active fw-bold' : ''}`} 
                to="/"
                onClick={closeMobileMenu}
              >
                <i className="fas fa-home me-1 d-md-none"></i>
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#services"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-cogs me-1 d-md-none"></i>
                Services
              </a>
              <ul className="dropdown-menu shadow-lg border-0" aria-labelledby="servicesDropdown">
                <li>
                  <Link className="dropdown-item" to="/services/web-development" onClick={closeMobileMenu}>
                    <i className="fas fa-code me-2 text-primary"></i>
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/cloud-services" onClick={closeMobileMenu}>
                    <i className="fas fa-cloud me-2 text-primary"></i>
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/data-engineering" onClick={closeMobileMenu}>
                    <i className="fas fa-database me-2 text-primary"></i>
                    Data Engineering
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/custom-software" onClick={closeMobileMenu}>
                    <i className="fas fa-cogs me-2 text-primary"></i>
                    Custom Software
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/media-services" onClick={closeMobileMenu}>
                    <i className="fas fa-video me-2 text-primary"></i>
                    Media Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/it-consulting" onClick={closeMobileMenu}>
                    <i className="fas fa-users me-2 text-primary"></i>
                    IT Consulting
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item fw-bold" to="/services/web-development" onClick={closeMobileMenu}>
                    <i className="fas fa-arrow-right me-2 text-primary"></i>
                    View All Services
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link 
                className={`nav-link text-white ${isActive('/about') ? 'active fw-bold' : ''}`} 
                to="/about"
                onClick={closeMobileMenu}
              >
                <i className="fas fa-info-circle me-1 d-md-none"></i>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className={`nav-link text-white ${isActive('/contact') ? 'active fw-bold' : ''}`} 
                to="/contact"
                onClick={closeMobileMenu}
              >
                <i className="fas fa-envelope me-1 d-md-none"></i>
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className={`nav-link text-white ${isActive('/career') ? 'active fw-bold' : ''}`} 
                to="/career"
                onClick={closeMobileMenu}
              >
                <i className="fas fa-briefcase me-1 d-md-none"></i>
                Careers
              </Link>
            </li>

            {/* CTA Button */}
            <li className="nav-item ms-lg-2">
              <Link 
                className="btn btn-light btn-sm fw-bold" 
                to="/contact"
                onClick={closeMobileMenu}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


