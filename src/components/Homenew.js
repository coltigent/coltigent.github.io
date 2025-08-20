import React from 'react';
// import consultingImage from './../images/cloud_img.jpg'; // Update with your image
import strategyImage from './../images/web_dev.jpg';
import cloudImage from './../images/cloud3.webp';
import securityImage from './../images/se_img.jpg';
import custom3 from './../images/custom3.jpg';
import aiImage from './../images/aiImge.jpg';
import data from './../images/data_e.jpg'

const Homenew = () => {
  return (
    <div className="container py-5">
       <div className="row  flex-md-row-reverse mb-5">
        <div className="col-md-6">
          <img src={strategyImage} alt="Cloud Consulting" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h3 className="text-primary">Web Application Development</h3>
          <p className="text-muted">
       We specialize in building fast, secure, and scalable web applications tailored to your business needs using modern technologies
        like React, Spring Boot, and Django.
        <br></br>
        <br></br>
        Our team ensures responsive design, seamless user experience, and robust backend systems that grow with your business. Whether you're launching a new product or modernizing an existing platform, we deliver end-to-end solutions that align with your goals. 
        From concept to deployment and beyond, we’re committed to turning your ideas into high-performing</p>
        </div>
      </div>

      {/* Section 1 - Technology Strategy */}
      <div className="row  mb-5">
        <div className="col-md-6">
          <img src={cloudImage} alt="Strategy" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h3 className="text-primary">Cloud Computing & Data Migration Services</h3>
          <p className="text-muted">
          We help businesses modernize their infrastructure by offering cloud-native solutions and secure data migration services, 
          leveraging the power of Scala, Apache Spark, Python, AWS, and Unix-based systems. 
                 <br></br>
        <br></br>       <br></br>
        <br></br>Our team specializes in building scalable, high-performance cloud architectures that support agility and growth. We ensure smooth, secure transitions from legacy systems to cloud platforms with minimal downtime and maximum data integrity. Whether you're migrating to AWS
           or optimizing your existing cloud setup, we provide tailored solutions that meet your operational and compliance needs.
            </p>
        </div>
      </div>

      {/* Section 2 - Cloud Advisory */}
      <div className="row  flex-md-row-reverse mb-5">
        <div className="col-md-6">
          <img src={data} alt="Cloud Consulting" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h3 className="text-primary">Data Engineering & Big Data Processing Services</h3>
          <p className="text-muted">
       We offer robust Data Engineering and Big Data processing services that help businesses manage, 
       transform, and extract value from large volumes of data—at scale, in real time. Our team designs and
        implements scalable data pipelines, integrates diverse data sources, and ensures data quality, consistency, 
        and availability across your organization. <br>
        </br>
        Leveraging technologies like Apache Spark, Kafka, Hadoop, Scala, and Python,
         we enable efficient batch and streaming data processing tailored to your business needs. Whether you're building a 
         modern data platform, supporting advanced analytics, or enabling AI/ML initiatives, 
       we help you turn raw data into actionable insights that drive smarter decisions.        </p>
        </div>
      </div>

      {/* Section 3 - Cybersecurity & Compliance */}
      <div className="row  mb-5">
        <div className="col-md-6">
          <img src={custom3} alt="Cybersecurity" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h3 className="text-primary">Custom Software Solutions & Automation Services</h3>
          <p className="text-muted">
            We help businesses streamline operations, reduce manual work, and improve efficiency
             by building tailored software solutions and implementing process automation—designed around your exact business needs.
                     <br></br>
        <br></br>       <br></br>
              From internal tools to customer-facing platforms, our solutions are built to fit seamlessly into your existing workflows. We leverage technologies like Python, Java, and modern scripting frameworks to automate repetitive tasks, integrate systems, and deliver measurable productivity gains. Whether you're looking to eliminate bottlenecks, improve accuracy,
             or accelerate decision-making, our custom software and automation services drive real business impact.       </p>
        </div>
      </div>
          
          

       <div className="row  flex-md-row-reverse mb-5">
        <div className="col-md-6">
          <img src={aiImage} alt="Cloud Consulting" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h3 className="text-primary">Media Services with AI/ML Integration</h3>
           <p className="text-muted">
            We offer intelligent media solutions powered by Artificial Intelligence (AI) and Machine Learning (ML) that help businesses create, manage, and distribute content faster, smarter, and more efficiently.

        By combining media expertise with modern AI/ML technologies, we help automate workflows, enhance user experiences, and extract deeper insights from visual, audio, and text-based media.
  
     </p>
        </div>
      </div>
            <div className="row  mb-5">
        <div className="col-md-6">
          <img src={securityImage} alt="Cybersecurity" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h3 className="text-primary">IT Consulting & Training Services</h3>
          <p className="text-muted">
         We offer comprehensive IT consulting and technical training services designed to empower
          organizations with the right technology strategies and skillsets. Our solutions enable businesses to transform digitally,
          
           optimize operations, and build high-performing, future-ready teams. 
                        <br></br>
        <br></br>       <br></br>
           From strategic 
           IT roadmapping to hands-on training in cutting-edge technologies, we tailor our services to meet your unique goals.
            Our experienced consultants provide guidance on cloud adoption, software architecture, DevOps practices,
             and more—while our training programs upskill your workforce in areas like programming, data engineering,
              and system administration. Whether you're navigating digital 
         transformation or investing in employee development, we help you stay ahead in a rapidly evolving tech landscape.
         </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-5">
        <h4 className="fw-bold text-primary">Need expert guidance on your IT journey?</h4>
        <p className="text-muted">
          Our consultants are ready to partner with you for long-term success.
        </p>
        <a href="/contact" className="btn btn-primary mt-2">Talk to a Consultant</a>
      </div>
    </div>
  );
};

export default Homenew;
