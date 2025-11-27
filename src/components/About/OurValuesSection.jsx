// OurValuesSection.js
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressiveImage from "../Imageloader/ProgressiveImage";
// replace with your own image imports
import imgPositivity from "../../assets/imgg1.jpg";
import imgCuriosity from "../../assets/imgg2.jpg";
import imgCommercial from "../../assets/imgg3.jpg";
import imgGettingDone from "../../assets/img7.jpg";

const valuesData = [
  {
    id: 1,
    title: "Positivity",
    description:
      "To us, it means being engaged with our work, staying open-minded, and facing challenges in a process-driven and focused manner.",
    image: imgPositivity,
  },
  {
    id: 2,
    title: "Curiosity",
    description:
      "We ask questions, explore new ideas and constantly look for better ways to do things.",
    image: imgCuriosity,
  },
  {
    id: 3,
    title: "Commercial Mindset",
    description:
      "We think long-term, focus on value, and make decisions that help our customers and our business grow.",
    image: imgCommercial,
  },
  {
    id: 4,
    title: "Getting Things Done",
    description:
      "We take ownership, move quickly and follow through to deliver real results.",
    image: imgGettingDone,
  },
];

const OurValuesSection = () => {
  const [activeId, setActiveId] = useState(1);

  const activeValue = valuesData.find((v) => v.id === activeId);

  return (
    <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
      <Container>
        <Row>
          {/* LEFT: TEXT / VALUES LIST */}
          <Col md={6}>
            <h2
              style={{
                fontSize: "44px",
                fontWeight: 600,
                marginBottom: "40px",
              }}
            >
              Our Values
            </h2>

            {valuesData.map((value) => {
              const isActive = value.id === activeId;

              return (
                <div
                  key={value.id}
                  onClick={() => setActiveId(value.id)}
                  style={{
                    cursor: "pointer",
                    marginBottom: "24px",
                  }}
                >
                  {/* number + title row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "24px",
                        fontWeight: 400,
                      }}
                    >
                      {value.id}
                    </span>
                    <span
                      style={{
                        fontSize: "22px",
                        fontWeight: isActive ? 600 : 400,
                      }}
                    >
                      {value.title}
                    </span>
                  </div>

                  {/* description only for active one */}
                  {isActive && (
                    <div
                      style={{
                        marginTop: "12px",
                        marginLeft: "32px",
                        paddingLeft: "16px",
                        borderLeft: "2px solid #000",
                        maxWidth: "360px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.6",
                          marginBottom: 0,
                        }}
                      >
                        {value.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </Col>

          {/* RIGHT: IMAGE */}
          <Col md={6} className="mt-4 mt-md-0">
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 18px 40px rgba(0,0,0,0.15)",
              }}
            >
              <ProgressiveImage
                src={activeValue.image}
                alt={activeValue.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurValuesSection;
