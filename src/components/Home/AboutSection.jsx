import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressiveImage from "../Imageloader/ProgressiveImage";
import officeImg from "../../assets/img3.jpg";
import peopleImg from "../../assets/img7.jpg";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section style={{ padding: "4rem 0 5rem" }}>
      <Container>
        <Row className="align-items-center">
          {/* LEFT: text */}
          <Col md={6} className="text-center text-md-start">
            <h2
              style={{
                fontSize: "2.6rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
              }}
            >
              Join STAFFHAVEN?
            </h2>

            <p style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              At StaffHaven, our mission is simple—to help organizations hire
              exceptional talent while delivering a positive, transparent, and
              respectful experience to every candidate we work with.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              We are passionate about connecting Simply Great People with Simply
              Great Opportunities. Whether supporting our clients or guiding
              candidates through their career journey, we focus on quality,
              integrity, and long-term success.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              Our culture is built on trust, accountability, and doing the right
              thing—always. We value honesty, humility, and curiosity.
            </p>

            {/* buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start mt-4">
              <Link to="/about" className="text-decoration-none">
                <button
                  className="w-100 w-sm-auto"
                  style={{
                    padding: "0.9rem 1.9rem",
                    borderRadius: "999px",
                    border: "none",
                    backgroundColor: "#004952",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  About Us ➜
                </button>
              </Link>

              <Link to="/hire-talent" className="text-decoration-none">
                <button
                  className="w-100 w-sm-auto"
                  style={{
                    padding: "0.9rem 1.9rem",
                    borderRadius: "999px",
                    border: "1.5px solid #004952",
                    backgroundColor: "#fff",
                    color: "#004952",
                    fontWeight: 600,
                  }}
                >
                  Hire Talent ➜
                </button>
              </Link>
            </div>
          </Col>

          {/* RIGHT: images */}
          <Col
            md={6}
            className="mt-5 mt-md-0 d-none d-md-block
"
            style={{ position: "relative" }}
          >
            {/* big image */}
            <div
              style={{
                width: "100%",
                borderRadius: "18px",
                overflow: "hidden",
              }}
            >
              <ProgressiveImage
                src={officeImg}
                alt="Office"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* overlapping image (desktop only) */}
            <div
              className="d-none d-md-block "
              style={{
                position: "absolute",
                right: "-30px",
                bottom: "-40px",
                width: "55%",
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                backgroundColor: "#fff",
              }}
            >
              <ProgressiveImage
                src={peopleImg}
                alt="Team"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* mobile image (non-overlapping) */}
            <div
              className="d-md-none mt-4 d-none d-md-block"
              style={{
                width: "70%",
                margin: "0 auto",
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <ProgressiveImage
                src={peopleImg}
                alt="Team"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
