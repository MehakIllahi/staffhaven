import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressiveImage from "../Imageloader/ProgressiveImage";
import officeImg from "../../assets/img3.jpg"; // top small image
import peopleImg from "../../assets/img7.jpg"; // bottom small image
import { Link } from "react-router-dom";

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
              Join StaffHaven?
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              Our staff have one mission: to help our customers find and hire
              Simply Great People and to deliver an amazing experience to the
              candidates that we work with.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              Our role is to delight those who we come into contact with. We
              want Simply Great People in StaffHaven. Traits that we look for
              include honesty, humility and insatiable curiosity.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Our culture is built on trust and the desire to do the right
              thing, always. Sounds like you? Give us a call, we want to talk.
            </p>

            {/* buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link to={"/about"} className="text-decoration-none">
                <button
                  className=""
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
