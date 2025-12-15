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
                Pay Per Hire
              </h3>
              <p style={{ color: "#4a4a4a", lineHeight: 1.6 }}>
                Experience worry-free recruitment as our expert team manages the
                entire process, from sourcing to screening and presenting
                top-qualified candidates for your business. With our Pay Per
                Hire model, you only pay for the talent you hire.
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
                Pay Per Month
              </h3>
              <p style={{ color: "#4a4a4a", lineHeight: 1.6 }}>
                Incorporate our skilled recruiters into your team as they work
                closely with you to develop and implement talent acquisition
                strategies that align with your company's objectives. With a
                fixed monthly fee, we'll handle all your recruitment needs from
                sourcing to onboarding.
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
                Pay Per Hour
              </h3>
              <p style={{ color: "#4a4a4a", lineHeight: 1.6 }}>
                Gain access to our experienced professionals on an hourly basis
                with our Pay Per Hour model. Benefit from a range of flexible
                consulting services, including talent strategy development,
                onboarding, diversity and inclusion initiatives, and more.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HiringSolutions;
