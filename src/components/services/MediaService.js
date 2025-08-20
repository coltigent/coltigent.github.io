import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import mediaImage from '../../images/uxuimg.jpg';

const MediaService = () => {
  const services = [
    {
      icon: 'fas fa-video',
      title: 'Video Production',
      description: 'Professional video production services with AI-powered editing and enhancement.',
      features: ['Corporate Videos', 'Product Demos', 'Training Videos', 'AI Video Enhancement']
    },
    {
      icon: 'fas fa-image',
      title: 'Image Processing',
      description: 'Advanced image processing and enhancement using AI/ML technologies.',
      features: ['Image Enhancement', 'Background Removal', 'Object Detection', 'Style Transfer']
    },
    {
      icon: 'fas fa-microphone',
      title: 'Audio Services',
      description: 'High-quality audio processing and enhancement with AI capabilities.',
      features: ['Audio Enhancement', 'Noise Reduction', 'Voice Cloning', 'Audio Analysis']
    },
    {
      icon: 'fas fa-brain',
      title: 'AI/ML Integration',
      description: 'Intelligent media processing and automation using machine learning.',
      features: ['Content Generation', 'Automated Editing', 'Smart Tagging', 'Quality Control']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Media Services - Coltigent Technology Services</title>
        <meta name="description" content="Professional media services including video production, image processing, audio services, and AI/ML integration. Transform your media content with cutting-edge technology." />
      </Helmet>

      <div className="container py-5 mt-5">
        {/* Hero Section */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-lg-6">
            <h1 className="text-primary fw-bold mb-4">Media Services</h1>
            <p className="lead text-muted mb-4">
              Transform your media content with cutting-edge AI/ML technology and professional production services.
            </p>
            <p className="text-muted mb-4">
              From video production to image processing, our media services combine creative expertise with advanced technology to deliver exceptional results.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start Media Project
            </Link>
          </div>
          <div className="col-lg-6">
            <img
              src={mediaImage}
              alt="Media Services"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>

        {/* Services Overview */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12">
            <h2 className="text-center text-primary mb-5">Our Media Services</h2>
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

        {/* Call to Action */}
        <div className="text-center" data-aos="fade-up">
          <div className="card border-0 shadow-sm bg-gradient-primary text-white">
            <div className="card-body py-5">
              <h3 className="mb-3">Ready to Transform Your Media Content?</h3>
              <p className="mb-4">
                Let's discuss your media project and create stunning content with the power of AI and professional expertise.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/contact" className="btn btn-light btn-lg">
                  Get Started
                </Link>
                <Link to="/services/web-development" className="btn btn-outline-light btn-lg">
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

export default MediaService;
