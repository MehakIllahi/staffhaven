// LifeAtNoaSection.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressiveImage from "../Imageloader/ProgressiveImage";
// use your own image file here
import lifeImage from "../../assets/img14.jpg"; // change path/name

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
                alt="Life at Noa"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Col>

            {/* RIGHT: TEXT */}
            <Col
              md={6}
              className="d-flex align-items-center"
              style={{ padding: "60px 40px" }}
            >
              <div style={{ maxWidth: "520px" }}>
                <h2
                  style={{
                    fontSize: "44px",
                    fontWeight: 600,
                    marginBottom: "32px",
                  }}
                >
                  Life at Noa
                </h2>

                <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
                  Our staff have one mission: to help our customers find and
                  hire Simply Great People and to deliver an amazing experience
                  to the candidates that we work with.
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
                  Ok, so that’s actually two missions… but you get the point.
                  Our role is to delight those who we come into contact with.
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
                  We want Simply Great People in Noa. Traits that we look for
                  include, honesty, humility and insatiable curiosity.
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
                  Our culture is built on trust and the desire to do the right
                  thing, always.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    marginBottom: 0,
                  }}
                >
                  Sounds like you? Give us a call, we want to talk.
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
