// LifeAtNoaSection.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressiveImage from "../Imageloader/ProgressiveImage";
import lifeImage from "../../assets/img2.jpg"; // change path/name

const LifeAtNoaSection = () => {
  return (
    <section style={{ backgroundColor: "#ffffff", marginBottom: "100px" }}>
      <Container fluid className="p-0">
        <Container>
          <Row className="g-0">
            {/* LEFT: IMAGE */}
            <Col md={6}>
              <ProgressiveImage
                src={lifeImage}
                alt="Staff Haven"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Col>

            {/* RIGHT: TEXT */}
            <Col md={6} style={{ padding: "0px 40px" }}>
              <div style={{ maxWidth: "520px" }}>
                <h2
                  style={{
                    fontSize: "44px",
                    fontWeight: 600,
                    marginBottom: "32px",
                  }}
                >
                  Connecting You with the Best – StaffHaven
                </h2>

                <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
                  Partnering with Staff Haven means gaining access to a
                  dedicated team of recruitment experts who understand your
                  industry and business needs. We focus on connecting you with
                  top-tier talent, ensuring that every candidate we present
                  meets your specific requirements.
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
                  Our process is streamlined and efficient, saving you time and
                  allowing you to focus on growing your business. Staff Haven’s
                  team continuously builds and nurtures talent networks, so we
                  can deliver qualified candidates quickly, even for
                  hard-to-fill roles. We take a personalized approach to
                  recruitment, tailoring our strategies to fit your company
                  culture and hiring objectives.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                  }}
                >
                  Transparency is key — we provide clear communication and fair
                  pricing throughout every stage of the hiring process.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                  }}
                >
                  With Staff Haven, you don’t just fill positions — you build
                  teams that contribute to long-term success.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                  }}
                >
                  We leverage data and insights to improve your hiring strategy,
                  helping you make informed decisions faster. By working with
                  us, you gain a strategic partner who is invested in your
                  company’s growth and talent success.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default LifeAtNoaSection;
