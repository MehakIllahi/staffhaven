import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const CookiePolicy = () => {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <Container>
        {/* Page Title */}
        <Row className="mb-4">
          <Col>
            <h1 style={{ color: "#054a53", fontWeight: "700" }}>
              Cookie Policy – StaffHaven
            </h1>
            <p style={{ color: "#054a53", opacity: 0.8 }}>
              Effective Date: December 2025
            </p>
          </Col>
        </Row>

        {/* Introduction */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <p style={{ color: "#333" }}>
                  At <strong>StaffHaven Recruitment & Staffing</strong>, we
                  value your privacy and are committed to providing a secure and
                  transparent browsing experience. This Cookie Policy explains
                  how we use cookies and similar technologies on our website to
                  improve your experience and ensure proper functionality.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* What are cookies */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>What Are Cookies?</h3>
                <p style={{ color: "#333" }}>
                  Cookies are small text files stored on your device when you
                  visit a website. They help websites remember your preferences,
                  track your interactions, and enhance the overall user
                  experience.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* How we use cookies */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>How We Use Cookies</h3>
                <ul style={{ color: "#333" }}>
                  <li>Ensure website functionality and smooth operation</li>
                  <li>Enhance user experience by remembering preferences</li>
                  <li>Analyze traffic and optimize content</li>
                  <li>Deliver personalized content and services</li>
                </ul>
                <p style={{ color: "#333" }}>
                  Types of cookies we use:
                  <ul>
                    <li>
                      <strong>Essential Cookies:</strong> Required for website
                      operation.
                    </li>
                    <li>
                      <strong>Performance & Functional Cookies:</strong> Enhance
                      functionality and collect analytics.
                    </li>
                    <li>
                      <strong>Targeting Cookies:</strong> Deliver personalized
                      ads based on interests.
                    </li>
                  </ul>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Managing Cookies */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>Managing Cookies</h3>
                <p style={{ color: "#333" }}>
                  You can manage or disable cookies through your browser
                  settings. Please note that disabling cookies may affect some
                  website features or functionality.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Third-party Cookies */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>Third-Party Cookies</h3>
                <p style={{ color: "#333" }}>
                  We may allow third-party service providers to place cookies to
                  help us with analytics or advertisements. These cookies are
                  subject to the respective providers' privacy policies and are
                  not controlled by StaffHaven.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Consent */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>Consent</h3>
                <p style={{ color: "#333" }}>
                  By using our website, you consent to the use of cookies as
                  described in this policy. You can withdraw your consent at any
                  time by adjusting your browser settings.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>Contact Us</h3>
                <p style={{ color: "#333" }}>
                  For any questions about this Cookie Policy or our use of
                  cookies, please contact us at:
                </p>
                <ul style={{ color: "#333" }}>
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:hr@staffhavensolution.com"
                      style={{ color: "#054a53" }}
                    >
                      hr@staffhavensolution.com
                    </a>
                  </li>
                  <li>Phone: 1 (469) 795-1858</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CookiePolicy;
