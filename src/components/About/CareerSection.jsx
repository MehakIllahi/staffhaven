// AboutSection.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressiveImage from "../Imageloader/ProgressiveImage";
// use your own images
import imgTopLeft from "../../assets/img15.jpg";
import imgTopRightCircle from "../../assets/img16.jpg";
import imgBottomLeftCircle from "../../assets/img17.jpg";
import imgBottomRight from "../../assets/img18.jpg";

const AboutSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#fbf4ec",
        paddingTop: "50px",
      }}
    >
      <Container>
        <Row>
          {/* LEFT: TEXT COLUMN */}
          <Col md={6}>
            <h1
              style={{
                fontSize: "54px",
                lineHeight: "1.05",
                marginBottom: "32px",
                fontWeight: 600,
              }}
            >
              Let&apos;s elevate your
              <br />
              career!
            </h1>

            <div style={{ fontSize: "15px", lineHeight: "1.6" }}>
              <p>
                At Noa we have one mission: To help our customers find and hire
                Simply Great People. It’s that simple.
              </p>
              <p>
                Whether you need to hire your first Machine Learning engineer or
                a Director of Software Engineering, we’ve got you covered.
              </p>
              <p>
                Whether you need to make a one off hire or build an entire team
                from the ground up we have a variety of tools and approaches to
                make sure you get exactly the service you need.
              </p>
              <p>
                We can arm you with critical data to help you fine tune your
                processes and optimise your hiring.
              </p>
              <p>
                Fed up of the “one size fits all” approach of recruiters?{" "}
                <strong>So are we.</strong>
              </p>
              <p>
                That’s why we have three innovative solutions with fair and
                clear pricing so you can find the best fit for your business.
              </p>
              <p>
                We can arm you with critical data to help you fine tune your
                processes and optimise your hiring.
              </p>
              <p>
                Fed up of the “one size fits all” approach of recruiters?{" "}
                <strong>So are we.</strong>
              </p>
              <p>
                That’s why we have three innovative solutions with fair and
                clear pricing so you can find the best fit for your business.
              </p>{" "}
              <p>
                We can arm you with critical data to help you fine tune your
                processes and optimise your hiring.
              </p>
              <p>
                Fed up of the “one size fits all” approach of recruiters?{" "}
                <strong>So are we.</strong>
              </p>
              <p>
                That’s why we have three innovative solutions with fair and
                clear pricing so you can find the best fit for your business.
              </p>
            </div>
          </Col>

          {/* RIGHT: IMAGE COLLAGE */}
          <Col
            md={6}
            className="d-none d-md-flex"
            style={{
              justifyContent: "center",
              alignItems: "center", // 👉 vertically centers collage with text
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto auto auto",
                gap: "16px",
              }}
            >
              {/* top-left rectangle */}
              <div>
                <ProgressiveImage
                  src={imgTopLeft}
                  alt="Team meeting"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    display: "block",
                  }}
                />
              </div>

              {/* top-right circle */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  borderRadius: "999px",
                  justifySelf: "end",
                }}
              >
                <ProgressiveImage
                  src={imgTopRightCircle}
                  alt="Workspace"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* middle row: card */}
              <div
                style={{
                  gridColumn: "1 / span 2",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "18px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "4px",
                    }}
                  >
                    Careers
                  </p>
                  <h4
                    style={{
                      fontSize: "18px",
                      margin: 0,
                    }}
                  >
                    Join the team
                  </h4>
                </div>
                <div style={{ display: "flex" }}>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "#eee",
                        marginLeft: i === 1 ? 0 : -8,
                        border: "2px solid #fff",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* bottom-left circle */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  borderRadius: "999px",
                }}
              >
                <ProgressiveImage
                  src={imgBottomLeftCircle}
                  alt="Office hall"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* bottom-right rectangle */}
              <div>
                <ProgressiveImage
                  src={imgBottomRight}
                  alt="Developer"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
