import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";

const reviews = [
  {
    text: "Brook is lovely, super quick at responding and great at sorting out both the client work and the accounting side of things.",
    name: "Evelin",
    role: "Candidate",
  },
  {
    text: "Really nice to work with getting a new contract. Great communication and follow up.",
    name: "Dainyika",
    role: "Candidate",
  },
  {
    text: "Fantastic support from start to finish. I always felt informed and looked after.",
    name: "ANIKA",
    role: "Candidate",
  },
  {
    text: "Professional, friendly and efficient – couldn’t ask for more from a recruiter.",
    name: "Jordan",
    role: "Candidate",
  },
  {
    text: "Made the whole process so smooth and stress-free. Highly recommended.",
    name: "Sam",
    role: "Candidate",
  },
  {
    text: "They really listened to what I wanted and found the perfect role.",
    name: "Priya",
    role: "Candidate",
  },
];

function ReviewSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // 1 slide = 3 reviews
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div style={{ marginTop: "1.5rem" }}>
        <ul style={{ margin: 0 }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#64748b",
        }}
      />
    ),
  };

  // group reviews into chunks of 3
  const slides = [];
  for (let i = 0; i < reviews.length; i += 3) {
    slides.push(reviews.slice(i, i + 3));
  }

  const cardStyle = {
    textAlign: "center",
    padding: "1.5rem 2rem",
  };

  const starsStyle = {
    color: "#f7b500",
    marginBottom: "1rem",
    fontSize: "1.1rem",
    letterSpacing: "2px",
  };

  const textStyle = {
    fontSize: "0.98rem",
    lineHeight: 1.7,
    color: "#111",
    marginBottom: "1rem",
  };

  const nameStyle = {
    fontWeight: 700,
    fontSize: "1rem",
  };

  return (
    <section style={{ padding: "4rem 0" }}>
      <Container>
        <Slider {...settings}>
          {slides.map((group, idx) => (
            <div key={idx}>
              <Row className="justify-content-center">
                {group.map((review, i) => (
                  <Col md={4} key={i}>
                    <div style={cardStyle}>
                      <div style={starsStyle}>★★★★★</div>
                      <p style={textStyle}>{review.text}</p>
                      <p style={nameStyle}>
                        {review.name},{" "}
                        <span style={{ fontWeight: 700 }}>{review.role}</span>
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
}

export default ReviewSlider;
