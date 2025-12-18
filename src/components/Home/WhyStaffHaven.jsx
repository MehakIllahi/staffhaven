import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressiveImage from "../Imageloader/ProgressiveImage";

import imgMain from "../../assets/img4.jpg"; // big image
import imgTop from "../../assets/img2.jpg"; // top small image
import imgBottom from "../../assets/img5.jpg"; // bottom small image

function WhyStaffHaven() {
  return (
    <>
      <section className="bg-primary-custom" style={{ padding: "60px 20px" }}>
        <Container>
          <Row className=" mb-2">
            {/* LEFT: content */}
            <Col md={6}>
              <h2
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  color: "white",
                }}
                className="mb-4"
              >
                Why STAFFHAVEN
              </h2>
              <p
                style={{
                  color: "white",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  maxWidth: "420px",
                }}
                className="mb-2"
              >
                StaffHaven was founded to meet the evolving talent needs of
                businesses across industries. As a dedicated recruitment
                partner, we combine market insight, industry experience, and a
                commitment to exceptional service to help organizations build
                high-performing teams. <br />
                <br />
                Our expertise covers staffing solutions, talent acquisition
                strategies, and ensuring candidates find the right
                opportunities. With a focus on quality, integrity, and
                personalized support, StaffHaven is your trusted partner for
                sustainable growth and workforce success.
              </p>

              <button
                style={{
                  marginTop: "2rem",
                  backgroundColor: "white",
                  border: "none",
                  padding: "0.75rem 2.5rem",
                  borderRadius: "999px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "black",
                }}
              >
                About Us
              </button>
            </Col>

            {/* RIGHT: images (1 big + 2 stacked) */}
            <Col md={6} className="mb-4 ">
              <Row className="g-3">
                {/* Big image */}
                <Col md={7}>
                  <img
                    src={imgMain}
                    alt="Team working"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Col>

                {/* Two stacked images */}
                <Col
                  md={5}
                  className="d-flex flex-column"
                  style={{ gap: "0.75rem" }}
                >
                  <img
                    src={imgTop}
                    alt="Team 1"
                    style={{
                      width: "100%",
                      borderRadius: "20px",
                      objectFit: "cover",
                      flex: 1,
                    }}
                  />
                  <img
                    src={imgBottom}
                    alt="Team 2"
                    style={{
                      width: "100%",
                      borderRadius: "20px",
                      objectFit: "cover",
                      flex: 1,
                    }}
                  />
                </Col>
              </Row>
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
