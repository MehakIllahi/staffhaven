import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const PrivacyPolicy = () => {
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
              Privacy Policy – StaffHaven
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
                  At <strong>StaffHaven Recruitment & Staffing</strong>, we are
                  committed to protecting your privacy and ensuring your
                  personal information is handled responsibly. This Privacy
                  Policy explains how we collect, use, and safeguard your data
                  when you visit our website or use our services. By using our
                  services, you agree to the practices described in this policy.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Information We Collect */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>Information We Collect</h3>
                <p style={{ color: "#333" }}>
                  We collect personal information such as your name, email
                  address, phone number, and any other details you provide
                  through forms or communications. We also gather non-personal
                  information like browser type, device information, and usage
                  data via cookies and similar technologies.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* How We Use Your Information */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>
                  How We Use Your Information
                </h3>
                <p style={{ color: "#333" }}>
                  Your information is used to enhance our services and provide a
                  better user experience. We may use it to respond to inquiries,
                  process requests, and improve website functionality. With your
                  consent, we may also use your information for marketing
                  communications.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Data Security */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>Data Security</h3>
                <p style={{ color: "#333" }}>
                  We implement appropriate measures to protect your personal
                  information from unauthorized access or disclosure. While no
                  online transmission is completely secure, we follow best
                  practices to safeguard your data.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Third-Party Services */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>Third-Party Services</h3>
                <p style={{ color: "#333" }}>
                  We may share information with trusted third-party service
                  providers for analytics, communications, or other business
                  purposes. These providers are required to handle your data
                  securely and only for the purposes outlined in this policy. We
                  do not sell or rent your personal information.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Your Rights */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>Your Rights</h3>
                <p style={{ color: "#333" }}>
                  You have the right to access, update, or delete your personal
                  information. To exercise these rights or request a copy of
                  your data, please contact us using the details below. You may
                  also opt out of marketing communications at any time.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Changes to Policy */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>Changes to This Policy</h3>
                <p style={{ color: "#333" }}>
                  We may update this Privacy Policy periodically. All updates
                  will be posted on this page, and the revised policy will take
                  effect once posted.
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
                  If you have any questions about this Privacy Policy or how we
                  handle your information, please contact us:
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

export default PrivacyPolicy;
