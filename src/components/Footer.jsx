// Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/logo.jpg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* ------- TOP SECTION ------- */}
      <Container fluid className={styles.topSection}>
        <Container>
          <Row className="align-items-start" style={{ minHeight: "260px" }}>
            {/* Column 1 */}
            <Col md={3} className="d-flex flex-column justify-content-between">
              <div>
                <h1 className={styles.title}>STAFFHAVEN</h1>
                <p className={`${styles.subtitle}`}>
                  Recruitment &amp; Staffing
                </p>
              </div>

              <div>
                <Link to="/">
                  <img
                    src={logo}
                    alt="StaffHaven Logo"
                    className={styles.logo}
                  />
                </Link>
              </div>
            </Col>

            {/* Spacer */}
            <Col md={3}></Col>

            {/* Company Links */}
            <Col md={3}>
              <h6 className={styles.heading}>Company</h6>

              <p className={styles.linkWrapper}>
                <Link to="/" className={styles.footerLink}>
                  Home
                </Link>
              </p>

              <p className={styles.linkWrapper}>
                <Link to="/services" className={styles.footerLink}>
                  Services
                </Link>
              </p>

              <p className={styles.linkWrapper}>
                <Link to="/hire-talent" className={styles.footerLink}>
                  Hire Talent
                </Link>
              </p>
            </Col>

            {/* Legal Links */}
            <Col md={3}>
              <h6 className={styles.heading}>Legal & Compliance</h6>

              <p className={styles.linkWrapper}>
                <Link to="/about" className={styles.footerLink}>
                  About
                </Link>
              </p>

              <p className={styles.linkWrapper}>
                <Link to="/privacy-policy" className={styles.footerLink}>
                  Privacy Policy
                </Link>
              </p>

              <p className={styles.linkWrapper}>
                <Link to="/terms" className={styles.footerLink}>
                  Terms of use
                </Link>
              </p>

              <p className={styles.linkWrapper}>
                <Link to="/cookie-policy" className={styles.footerLink}>
                  Cookie Policy
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* ------- BOTTOM STRIP ------- */}
      <div className={styles.bottomStrip}>
        <Container>
          <Row>
            <Col className="text-center">
              <span className={styles.copyText}>
                ©2025 Staff Haven | All Rights Reserved
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
