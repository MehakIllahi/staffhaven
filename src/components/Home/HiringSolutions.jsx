import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiUserCheck, FiCalendar, FiClock } from "react-icons/fi";

function HiringSolutions() {
  return (
    <section
      style={{
        backgroundColor: "#f7f9fc",
        padding: "4rem 0",
      }}
    >
      <Container>
        {/* Heading */}
        <Row className="mb-5">
          <Col>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 700,
              }}
              className="text-primary-custom "
            >
              Flexible Hiring Solutions Tailored to Your Specific Needs
            </h2>
          </Col>
        </Row>

        {/* 3 Columns */}
        <Row>
          {/* Pay Per Hire */}
          <Col md={4} className="mb-4">
            <div>
              <div className="mb-3">
                <FiUserCheck size={60} className="text-primary-custom " />
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                }}
              >
                Engineering Consulting Services
              </h3>
              <p style={{ color: "#4a4a4a", lineHeight: 1.6 }}>
                We deliver expert engineering consulting solutions that help
                organizations plan, design, and execute projects with confidence
                and technical excellence.
              </p>
            </div>
          </Col>

          {/* Pay Per Month */}
          <Col md={4} className="mb-4">
            <div>
              <div className="mb-3">
                <FiCalendar size={60} className="text-primary-custom " />
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                }}
              >
                Project Consulting & Advisory
              </h3>
              <p style={{ color: "#4a4a4a", lineHeight: 1.6 }}>
                Our project consulting services provide end-to-end advisory
                support, ensuring the right strategy, resources, and execution
                model for every engagement.
              </p>
            </div>
          </Col>

          {/* Pay Per Hour */}
          <Col md={4} className="mb-4">
            <div>
              <div className="mb-3">
                <FiClock size={60} className="text-primary-custom " />
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                }}
              >
                Permanent Staffing & Recruitment
              </h3>
              <p style={{ color: "#4a4a4a", lineHeight: 1.6 }}>
                We support long-term hiring by managing sourcing, screening, and
                placement—helping organizations build stable, high-performing
                teams.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HiringSolutions;
