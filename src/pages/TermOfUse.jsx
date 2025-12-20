import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const TermsOfService = () => {
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
              Terms of Service – StaffHaven
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
                  Welcome to <strong>StaffHaven Recruitment & Staffing</strong>.
                  By accessing our website or using our services, you agree to
                  comply with and be bound by these Terms of Service. Please
                  read them carefully to understand your rights and obligations.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Services Provided */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>Services Provided</h3>
                <p style={{ color: "#333" }}>
                  StaffHaven offers a variety of services, including
                  recruitment, staffing solutions, career consulting, and talent
                  management. By using our services, you acknowledge that they
                  are subject to these Terms of Service.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* User Responsibilities */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>User Responsibilities</h3>
                <p style={{ color: "#333" }}>
                  Users agree to provide accurate information and use our
                  services responsibly. You must not engage in unlawful
                  activities, misuse our platform, or attempt to harm or disrupt
                  our services. Users are also responsible for keeping their
                  account information secure.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Intellectual Property */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>Intellectual Property</h3>
                <p style={{ color: "#333" }}>
                  All content, materials, and intellectual property on the
                  StaffHaven website are protected by copyright and other laws.
                  You may not copy, modify, distribute, or use any materials
                  from our site without prior written consent. Our services and
                  their content remain the property of StaffHaven.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Privacy and Data Protection */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>
                  Privacy and Data Protection
                </h3>
                <p style={{ color: "#333" }}>
                  Protecting your privacy is important to us. All personal
                  information you provide is handled in accordance with our
                  <strong> Privacy Policy</strong>. We only collect and use data
                  as necessary to provide, improve, and personalize our
                  services.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Limitation of Liability */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>Limitation of Liability</h3>
                <p style={{ color: "#333" }}>
                  StaffHaven is not liable for any indirect, incidental, or
                  consequential damages arising from your use of our services.
                  While we strive to provide accurate and timely information, we
                  make no guarantees regarding the outcome or performance of our
                  services.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Amendments and Updates */}
        <Row className="mb-4">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                <h3 style={{ color: "#054a53" }}>Amendments and Updates</h3>
                <p style={{ color: "#333" }}>
                  We may update or revise these Terms of Service from time to
                  time. All changes will be posted on this page, and the updated
                  terms take effect once published. It is your responsibility to
                  review these terms periodically.
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
                  If you have questions or concerns about these Terms of
                  Service, please contact us at:
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

export default TermsOfService;
