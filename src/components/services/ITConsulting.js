import React from 'react';
import itConsultingImage from '../../images/itconsulting.jpg'; // 🔁 replace with your image

const ITConsulting = () => {
  return (
    <section className="container py-5 mt-5">
      <div className="row align-items-center g-5">

        {/* Image */}
        <div className="col-lg-6">
          <img
            src={itConsultingImage}
            alt="IT Consulting and Training"
            className="img-fluid rounded shadow-lg w-100"
            style={{ maxHeight: '450px', objectFit: 'cover' }}
          />
        </div>

        {/* Content */}
        <div className="col-lg-6">
          <h2 className=" mb-4 text-primary">IT Consulting & Training Services</h2>
          <p className="text-muted fs-5">
            We offer comprehensive IT Consulting and Technical Training services designed to empower organizations with the right technology strategies and skillsets.
          </p>
          <p className="text-muted fs-6">
            Our solutions enable businesses to transform digitally, optimize operations, and build high-performing, future-ready teams.
          </p>

          {/* Highlights */}
          <ul className="list-group list-group-flush mt-4">
            <li className="list-group-item bg-transparent border-0 ps-0">
               Digital Transformation Strategy & Roadmapping
            </li>
            <li className="list-group-item bg-transparent border-0 ps-0">
               Technical Training 
            </li>
            <li className="list-group-item bg-transparent border-0 ps-0">
              Team Upskilling & Mentorship Programs
            </li>
            <li className="list-group-item bg-transparent border-0 ps-0">
               Custom Workshops & Hands-on Labs
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-4">
            <a href="/contact" className="btn btn-primary btn-lg px-4">
              Talk to a Consultant
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ITConsulting;
