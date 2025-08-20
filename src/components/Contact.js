import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import officeImage from '../images/coltigent_office.jpg';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mdkdrkqn', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Thank you for your message! We will get back to you soon.');
        form.reset();
      } else {
        const result = await response.json();
        if (result.errors) {
          setStatus(result.errors.map(error => error.message).join(', '));
        } else {
          setStatus('Oops! There was a problem submitting your form. Please try again.');
        }
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Coltigent Technology Services</title>
        <meta name="description" content="Get in touch with Coltigent Technology Services. We're here to help with your IT consulting, software development, and digital transformation needs." />
      </Helmet>

      <div className="container py-5 mt-5">
        {/* Hero Section */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="text-primary fw-bold mb-3">Contact Us</h1>
          <p className="lead text-muted">
            Have a question or need help? We'd love to hear from you!
          </p>
        </div>

        {/* Location and Contact Info */}
        <div className="row align-items-center justify-content-center mb-5" data-aos="fade-up">
          {/* Office Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="overflow-hidden rounded shadow-sm" style={{ height: '100%', maxHeight: '600px' }}>
              <img
                src={officeImage}
                alt="Coltigent Office"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          {/* Location Card */}
          <div className="col-md-5 d-flex align-items-center" style={{ height: '600px' }}>
            <div className="card shadow w-100 h-100" style={{ backgroundColor: '#ffffff', border: 'none' }}>
              <div className="card-body text-center d-flex flex-column justify-content-center h-100">
                <h5 className="card-title fw-bold text-primary mb-4">📍 Our Location</h5>
                <div className="mb-4">
                  <h6 className="fw-bold">Coltigent Technology Services PVT LTD</h6>
                  <p className="text-muted mb-2">
                    Office #818, 8th Floor, Bramha SKY Uzuri (A Building)<br />
                    Opp. PCMC Corporation Building, Pimpri,<br />
                    Pune, Maharashtra - 411018, India
                  </p>
                </div>
                
                <div className="mt-auto">
                  <h6 className="fw-bold text-primary mb-3">📞 Contact Information</h6>
                  <div className="row text-start">
                    <div className="col-12 mb-2">
                      <strong>Email:</strong> info@coltigent.com
                    </div>
                    <div className="col-12 mb-2">
                      <strong>Phone:</strong> +91 123 456 7890
                    </div>
                    <div className="col-12">
                      <strong>Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow">
              <div className="card-body p-4">
                <h4 className="text-center text-primary mb-4">Send us a Message</h4>
                
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label fw-semibold">
                        Your Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Your Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label fw-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-semibold">
                      Subject <span className="text-danger">*</span>
                    </label>
                    <select name="subject" className="form-select" id="subject" required>
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Cloud Services">Cloud Services</option>
                      <option value="IT Consulting">IT Consulting</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="Data Engineering">Data Engineering</option>
                      <option value="Media Services">Media Services</option>
                      <option value="Career Opportunities">Career Opportunities</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Tell us about your project or inquiry..."
                      required
                    ></textarea>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>

                {status && (
                  <div className={`alert mt-3 ${status.includes('Thank you') ? 'alert-success' : 'alert-danger'}`}>
                    {status}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="row mt-5" data-aos="fade-up">
          <div className="col-12">
            <h3 className="text-center text-primary mb-4">Other Ways to Connect</h3>
          </div>
          
          <div className="col-md-4 text-center mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="service-icon mx-auto mb-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <h5>Email Us</h5>
                <p className="text-muted">info@coltigent.com</p>
                <p className="small text-muted">We typically respond within 24 hours</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 text-center mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="service-icon mx-auto mb-3">
                  <i className="fas fa-phone"></i>
                </div>
                <h5>Call Us</h5>
                <p className="text-muted">+91 123 456 7890</p>
                <p className="small text-muted">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 text-center mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="service-icon mx-auto mb-3">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h5>Visit Us</h5>
                <p className="text-muted">Pune, Maharashtra</p>
                <p className="small text-muted">Schedule a meeting at our office</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
