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
      id="hero"
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
                Tailored Talent Solutions for Every Need
              </h3>
              <p style={{ color: "#4a4a4a", lineHeight: 1.6 }}>
                We customize hiring strategies to match your company’s unique
                goals and culture.
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
                Project Planning & Execution Support
              </h3>
              <p style={{ color: "#4a4a4a", lineHeight: 1.6 }}>
                Guiding organizations to implement projects effectively, on
                time, and within budget.
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
                Customized Recruitment Strategies
              </h3>
              <p style={{ color: "#4a4a4a", lineHeight: 1.6 }}>
                We adapt our recruitment methods to meet the urgency, and
                complexity of your hiring needs.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HiringSolutions;
