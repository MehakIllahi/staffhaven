import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import people1 from "../../assets/people1.jpg";
import people2 from "../../assets/people2.jpg";
import people3 from "../../assets/people3.jpg";
import people4 from "../../assets/people4.jpg";
import people5 from "../../assets/people5.jpg";
import people6 from "../../assets/people6.jpg";

const reviews = [
  {
    text: " Super quick at responding and great at sorting out both the client and candidate.",
    name: "Evelin",
    role: "Candidate",
    image: people1,
  },
  {
    text: "Really nice to work with getting a new contract. Great communication and follow up.",
    name: "Dainyika",
    role: "Candidate",
    image: people2,
  },
  {
    text: "Fantastic support from start to finish. I always felt informed and looked after.",
    name: "Anika",
    role: "Candidate",
    image: people3,
  },
  {
    text: "Professional, friendly and efficient – couldn’t ask for more from a recruiter.",
    name: "Jordan",
    role: "Candidate",
    image: people4,
  },
  {
    text: "Made the whole process so smooth and stress-free. Highly recommended.",
    name: "Sam",
    role: "Candidate",
    image: people5,
  },
  {
    text: "They really listened to what I wanted and found the perfect role.",
    name: "Priya",
    role: "Candidate",
    image: people6,
  },
];

function ReviewSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Group reviews (3 per slide)
  const slides = [];
  for (let i = 0; i < reviews.length; i += 3) {
    slides.push(reviews.slice(i, i + 3));
  }

  return (
    <section className="py-5">
      <Container>
        <Slider {...settings}>
          {slides.map((group, idx) => (
            <div key={idx}>
              <Row className="justify-content-center">
                {group.map((review, i) => (
                  <Col md={4} className="text-center px-4" key={i}>
                    {/* Avatar */}
                    <img
                      src={review.image}
                      alt={review.name}
                      className="rounded-circle mx-auto d-block mb-3"
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                      }}
                    />

                    {/* Stars */}
                    <div className="mb-3 text-warning fs-5">★★★★★</div>

                    {/* Review Text */}
                    <p className="text-dark mb-3" style={{ lineHeight: 1.7 }}>
                      {review.text}
                    </p>

                    {/* Name */}
                    <p className="fw-bold mb-0">
                      {review.name},{" "}
                      <span className="fw-semibold text-muted">
                        {review.role}
                      </span>
                    </p>
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
