import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const cardsData = [
  {
    title: "Recruitment Services",
    text: "We help you find the right talent quickly and efficiently.",
  },
  {
    title: "HR Consulting",
    text: "Get expert advice for building strong HR processes.",
  },
  {
    title: "Training & Development",
    text: "Upskill your workforce with custom training programs.",
  },
  {
    title: "Payroll Management",
    text: "Accurate and timely payroll processing for your team.",
  },
  {
    title: "Background Verification",
    text: "Thorough candidate verification for safe hiring.",
  },
  {
    title: "Contract Staffing",
    text: "Flexible staffing options for short and long-term projects.",
  },
  {
    title: "Onboarding Support",
    text: "Smooth onboarding experience for new joinees.",
  },
  {
    title: "Performance Management",
    text: "Tools and processes to track employee performance.",
  },
];

function Serviceblog() {
  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Our Services</h2>
      <Row className="g-4">
        {cardsData.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm border-0">
              {/* Replace with your own image */}
              {/* <Card.Img variant="top" src={yourImage} /> */}
              <Card.Body className="d-flex flex-column">
                <Card.Title>{card.title}</Card.Title>
                <Card.Text className="flex-grow-1 text-muted">
                  {card.text}
                </Card.Text>
                <Button
                  variant="primary"
                  size="sm"
                  className="mt-2 align-self-start"
                >
                  Learn more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Serviceblog;
