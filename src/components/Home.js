import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import homeImage from '../images/homeimage2.jpg';
import aboutImage from '../images/about.jpg';
import officeImage from '../images/coltigent_office.jpg';
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
        <div className="hero-background">
          <div className="hero-particles"></div>
          <div className="hero-grid"></div>
        </div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 col-md-12" data-aos="fade-right">
              <div className="hero-content">
                <div className="hero-badge mb-3">
                  <span className="badge bg-light text-primary px-3 py-2">
                    <i className="fas fa-rocket me-2"></i>
                    Innovation First
                  </span>
                </div>
                <h1 className="hero-title text-white mb-4">
                  <span className="colt-text">COLT</span> <span className="plus-text">+</span> <span className="intelligent-text">INTELLIGENT</span> <span className="equals-text">=</span> <span className="coltigent-text">COLTIGENT</span>
                </h1>
                <h2 className="display-4 fw-bold text-white mb-4">
                  Transforming Businesses Through Technology
                </h2>
                <p className="lead text-white-50 mb-5">
                  We deliver innovative, reliable, and scalable digital solutions that empower businesses 
                  to thrive in the rapidly evolving digital landscape.
                </p>
                <div className="hero-buttons d-flex flex-wrap gap-3">
                  <Link to="/services/web-development" className="btn btn-light btn-lg hero-btn">
                    <i className="fas fa-arrow-right me-2"></i>
                    Explore Services
                  </Link>
                  <Link to="/contact" className="btn btn-outline-light btn-lg hero-btn">
                    <i className="fas fa-phone me-2"></i>
                    Get Started
                  </Link>
                </div>
                <div className="hero-stats mt-5 d-none d-md-flex">
                  <div className="stat-item">
                    <h3 className="text-white mb-1">50+</h3>
                    <p className="text-white-50 mb-0">Projects</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="text-white mb-1">25+</h3>
                    <p className="text-white-50 mb-0">Clients</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="text-white mb-1">5+</h3>
                    <p className="text-white-50 mb-0">Years</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12" data-aos="fade-left">
              <div className="hero-image-container text-center">
                <div className="hero-image-wrapper">
                  <img
                    src={homeImage}
                    alt="Coltigent Technology Services"
                    className="hero-image img-fluid rounded shadow-lg"
                  />
                  <div className="hero-image-overlay"></div>
                </div>
                <div className="floating-cards">
                  <div className="floating-card card-1">
                    <i className="fas fa-code text-primary"></i>
                    <span>Web Dev</span>
                  </div>
                  <div className="floating-card card-2">
                    <i className="fas fa-cloud text-info"></i>
                    <span>Cloud</span>
                  </div>
                  <div className="floating-card card-3">
                    <i className="fas fa-database text-success"></i>
                    <span>Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-light">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>About Coltigent</h2>
            <p>Pioneering the future of technology solutions</p>
          </div>
          
          <div className="row align-items-center mb-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="about-content">
                <h3 className="text-primary fw-bold mb-4">Who We Are</h3>
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
                
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <div className="feature-item">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>Expert Team</span>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="feature-item">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>24/7 Support</span>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="feature-item">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>Latest Technology</span>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="feature-item">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>Cost Effective</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="about-images">
                <div className="main-image">
                  <img
                    src={aboutImage}
                    alt="About Coltigent"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>
                <div className="overlay-image">
                  <img
                    src={officeImage}
                    alt="Coltigent Office"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
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
                  <a href={service.link} className="btn btn-outline-primary service-btn">
                    Learn More
                    <i className="fas fa-arrow-right ms-2"></i>
                  </a>
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

      {/* Contact Section */}
      <section id="contact" className="section bg-dark text-white">
        <div className="container">
          <div className="section-title text-center" data-aos="fade-up">
            <h2 className="text-white">Get In Touch</h2>
            <p className="text-white-50">Ready to transform your business? Let's start the conversation.</p>
          </div>
          
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="row">
                <div className="col-md-4 text-center mb-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h5 className="text-white mb-2">Address</h5>
                    <p className="text-white-50 small">
                      Office #818, 8th Floor,<br />
                      Bramha SKY Uzuri (A Building),<br />
                      Opp. PCMC Corporation Building,<br />
                      Pimpri, Pune, Maharashtra - 411018
                    </p>
                  </div>
                </div>
                
                <div className="col-md-4 text-center mb-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <h5 className="text-white mb-2">Phone</h5>
                    <p className="text-white-50">
                      <a href="tel:+911234567890" className="text-white-50 text-decoration-none">
                        +91 123 456 7890
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="col-md-4 text-center mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <h5 className="text-white mb-2">Email</h5>
                    <p className="text-white-50">
                      <a href="mailto:info@coltigent.com" className="text-white-50 text-decoration-none">
                        info@coltigent.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-5" data-aos="fade-up">
                <h3 className="text-white mb-4">Ready to Transform Your Business?</h3>
                <p className="lead text-white-50 mb-4">
                  Let's discuss how our technology solutions can help you achieve your goals.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <a href="mailto:info@coltigent.com" className="btn btn-primary btn-lg">
                    <i className="fas fa-envelope me-2"></i>
                    Get Started Today
                  </a>
                  <a href="tel:+911234567890" className="btn btn-outline-light btn-lg">
                    <i className="fas fa-phone me-2"></i>
                    Call Us Now
                  </a>
                </div>
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
