import React from 'react';
import { Link } from 'react-router-dom';

const Customsof = () => {
  return (
    <section className="container py-5 mt-5">
      {/* Section Header */}
      <div className="text-center mb-5">
        <h2 className=" text-primary">Custom Software Solutions & Automation Services</h2>
        <p className="text-muted fs-5 mt-3">
          We help businesses streamline operations, reduce manual work, and improve efficiency by building tailored software solutions and implementing process automation—designed around your exact business needs.
        </p>
      </div>

      {/* Service Cards */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body text-center">
              <h5 className="card-title text-primary">🔧 Custom Software Development</h5>
              <p className="card-text">
                Build scalable web and mobile applications with modern tech stacks like React, Django, Node.js, and Spring Boot.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body text-center">
              <h5 className="card-title text-primary">⚙️ Process Automation</h5>
              <p className="card-text">
                Automate repetitive tasks and workflows using Python, APIs, and cloud-based tools to boost efficiency and reduce costs.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body text-center">
              <h5 className="card-title text-primary">🔗 System Integration</h5>
              <p className="card-text">
                Connect CRM, ERP, and third-party systems for seamless data flow and real-time communication across platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <h4 className="fw-semibold">Ready to streamline your business with automation?</h4>
        <Link to="/contact" className="btn btn-primary btn-lg mt-3 px-4">
  Contact Us
</Link>
      </div>
    </section>
  );
};

export default Customsof;
