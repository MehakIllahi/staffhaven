import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FloatingTail from "../Floatingtail/FloatingTail";

const Hero = () => {
  return (
    <>
      <Container fluid className="bg-primary-custom py-5">
        <Container>
          <Row className="align-items-center">
            {/* CONTENT COLUMN */}
            <Col
              xs={12}
              sm={12}
              md={8}
              lg={6}
              className="text-center text-md-start"
            >
              <h1 className="fw-bold mb-3">Services We Provide</h1>

              <p className="mb-0 fs-6 fs-md-5">
                We deliver comprehensive engineering, staffing, and technology
                consulting services designed to help businesses grow, scale, and
                succeed. From expert project consulting to flexible staffing
                solutions, our team ensures the right talent and strategy for
                every challenge.
              </p>
            </Col>
          </Row>
        </Container>

        {/* OPTIONAL FLOATING DECORATION */}
        <FloatingTail />
      </Container>
    </>
  );
};

export default Hero;
