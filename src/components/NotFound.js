import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Coltigent Technology Services</title>
        <meta name="description" content="The page you're looking for doesn't exist. Navigate back to our homepage or explore our services." />
      </Helmet>

      <div className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center">
            <div className="card border-0 shadow-sm">
              <div className="card-body py-5">
                {/* 404 Icon */}
                <div className="mb-4">
                  <div className="service-icon mx-auto" style={{ width: '120px', height: '120px', fontSize: '3rem' }}>
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                </div>

                {/* Error Message */}
                <h1 className="display-1 text-primary fw-bold mb-3">404</h1>
                <h2 className="h3 text-dark mb-3">Page Not Found</h2>
                <p className="text-muted mb-4">
                  Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
                </p>

                {/* Navigation Options */}
                <div className="row mb-4">
                  <div className="col-md-6 mb-3">
                    <Link to="/" className="btn btn-primary w-100">
                      <i className="fas fa-home me-2"></i>
                      Go to Homepage
                    </Link>
                  </div>
                  <div className="col-md-6 mb-3">
                    <Link to="/contact" className="btn btn-outline-primary w-100">
                      <i className="fas fa-envelope me-2"></i>
                      Contact Us
                    </Link>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="border-top pt-4">
                  <h5 className="text-primary mb-3">Quick Links</h5>
                  <div className="row">
                    <div className="col-6 col-md-3 mb-2">
                      <Link to="/about" className="text-decoration-none text-muted">
                        <i className="fas fa-info-circle me-1"></i>
                        About Us
                      </Link>
                    </div>
                    <div className="col-6 col-md-3 mb-2">
                      <Link to="/services/web-development" className="text-decoration-none text-muted">
                        <i className="fas fa-code me-1"></i>
                        Web Development
                      </Link>
                    </div>
                    <div className="col-6 col-md-3 mb-2">
                      <Link to="/services/cloud-services" className="text-decoration-none text-muted">
                        <i className="fas fa-cloud me-1"></i>
                        Cloud Services
                      </Link>
                    </div>
                    <div className="col-6 col-md-3 mb-2">
                      <Link to="/career" className="text-decoration-none text-muted">
                        <i className="fas fa-briefcase me-1"></i>
                        Careers
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Search Suggestion */}
                <div className="mt-4 p-3 bg-light rounded">
                  <h6 className="text-primary mb-2">Can't find what you're looking for?</h6>
                  <p className="small text-muted mb-0">
                    Try searching our website or contact our team for assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
