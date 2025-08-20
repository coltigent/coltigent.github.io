import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import webDevImage from '../../images/web_dev.jpg';

const WebDevelopment = () => {
  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Frontend Development',
      description: 'Modern, responsive user interfaces built with React, Vue.js, and Angular.',
      features: ['Responsive Design', 'Progressive Web Apps', 'Single Page Applications', 'Cross-browser Compatibility']
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Development',
      description: 'Robust server-side applications and APIs using Node.js, Python, and Java.',
      features: ['RESTful APIs', 'Microservices Architecture', 'Database Design', 'Authentication & Authorization']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile-First Design',
      description: 'Mobile-optimized websites that provide excellent user experience on all devices.',
      features: ['Mobile Optimization', 'Touch-friendly Interfaces', 'Fast Loading Times', 'Offline Capabilities']
    },
    {
      icon: 'fas fa-search',
      title: 'SEO Optimization',
      description: 'Search engine optimized websites that rank higher and attract more visitors.',
      features: ['Technical SEO', 'Content Optimization', 'Performance Optimization', 'Analytics Integration']
    }
  ];

  const technologies = [
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952B3' },
    { name: 'MongoDB', icon: 'fas fa-database', color: '#47A248' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, target audience, and business goals to create a comprehensive development plan.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create wireframes and prototypes to visualize the user experience and interface design.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our developers build your website using modern technologies and best practices for optimal performance.'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your website works flawlessly across all devices and browsers.'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'We deploy your website to production and ensure everything is running smoothly.'
    },
    {
      step: '06',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and support to keep your website secure and up-to-date.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Web Development Services - Coltigent Technology Services</title>
        <meta name="description" content="Professional web development services including frontend, backend, mobile-first design, and SEO optimization. Custom web applications built with modern technologies." />
      </Helmet>

      <div className="container py-5 mt-5">
        {/* Hero Section */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-lg-6">
            <h1 className="text-primary fw-bold mb-4">Web Development Services</h1>
            <p className="lead text-muted mb-4">
              We create modern, scalable, and high-performance web applications that drive business growth and enhance user experience.
            </p>
            <p className="text-muted mb-4">
              From simple websites to complex web applications, our expert team delivers solutions that are not only visually appealing but also technically robust and user-friendly.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start Your Project
            </Link>
          </div>
          <div className="col-lg-6">
            <img
              src={webDevImage}
              alt="Web Development"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>

        {/* Services Overview */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12">
            <h2 className="text-center text-primary mb-5">Our Web Development Services</h2>
          </div>
          
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-card h-100">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h5 className="fw-bold mb-3">{service.title}</h5>
                <p className="text-muted mb-3">{service.description}</p>
                <ul className="list-unstyled">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12">
            <h2 className="text-center text-primary mb-5">Technologies We Use</h2>
          </div>
          
          {technologies.map((tech, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="text-center">
                <div className="service-icon mx-auto mb-3" style={{ backgroundColor: tech.color }}>
                  <i className={tech.icon}></i>
                </div>
                <h6 className="fw-bold">{tech.name}</h6>
              </div>
            </div>
          ))}
        </div>

        {/* Development Process */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12">
            <h2 className="text-center text-primary mb-5">Our Development Process</h2>
          </div>
          
          {process.map((step, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <div className="service-icon mx-auto mb-3" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                    {step.step}
                  </div>
                  <h5 className="fw-bold mb-3">{step.title}</h5>
                  <p className="text-muted">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12">
            <h2 className="text-center text-primary mb-5">Why Choose Our Web Development Services?</h2>
          </div>
          
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  <i className="fas fa-rocket me-2"></i>
                  Modern Technologies
                </h5>
                <p className="card-text">
                  We use the latest web technologies and frameworks to ensure your website is fast, secure, and future-proof.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4" data-aos="fade-left">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  <i className="fas fa-users me-2"></i>
                  Expert Team
                </h5>
                <p className="card-text">
                  Our experienced developers and designers work together to create exceptional web solutions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  <i className="fas fa-mobile-alt me-2"></i>
                  Responsive Design
                </h5>
                <p className="card-text">
                  All our websites are mobile-friendly and provide excellent user experience across all devices.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4" data-aos="fade-left">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  <i className="fas fa-headset me-2"></i>
                  Ongoing Support
                </h5>
                <p className="card-text">
                  We provide continuous support and maintenance to keep your website running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center" data-aos="fade-up">
          <div className="card border-0 shadow-sm bg-gradient-primary text-white">
            <div className="card-body py-5">
              <h3 className="mb-3">Ready to Build Your Website?</h3>
              <p className="mb-4">
                Let's discuss your project requirements and create a custom web solution that drives results.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/contact" className="btn btn-light btn-lg">
                  Get Free Quote
                </Link>
                <Link to="/services/cloud-services" className="btn btn-outline-light btn-lg">
                  View Other Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;
