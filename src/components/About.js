import React from 'react';
import teamImage from './../images/about.jpg' // Optional image

const About = () => {
  return (
    <div className="container py-5 mt-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="text-primary fw-bold">About Coltigent</h1>
        <p className="lead text-muted">
          Empowering businesses through modern, scalable digital solutions.
        </p>
      </div>

      {/* Company Story */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h3 className="text-primary">Our Story</h3>
          <p>
           "Founded in 2025, Coltigent Technology Services Pvt. Ltd. is a forward-thinking IT solutions company committed to delivering innovative, reliable,
            and scalable digital technologies that empower businesses to thrive in a rapidly evolving digital landscape."
          </p>
        </div>
        <div className="col-md-6">
          <img src={teamImage} className="img-fluid rounded shadow" alt="Our Team" />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="row text-center mb-5">
        <div className="col-md-6">
          <h4 className="text-primary">Our Mission</h4>
          <p>Our mission at Coltigent Technology Services is to empower businesses through cutting-edge IT solutions, delivering reliable, innovative,
             and scalable technologies that drive digital transformation, operational excellence, and long-term success.</p>
        </div>
        <div className="col-md-6">
          <h4 className="text-primary">Our Vision</h4>
          <p>To become a global leader in digital innovation, trusted by startups and enterprises alike. 
            We aim to redefine the boundaries of technology by delivering cutting-edge solutions that drive real business value.
             Through relentless innovation, customer-centric design, and a commitment to excellence,
              we strive to empower organizations at every stage of
             growth. Our mission is to build long-term partnerships founded on trust, transparency, and measurable success.</p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-5">
        <h4 className="text-primary mb-3">Our Core Values</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">✔️ Innovation</li>
          <li className="list-group-item">✔️ Customer Focus</li>
          <li className="list-group-item">✔️ Integrity</li>
          <li className="list-group-item">✔️ Teamwork</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-4">
        <a href="/services" className="btn btn-primary btn-lg">Explore Our Services</a>
      </div>
    </div>
  );
};

export default About;
