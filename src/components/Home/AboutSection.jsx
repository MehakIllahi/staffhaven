import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressiveImage from "../Imageloader/ProgressiveImage";
import officeImg from "../../assets/img3.jpg"; // top small image
import peopleImg from "../../assets/img7.jpg"; // bottom small image
import { Link } from "react-router-dom";
import Styles from "./Home.module.css";
function AboutSection() {
  return (
    <section style={{ padding: "4rem 0 5rem" }}>
      <Container>
        <Row className="align-items-center">
          {/* LEFT: text */}
          <Col md={6}>
            <h2
              style={{
                fontSize: "2.6rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
              }}
            >
              Join STAFFHAVEN?
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              At StaffHaven, our mission is simple—to help organizations hire
              exceptional talent while delivering a positive, transparent, and
              respectful experience to every candidate we work with.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              We are passionate about connecting Simply Great People with Simply
              Great Opportunities. Whether supporting our clients or guiding
              candidates through their career journey, we focus on quality,
              integrity, and long-term success.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Our culture is built on trust, accountability, and doing the right
              thing—always. We value honesty, humility, and curiosity, and we
              believe great recruitment starts with great people. If you share
              our values and want to make a meaningful impact in the world of
              talent and staffing, we’d love to hear from you.
            </p>

            {/* buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link to={"/about"} className="text-decoration-none">
                <button
                  style={{
                    padding: "0.9rem 1.9rem",
                    borderRadius: "999px",
                    border: "none",
                    backgroundColor: "#004952",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  className={`${Styles.homepagebtn}`}
                >
                  About Us <span>➜</span>
                </button>
              </Link>
              <Link to={"/hire-talent"} className="text-decoration-none">
                <button
                  style={{
                    padding: "0.9rem 1.9rem",
                    borderRadius: "999px",
                    border: "1.5px solid #004952",
                    backgroundColor: "#fff",
                    color: "#004952",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  className={`${Styles.homerevpagebtn}`}
                >
                  Hire Talent <span>➜</span>
                </button>
              </Link>
            </div>
          </Col>

          {/* RIGHT: images */}
          <Col
            md={6}
            className="mt-4 mt-md-0"
            style={{ position: "relative", minHeight: "320px" }}
          >
            {/* big rectangle image */}
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

            {/* overlapping round/oval image */}
            <div
              style={{
                position: "absolute",
                right: "-30px",
                bottom: "-40px",
                width: "55%",
                borderRadius: "50% 50% 50% 50%",
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
