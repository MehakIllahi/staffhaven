import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Container, Row, Col } from "react-bootstrap";

import people1 from "../../assets/people1.jpg";
import people2 from "../../assets/people2.jpg";
import people3 from "../../assets/people3.jpg";
import people4 from "../../assets/people4.jpg";
import people5 from "../../assets/people5.jpg";
import people6 from "../../assets/people6.jpg";

const reviews = [
  {
    text: "Super quick at responding and great at sorting out both the client and candidate.",
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
    text: "Professional, friendly and efficient – couldn't ask for more from a recruiter.",
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

// Group into sets of 3 for desktop
const groupedReviews = [];
for (let i = 0; i < reviews.length; i += 3) {
  groupedReviews.push(reviews.slice(i, i + 3));
}

const ReviewCard = ({ review }) => (
  <div className="d-flex flex-column align-items-center text-center px-3">
    <img
      src={review.image}
      alt={review.name}
      className="rounded-circle mb-3"
      width={120}
      height={120}
      loading="lazy"
      decoding="async"
      style={{ objectFit: "cover" }}
    />
    <div className="mb-3 text-warning fs-5">★★★★★</div>
    <p className="text-dark mb-3" style={{ lineHeight: 1.7 }}>
      {review.text}
    </p>
    <p className="fw-bold mb-0">
      {review.name},{" "}
      <span className="fw-semibold text-muted">{review.role}</span>
    </p>
  </div>
);

// Dot indicators component
const DotButtons = ({ emblaApi }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="d-flex justify-content-center gap-2 mt-4">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => emblaApi.scrollTo(index)}
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            border: "none",
            padding: 0,
            background: index === selectedIndex ? "#333" : "#ccc",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

// Shared carousel hook
const useCarousel = () =>
  useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

function ReviewSlider() {
  const [desktopRef, desktopApi] = useCarousel();
  const [mobileRef, mobileApi] = useCarousel();

  return (
    <section className="py-5">
      <Container>
        {/* DESKTOP / TABLET SLIDER — 3 cards per slide */}
        <div className="d-none d-md-block">
          <div ref={desktopRef} style={{ overflow: "hidden" }}>
            <div className="d-flex">
              {groupedReviews.map((group, slideIndex) => (
                <div key={slideIndex} style={{ flex: "0 0 100%", minWidth: 0 }}>
                  <Row className="justify-content-center">
                    {group.map((review, index) => (
                      <Col md={4} className="px-4" key={index}>
                        <ReviewCard review={review} />
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}
            </div>
          </div>
          <DotButtons emblaApi={desktopApi} />
        </div>

        {/* MOBILE SLIDER — 1 card per slide */}
        <div className="d-md-none">
          <div ref={mobileRef} style={{ overflow: "hidden" }}>
            <div className="d-flex">
              {reviews.map((review, index) => (
                <div key={index} style={{ flex: "0 0 100%", minWidth: 0 }}>
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
          <DotButtons emblaApi={mobileApi} />
        </div>
      </Container>
    </section>
  );
}

export default ReviewSlider;
