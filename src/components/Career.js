import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      experience: '3-5 years',
      skills: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB'],
      description: 'We are looking for an experienced Full Stack Developer to join our dynamic team and help build innovative web applications.'
    },
    {
      id: 2,
      title: 'Data Engineer',
      department: 'Data Science',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      experience: '2-4 years',
      skills: ['Python', 'Apache Spark', 'Hadoop', 'SQL', 'AWS'],
      description: 'Join our data engineering team to build scalable data pipelines and help organizations make data-driven decisions.'
    },
    {
      id: 3,
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      experience: '5-8 years',
      skills: ['AWS', 'Azure', 'GCP', 'Terraform', 'Docker'],
      description: 'Design and implement cloud infrastructure solutions for our enterprise clients.'
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      experience: '2-4 years',
      skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
      description: 'Create beautiful and intuitive user experiences for our digital products.'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      experience: '3-5 years',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Linux'],
      description: 'Build and maintain our CI/CD pipelines and infrastructure automation.'
    },
    {
      id: 6,
      title: 'Business Analyst',
      department: 'Consulting',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      experience: '2-4 years',
      skills: ['Requirements Gathering', 'Process Analysis', 'SQL', 'Agile'],
      description: 'Bridge the gap between business needs and technical solutions.'
    }
  ];

  const benefits = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Learning & Development',
      description: 'Continuous learning opportunities with access to courses, conferences, and certifications.'
    },
    {
      icon: 'fas fa-users',
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive and inclusive environment.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Career Growth',
      description: 'Clear career progression paths with regular performance reviews and growth opportunities.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Flexible Work Hours',
      description: 'Flexible working hours and remote work options to maintain work-life balance.'
    },
    {
      icon: 'fas fa-medal',
      title: 'Competitive Benefits',
      description: 'Comprehensive health insurance, paid time off, and performance-based bonuses.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Innovation Focus',
      description: 'Work on cutting-edge technologies and innovative projects that make a real impact.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Coltigent Technology Services</title>
        <meta name="description" content="Join our team at Coltigent Technology Services. Explore exciting career opportunities in software development, data engineering, cloud computing, and more." />
      </Helmet>

      <div className="container py-5 mt-5">
        {/* Hero Section */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="text-primary fw-bold mb-3">Join Our Team</h1>
          <p className="lead text-muted">
            Build the future with us. We're looking for passionate individuals who want to make a difference.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12">
            <h2 className="text-center text-primary mb-4">Why Work With Us?</h2>
          </div>
          
          {benefits.map((benefit, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="service-icon mx-auto mb-3">
                    <i className={benefit.icon}></i>
                  </div>
                  <h5 className="card-title">{benefit.title}</h5>
                  <p className="card-text text-muted">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Openings */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12">
            <h2 className="text-center text-primary mb-4">Current Openings</h2>
            <p className="text-center text-muted mb-5">
              Don't see a position that matches your skills? Send us your resume at careers@coltigent.com
            </p>
          </div>
          
          {jobOpenings.map((job, index) => (
            <div key={job.id} className="col-12 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h4 className="card-title text-primary mb-2">{job.title}</h4>
                      <div className="row mb-3">
                        <div className="col-md-3">
                          <small className="text-muted">
                            <i className="fas fa-building me-1"></i>
                            {job.department}
                          </small>
                        </div>
                        <div className="col-md-3">
                          <small className="text-muted">
                            <i className="fas fa-map-marker-alt me-1"></i>
                            {job.location}
                          </small>
                        </div>
                        <div className="col-md-3">
                          <small className="text-muted">
                            <i className="fas fa-clock me-1"></i>
                            {job.type}
                          </small>
                        </div>
                        <div className="col-md-3">
                          <small className="text-muted">
                            <i className="fas fa-briefcase me-1"></i>
                            {job.experience}
                          </small>
                        </div>
                      </div>
                      <p className="card-text text-muted mb-3">{job.description}</p>
                      <div className="mb-3">
                        {job.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="badge bg-light text-dark me-2 mb-1">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-4 text-md-end">
                      <Link to="/contact" className="btn btn-primary">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Culture Section */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12">
            <h2 className="text-center text-primary mb-4">Our Culture</h2>
          </div>
          
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  <i className="fas fa-lightbulb me-2"></i>
                  Innovation First
                </h5>
                <p className="card-text">
                  We encourage creative thinking and innovative solutions. Every team member has the opportunity to contribute ideas and drive change.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4" data-aos="fade-left">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  <i className="fas fa-heart me-2"></i>
                  Work-Life Balance
                </h5>
                <p className="card-text">
                  We believe in maintaining a healthy work-life balance. Flexible hours, remote work options, and wellness programs support our team's well-being.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  <i className="fas fa-handshake me-2"></i>
                  Collaborative Environment
                </h5>
                <p className="card-text">
                  Teamwork is at the heart of everything we do. We foster an environment where knowledge sharing and collaboration lead to better outcomes.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4" data-aos="fade-left">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  <i className="fas fa-trophy me-2"></i>
                  Recognition & Growth
                </h5>
                <p className="card-text">
                  We recognize and reward exceptional performance. Clear career paths and continuous learning opportunities help you grow professionally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center" data-aos="fade-up">
          <div className="card border-0 shadow-sm bg-gradient-primary text-white">
            <div className="card-body py-5">
              <h3 className="mb-3">Ready to Join Our Team?</h3>
              <p className="mb-4">
                If you're passionate about technology and want to work on exciting projects, we'd love to hear from you!
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/contact" className="btn btn-light btn-lg">
                  Apply Now
                </Link>
                <a href="mailto:careers@coltigent.com" className="btn btn-outline-light btn-lg">
                  Send Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
