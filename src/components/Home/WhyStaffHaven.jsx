import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressiveImage from "../Imageloader/ProgressiveImage";

import imgMain from "../../assets/img4.svg"; // big image
import imgTop from "../../assets/img2.svg"; // top small image
import imgBottom from "../../assets/img5.svg"; // bottom small image

function WhyStaffHaven() {
  return (
    <>
      <section className="bg-primary-custom p-4">
        <Container>
          <Row className="align-items-center">
            {/* LEFT: content */}
            <Col md={6}>
              <h2
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  color: "#000",
                  marginBottom: "1.5rem",
                }}
              >
                Why StaffHaven
              </h2>
              <p
                style={{
                  color: "#111",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  maxWidth: "520px",
                }}
              >
                TP Greece Insurance Agent was created to meet the complex needs
                of insurance businesses in the Greek and European market. As
                part of TP GR, we bring operational experience, legal
                understanding, and commitment to service excellence.
              </p>

              <button
                style={{
                  marginTop: "2rem",
                  backgroundColor: "#000",
                  border: "none",
                  padding: "0.75rem 2.5rem",
                  borderRadius: "999px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "white",
                }}
              >
                About Us
              </button>
            </Col>

            {/* RIGHT: images (1 big + 2 stacked) */}
            <Col md={6} className="mb-4 mb-md-0">
              <Row className="g-3">
                {/* Big image */}
                <Col md={7}>
                  <img
                    src={imgMain}
                    alt="Team working"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "18px",
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
                  <ProgressiveImage
                    src={imgTop}
                    alt="Team 1"
                    style={{
                      width: "100%",
                      borderRadius: "18px",
                      objectFit: "cover",
                      flex: 1,
                    }}
                  />
                  <ProgressiveImage
                    src={imgBottom}
                    alt="Team 2"
                    style={{
                      width: "100%",
                      borderRadius: "18px",
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
