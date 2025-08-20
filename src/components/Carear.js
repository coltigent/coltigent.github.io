import React from 'react';

const Carear = () => {
  return (
    <section className="py-5 bg-light mt-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="text-primary ">Join Coltigent Technology Services</h2>
          <p className="lead text-muted">
            We're passionate about innovation, growth, and making a difference. Become part of our dynamic team!
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h4 className="text-primary">Our Mission</h4>
            <p>
              To empower businesses with cutting-edge digital solutions that drive success and transform industries.
            </p>
          </div>
          <div className="col-md-6">
            <h4 className="text-primary">Our Vision</h4>
            <p>
              To be the global leader in technology services, inspiring innovation and fostering a culture of excellence.
            </p>
          </div>
        </div>

        {/* Company Culture */}
        <div className="mb-4">
          <h4 className="text-primary">Our Culture</h4>
          <p>
            At Coltigent, we believe in collaboration, continuous learning, and supporting one another to achieve our goals. 
            We celebrate diversity and encourage creativity.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-4">
          <h4 className="text-primary">Why Work With Us?</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Flexible working hours & remote work options</li>
            <li className="list-group-item">Professional growth & training programs</li>
            <li className="list-group-item">Inclusive and diverse team environment</li>
            <li className="list-group-item">Competitive compensation & benefits</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <a href="" className="btn btn-primary btn-lg">
            Explore Open Positions & Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Carear;
