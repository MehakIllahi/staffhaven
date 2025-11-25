// Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary-custom">
      {/* ------- TOP SECTION ------- */}
      <Container fluid style={{ paddingTop: "24px", paddingBottom: "24px" }}>
        <Container>
          <Row
            className="align-items-start"
            style={{
              minHeight: "260px", // height of the whole row
            }}
          >
            {/* Column 1: StaffHaven title (top) + logo at very bottom */}
            <Col
              md={3}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // push top + bottom apart
              }}
            >
              {/* TOP: TEXT */}
              <div>
                <h1
                  style={{
                    color: "#ffffff",
                    fontSize: "28px",
                    fontWeight: 500,
                    marginBottom: "8px",
                  }}
                >
                  StaffHaven
                </h1>
                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    marginBottom: 0,
                    opacity: 0.8,
                  }}
                >
                  Recruitment &amp; Staffing
                </p>
              </div>

              {/* BOTTOM: LOGO AT VERY BOTTOM OF COLUMN */}
              <div>
                <img
                  src={logo}
                  alt="StaffHaven Logo"
                  style={{
                    width: "140px",
                    height: "auto",
                    display: "block",
                    marginTop: "50px",
                  }}
                />
              </div>
            </Col>

            {/* Empty spacer column */}
            <Col md={3} style={{ marginBottom: "16px" }}></Col>

            {/* Column: Hire Talent (1) */}
            <Col md={3} style={{ marginBottom: "16px" }}>
              <h6
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#ffffff",
                }}
              >
                Hire Talent
              </h6>

              {[
                "Product Managers/Owners",
                "Project Manager",
                "Python",
                "Software Test Automation",
              ].map((item) => (
                <p key={item} style={{ fontSize: "14px", marginBottom: "8px" }}>
                  <a
                    href="#!"
                    style={{ color: "#ffffff", textDecoration: "none" }}
                  >
                    {item}
                  </a>
                </p>
              ))}
            </Col>

            {/* Column: Hire Talent (2) + Company */}
            <Col md={3} style={{ marginBottom: "16px" }}>
              <h6
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#ffffff",
                }}
              >
                Hire Talent
              </h6>

              {[
                "Presales",
                "DevOps",
                ".NET",
                "JavaScript Developer",
                "PHP",
              ].map((item) => (
                <p key={item} style={{ fontSize: "14px", marginBottom: "8px" }}>
                  <a
                    href="#!"
                    style={{ color: "#ffffff", textDecoration: "none" }}
                  >
                    {item}
                  </a>
                </p>
              ))}
            </Col>
          </Row>
        </Container>
      </Container>

      {/* ------- BOTTOM STRIP SECTION ------- */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "16px",
                  fontSize: "13px",
                  color: "#ffffff",
                }}
              >
                <span>© 2025 StaffHaven</span>
                <a
                  href="#privacy"
                  style={{ color: "#ffffff", textDecoration: "none" }}
                >
                  Privacy Policy
                </a>
                <a
                  href="#cookie"
                  style={{ color: "#ffffff", textDecoration: "none" }}
                >
                  Cookie Policy
                </a>
                <a
                  href="#agency"
                  style={{ color: "#ffffff", textDecoration: "none" }}
                >
                  Designed by London Web Agency
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
