import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FloatingTail from "../Floatingtail/FloatingTail";

const Hero = () => {
  return (
    <>
      <Container fluid className="bg-primary-custom">
        <Container>
          <Row>
            <Col sm={4}>
              <h1>Latest Services</h1>
              <p>
                Stay up to date with the latest tech news and industry data as
                well as helpful tech job seeking tips.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default Hero;
