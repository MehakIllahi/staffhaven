import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgMain from "../../assets/img4.jpg";
import imgTop from "../../assets/img2.jpg";
import imgBottom from "../../assets/img5.jpg";

function WhyStaffHaven() {
  return (
    <>
      <section className="bg-primary-custom py-5 px-3">
        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
            <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h2
                className="mb-4"
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Why STAFFHAVEN
              </h2>

              <p
                className="mx-auto mx-md-0"
                style={{
                  color: "white",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  maxWidth: "420px",
                }}
              >
                StaffHaven was founded to meet the evolving talent needs of
                businesses across industries. As a dedicated recruitment
                partner, we combine market insight, industry experience, and a
                commitment to exceptional service to help organizations build
                high-performing teams.
                <br />
                <br />
                Our expertise covers staffing solutions, talent acquisition
                strategies, and ensuring candidates find the right
                opportunities. With a focus on quality, integrity, and
                personalized support, StaffHaven is your trusted partner for
                sustainable growth and workforce success.
              </p>

              <button
                className="btn mt-4 px-5 py-2 fw-semibold"
                style={{
                  backgroundColor: "white",
                  borderRadius: "999px",
                }}
              >
                About Us
              </button>
            </Col>
            {/* RIGHT IMAGES - HIDE ON MOBILE */}

            <Col md={6} className="d-none d-md-block">
              <Row className="g-3">
                {/* BIG IMAGE */}
                <Col xs={12} md={7}>
                  <img
                    src={imgMain}
                    alt="Team working"
                    className="w-100 d-block"
                    style={{
                      height: "100%",
                      minHeight: "260px",
                      borderRadius: "20px",
                      objectFit: "cover",
                    }}
                  />
                </Col>

                {/* STACKED IMAGES */}
                <Col xs={12} md={5} className="d-flex flex-column gap-3">
                  <img
                    src={imgTop}
                    alt="Team 1"
                    className="w-100"
                    style={{
                      minHeight: "125px",
                      borderRadius: "20px",
                      objectFit: "cover",
                    }}
                  />
                  <img
                    src={imgBottom}
                    alt="Team 2"
                    className="w-100"
                    style={{
                      minHeight: "125px",
                      borderRadius: "20px",
                      objectFit: "cover",
                    }}
                  />
                </Col>
              </Row>
            </Col>

            <Col xs={12} className="d-block d-md-none">
              <img
                src={imgMain}
                alt="Team working"
                className="w-100 d-block"
                style={{
                  height: "100%",
                  minHeight: "260px",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <div
        className="bg-primary-light-custom"
        style={{ height: "20px", width: "100%" }}
      />
    </>
  );
}

export default WhyStaffHaven;
