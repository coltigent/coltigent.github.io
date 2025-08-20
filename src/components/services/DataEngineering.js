import React from 'react';

const DataEngineer = () => {
  return (
    <section className="container py-5 mt-5">
      {/* Section Title */}
      <div className="text-center mb-5">
        <h2 className=" text-primary">Data Engineering & Big Data Processing Services</h2>
        <p className="text-muted fs-5 mt-3">
          We offer robust Data Engineering and Big Data processing services that help businesses manage, transform, and extract value from large volumes of data—at scale, in real time.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary"> Data Pipeline Design</h5>
              <p className="card-text">
                Build reliable, scalable ETL/ELT pipelines using Apache Spark, Kafka, and Airflow to ingest, process, and store massive datasets efficiently.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">Real-Time Data Processing</h5>
              <p className="card-text">
                Leverage real-time analytics using streaming frameworks and tools like Apache Flink, Spark Streaming, and AWS Kinesis.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary"> Data Integration & Warehousing</h5>
              <p className="card-text">
                Integrate data from diverse sources into centralized warehouses using Redshift, Snowflake, BigQuery, and traditional RDBMS.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary"> Data Transformation & Enrichment</h5>
              <p className="card-text">
                Clean, enrich, and transform raw data into usable formats using Python, Scala, or SQL in cloud-native or on-premise environments.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary"> Data Governance & Quality</h5>
              <p className="card-text">
                Implement data validation, monitoring, lineage, and governance practices to ensure accuracy, security, and compliance.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary"> Cloud-Native Big Data Solutions</h5>
              <p className="card-text">
                Architect big data platforms on AWS, GCP, or Azure using tools like EMR, Databricks, Glue, or Dataflow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <h4 className="fw-semibold">Need help managing your enterprise data?</h4>
        <a href="/contact" className="btn btn-primary btn-lg mt-3 px-4">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default DataEngineer;
