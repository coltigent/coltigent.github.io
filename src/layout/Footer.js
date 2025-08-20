import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_colt.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row py-5">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img 
                src={logo} 
                alt="Coltigent Logo" 
                width="50" 
                height="50" 
                className="me-3 rounded"
              />
              <div>
                <h5 className="fw-bold mb-1">Coltigent Technology Services</h5>
                <p className="small text-muted mb-0">Pvt Ltd</p>
              </div>
            </div>
            <p className="text-muted mb-3">
              Leading IT consulting, software development, and digital transformation solutions. 
              We specialize in web development, cloud computing, data engineering, and AI/ML integration.
            </p>
            <div className="d-flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none">
                  <i className="fas fa-home me-2"></i>Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-decoration-none">
                  <i className="fas fa-info-circle me-2"></i>About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-decoration-none">
                  <i className="fas fa-envelope me-2"></i>Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/career" className="text-decoration-none">
                  <i className="fas fa-briefcase me-2"></i>Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3">Our Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/services/web-development" className="text-decoration-none">
                  <i className="fas fa-code me-2"></i>Web Development
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services/cloud-services" className="text-decoration-none">
                  <i className="fas fa-cloud me-2"></i>Cloud Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services/data-engineering" className="text-decoration-none">
                  <i className="fas fa-database me-2"></i>Data Engineering
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services/custom-software" className="text-decoration-none">
                  <i className="fas fa-cogs me-2"></i>Custom Software
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services/media-services" className="text-decoration-none">
                  <i className="fas fa-video me-2"></i>Media Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services/it-consulting" className="text-decoration-none">
                  <i className="fas fa-users me-2"></i>IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3">Contact Info</h5>
            <div className="mb-3">
              <p className="mb-1">
                <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                <strong>Address:</strong>
              </p>
              <p className="small text-muted ms-4 mb-0">
                Office #818, 8th Floor,<br />
                Bramha SKY Uzuri (A Building),<br />
                Opp. PCMC Corporation Building,<br />
                Pimpri, Pune, Maharashtra - 411018
              </p>
            </div>
            <div className="mb-3">
              <p className="mb-1">
                <i className="fas fa-envelope me-2 text-primary"></i>
                <strong>Email:</strong>
              </p>
              <a href="mailto:info@coltigent.com" className="text-decoration-none ms-4">
                info@coltigent.com
              </a>
            </div>
            <div className="mb-3">
              <p className="mb-1">
                <i className="fas fa-phone me-2 text-primary"></i>
                <strong>Phone:</strong>
              </p>
              <a href="tel:+911234567890" className="text-decoration-none ms-4">
                +91 123 456 7890
              </a>
            </div>
            <div>
              <p className="mb-1">
                <i className="fas fa-clock me-2 text-primary"></i>
                <strong>Hours:</strong>
              </p>
              <p className="small text-muted ms-4 mb-0">
                Mon - Fri: 9:00 AM - 6:00 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top border-secondary pt-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0 text-muted">
                © {currentYear} Coltigent Technology Services Pvt Ltd. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Link to="/privacy" className="text-decoration-none text-muted small">
                    Privacy Policy
                  </Link>
                </li>
                <li className="list-inline-item">
                  <span className="text-muted">|</span>
                </li>
                <li className="list-inline-item">
                  <Link to="/terms" className="text-decoration-none text-muted small">
                    Terms of Service
                  </Link>
                </li>
                <li className="list-inline-item">
                  <span className="text-muted">|</span>
                </li>
                <li className="list-inline-item">
                  <Link to="/sitemap" className="text-decoration-none text-muted small">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



