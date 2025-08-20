import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import homeImage from '../images/homeimage2.jpg';
import serviceImage from '../images/service.jpg';
import Homenew from './Homenew';

const Home = () => {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Custom web applications and websites built with modern technologies.',
      link: '/services/web-development'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Services',
      description: 'Scalable cloud solutions and data migration services.',
      link: '/services/cloud-services'
    },
    {
      icon: 'fas fa-database',
      title: 'Data Engineering',
      description: 'Big data processing and analytics solutions.',
      link: '/services/data-engineering'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Custom Software',
      description: 'Tailored software solutions and automation.',
      link: '/services/custom-software'
    },
    {
      icon: 'fas fa-video',
      title: 'Media Services',
      description: 'AI/ML-powered media processing and content creation.',
      link: '/services/media-services'
    },
    {
      icon: 'fas fa-users',
      title: 'IT Consulting',
      description: 'Strategic IT consulting and training services.',
      link: '/services/it-consulting'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Coltigent Technology Services - IT Consulting & Software Solutions</title>
        <meta name="description" content="Leading IT consulting, software development, and digital transformation solutions. Specializing in web development, cloud computing, data engineering, and AI/ML integration." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="hero-content">
                <h1 className="animated-header text-white mb-4">
                  COLT + INTELLIGENT = COLTIGENT
                </h1>
                <h2 className="display-4 fw-bold text-white mb-4">
                  Transforming Businesses Through Technology
                </h2>
                <p className="lead text-white-50 mb-5">
                  We deliver innovative, reliable, and scalable digital solutions that empower businesses 
                  to thrive in the rapidly evolving digital landscape.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/services/web-development" className="btn btn-light btn-lg">
                    Explore Services
                  </Link>
                  <Link to="/contact" className="btn btn-outline-light btn-lg">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="text-center">
                <img
                  src={homeImage}
                  alt="Coltigent Technology Services"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h2 className="text-primary fw-bold mb-4">About Coltigent</h2>
                  <p className="lead text-muted mb-4">
                    Coltigent Technology Services PVT LTD is a forward-thinking IT, Consulting, 
                    Technology and Media service start-up delivering automation and software solutions.
                  </p>
                  <p className="text-muted mb-4">
                    We specialize in Big Data Processing, Data Migration, Cloud Computing, Web Development, 
                    IT Training & Staffing and Media Service through AI/ML technology.
                  </p>
                  <p className="text-muted mb-4">
                    Our enthusiastic and passionate team of highly experienced professionals from leading 
                    IT industry and IITians work and contribute for clients' business growth and streamline 
                    their complex business problems into efficient and cost-effective solutions.
                  </p>
                  <Link to="/about" className="btn btn-primary">
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="text-center">
                <img
                  src={serviceImage}
                  alt="Our Services"
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our Services</h2>
            <p>Comprehensive technology solutions to drive your business forward</p>
          </div>
          
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="service-card">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h5 className="fw-bold mb-3">{service.title}</h5>
                  <p className="text-muted mb-4">{service.description}</p>
                  <Link to={service.link} className="btn btn-outline-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container">
          <div className="row text-center">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="p-3">
                  <h2 className="display-4 fw-bold mb-2">{stat.number}</h2>
                  <p className="mb-0 text-white-50">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Why Choose Coltigent?</h2>
            <p>We combine innovation with real-world experience to deliver measurable results</p>
          </div>
          
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="text-center">
                <div className="service-icon mx-auto mb-3">
                  <i className="fas fa-rocket"></i>
                </div>
                <h5 className="fw-bold mb-3">Innovation First</h5>
                <p className="text-muted">
                  We stay ahead of technology trends to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={200}>
              <div className="text-center">
                <div className="service-icon mx-auto mb-3">
                  <i className="fas fa-users"></i>
                </div>
                <h5 className="fw-bold mb-3">Expert Team</h5>
                <p className="text-muted">
                  Experienced professionals from leading IT industry and IITians.
                </p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={300}>
              <div className="text-center">
                <div className="service-icon mx-auto mb-3">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h5 className="fw-bold mb-3">Measurable Results</h5>
                <p className="text-muted">
                  We focus on delivering solutions that drive real business value.
                </p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={400}>
              <div className="text-center">
                <div className="service-icon mx-auto mb-3">
                  <i className="fas fa-handshake"></i>
                </div>
                <h5 className="fw-bold mb-3">Partnership Approach</h5>
                <p className="text-muted">
                  We build long-term relationships based on trust and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-dark text-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h2 className="fw-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="lead mb-4">
                Let's discuss how our technology solutions can help you achieve your goals.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get Started Today
                </Link>
                <Link to="/services/web-development" className="btn btn-outline-light btn-lg">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <Homenew />
    </>
  );
};

export default Home;
