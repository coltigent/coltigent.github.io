import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import cloudImage from '../../images/cloud_img.jpg';

const CloudService = () => {
  const services = [
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Migration',
      description: 'Seamless migration of your applications and data to the cloud with minimal downtime.',
      features: ['Legacy System Migration', 'Data Migration', 'Application Modernization', 'Zero-downtime Migration']
    },
    {
      icon: 'fas fa-server',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure setup and management.',
      features: ['Auto-scaling', 'Load Balancing', 'High Availability', 'Disaster Recovery']
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud environment.',
      features: ['Identity & Access Management', 'Data Encryption', 'Security Monitoring', 'Compliance']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Cloud Optimization',
      description: 'Cost optimization and performance tuning for your cloud resources.',
      features: ['Cost Analysis', 'Performance Monitoring', 'Resource Optimization', 'Automation']
    }
  ];

  const platforms = [
    { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900' },
    { name: 'Azure', icon: 'fab fa-microsoft', color: '#0078D4' },
    { name: 'Google Cloud', icon: 'fab fa-google', color: '#4285F4' },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
    { name: 'Kubernetes', icon: 'fas fa-cube', color: '#326CE5' },
    { name: 'Terraform', icon: 'fas fa-mountain', color: '#7B42BC' }
  ];

  const benefits = [
    {
      icon: 'fas fa-dollar-sign',
      title: 'Cost Savings',
      description: 'Reduce infrastructure costs with pay-as-you-go pricing and resource optimization.'
    },
    {
      icon: 'fas fa-expand-arrows-alt',
      title: 'Scalability',
      description: 'Scale your resources up or down based on demand without upfront investment.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Security',
      description: 'Enterprise-grade security with built-in compliance and data protection.'
    },
    {
      icon: 'fas fa-tachometer-alt',
      title: 'Performance',
      description: 'High-performance infrastructure with global CDN and edge computing.'
    },
    {
      icon: 'fas fa-sync',
      title: 'Flexibility',
      description: 'Choose the right services and configurations for your specific needs.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Reliability',
      description: '99.9% uptime SLA with automated backup and disaster recovery.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Computing Services - Coltigent Technology Services</title>
        <meta name="description" content="Professional cloud computing services including migration, infrastructure setup, security, and optimization. AWS, Azure, and Google Cloud certified solutions." />
      </Helmet>

      <div className="container py-5 mt-5">
        {/* Hero Section */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-lg-6">
            <h1 className="text-primary fw-bold mb-4">Cloud Computing Services</h1>
            <p className="lead text-muted mb-4">
              Transform your business with scalable, secure, and cost-effective cloud solutions that drive innovation and growth.
            </p>
            <p className="text-muted mb-4">
              From cloud migration to infrastructure management, our certified cloud experts help you leverage the power of AWS, Azure, and Google Cloud Platform.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Cloud Consultation
            </Link>
          </div>
          <div className="col-lg-6">
            <img
              src={cloudImage}
              alt="Cloud Computing"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>

        {/* Services Overview */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12">
            <h2 className="text-center text-primary mb-5">Our Cloud Services</h2>
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

        {/* Cloud Platforms */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12">
            <h2 className="text-center text-primary mb-5">Cloud Platforms We Work With</h2>
          </div>
          
          {platforms.map((platform, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="text-center">
                <div className="service-icon mx-auto mb-3" style={{ backgroundColor: platform.color }}>
                  <i className={platform.icon}></i>
                </div>
                <h6 className="fw-bold">{platform.name}</h6>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12">
            <h2 className="text-center text-primary mb-5">Benefits of Cloud Computing</h2>
          </div>
          
          {benefits.map((benefit, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <div className="service-icon mx-auto mb-3">
                    <i className={benefit.icon}></i>
                  </div>
                  <h5 className="fw-bold mb-3">{benefit.title}</h5>
                  <p className="text-muted">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Migration Process */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12">
            <h2 className="text-center text-primary mb-5">Our Cloud Migration Process</h2>
          </div>
          
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  <i className="fas fa-search me-2"></i>
                  Assessment & Planning
                </h5>
                <p className="card-text">
                  We analyze your current infrastructure, applications, and business requirements to create a comprehensive migration strategy.
                </p>
                <ul className="list-unstyled">
                  <li><i className="fas fa-check text-success me-2"></i>Infrastructure Assessment</li>
                  <li><i className="fas fa-check text-success me-2"></i>Application Compatibility</li>
                  <li><i className="fas fa-check text-success me-2"></i>Cost Analysis</li>
                  <li><i className="fas fa-check text-success me-2"></i>Migration Timeline</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4" data-aos="fade-left">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  <i className="fas fa-rocket me-2"></i>
                  Migration & Implementation
                </h5>
                <p className="card-text">
                  Our experts execute the migration with minimal downtime, ensuring data integrity and application functionality.
                </p>
                <ul className="list-unstyled">
                  <li><i className="fas fa-check text-success me-2"></i>Data Migration</li>
                  <li><i className="fas fa-check text-success me-2"></i>Application Deployment</li>
                  <li><i className="fas fa-check text-success me-2"></i>Testing & Validation</li>
                  <li><i className="fas fa-check text-success me-2"></i>Performance Optimization</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  <i className="fas fa-shield-alt me-2"></i>
                  Security & Compliance
                </h5>
                <p className="card-text">
                  We implement robust security measures and ensure compliance with industry standards and regulations.
                </p>
                <ul className="list-unstyled">
                  <li><i className="fas fa-check text-success me-2"></i>Identity Management</li>
                  <li><i className="fas fa-check text-success me-2"></i>Data Encryption</li>
                  <li><i className="fas fa-check text-success me-2"></i>Security Monitoring</li>
                  <li><i className="fas fa-check text-success me-2"></i>Compliance Audits</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4" data-aos="fade-left">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  <i className="fas fa-headset me-2"></i>
                  Support & Maintenance
                </h5>
                <p className="card-text">
                  Ongoing support and maintenance to ensure your cloud environment runs smoothly and efficiently.
                </p>
                <ul className="list-unstyled">
                  <li><i className="fas fa-check text-success me-2"></i>24/7 Monitoring</li>
                  <li><i className="fas fa-check text-success me-2"></i>Performance Optimization</li>
                  <li><i className="fas fa-check text-success me-2"></i>Security Updates</li>
                  <li><i className="fas fa-check text-success me-2"></i>Technical Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center" data-aos="fade-up">
          <div className="card border-0 shadow-sm bg-gradient-primary text-white">
            <div className="card-body py-5">
              <h3 className="mb-3">Ready to Move to the Cloud?</h3>
              <p className="mb-4">
                Let's discuss your cloud migration strategy and help you leverage the power of cloud computing.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/contact" className="btn btn-light btn-lg">
                  Start Migration
                </Link>
                <Link to="/services/data-engineering" className="btn btn-outline-light btn-lg">
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

export default CloudService;