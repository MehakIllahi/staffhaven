import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bannerimg from "/bannerimg2.jpg";
import { Link } from "react-router-dom";
import Styles from "./Home.module.css";

function HeroSection() {
  return (
    <Container
      fluid
      className="p-0"
      style={{
        backgroundImage: `url(${bannerimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        backgroundBlendMode: "multiply", // magic for blending
      }}
    >
      {/* Optional: add an extra overlay to darken/lighten */}
      <div
        style={{
          background: "rgba(0, 0, 0, 0.35)",
          width: "100%",
          height: "100%",
        }}
      >
        <Container className="py-5 ">
          <Row className="align-items-center text-center">
            <Col sm={3}></Col>
            <Col sm={6}>
              <h1 className="text-white">
                The Recruitment partner for High <br />
                Growth Companies
              </h1>
              <p className="text-white">
                We pair talented recruiters with proprietary AI to source with
                precision, deliver better candidates, and help you hire faster.
              </p>
              <Link to={"/services"}>
                <button
                  style={{
                    border: "none",
                    padding: "0.75rem 2.5rem",
                    borderRadius: "999px",
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                  className={`bg-primary-custom ${Styles.homepagebtn}`}
                >
                  Explore Services
                </button>
              </Link>
            </Col>
            <Col sm={3}></Col>

            {/* If you still want a separate image on right, you can keep this Col or remove it */}
            {/* <Col sm={6}></Col> */}
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default HeroSection;
