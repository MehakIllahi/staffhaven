import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import img21 from "../../assets/img21.jpg"; // top small image
import img20 from "../../assets/img20.jpg";
import img19 from "../../assets/img19.jpg"; // top small image
import img22 from "../../assets/img22.jpg";
import img23 from "../../assets/img23.jpg";
import img24 from "../../assets/img24.jpg";

const Serviceblog = () => {
  const posts = [
    {
      image: img21,
      title: "Terraform in the UK – Still Critical, But Not a Silver Bullet",
      date: "November 14, 2025",
      tag: "DevOps",
    },
    {
      image: img20,
      title: "Hugging Face – Noa Recruitment Newsletter – November 2025",
      date: "November 03, 2025",
      tag: "Recruitment",
    },
    {
      image: img22,
      title: "Where JavaScript Stands in the UK Right Now",
      date: "October 15, 2025",
      tag: "JavaScript",
    },
    {
      image: img19,
      title: "Where JavaScript Stands in the UK Right Now",
      date: "October 15, 2025",
      tag: "JavaScript",
    },
    {
      image: img23,
      title: "Where JavaScript Stands in the UK Right Now",
      date: "October 15, 2025",
      tag: "JavaScript",
    },
    {
      image: img24,
      title: "Where JavaScript Stands in the UK Right Now",
      date: "October 15, 2025",
      tag: "JavaScript",
    },
  ];

  return (
    <Container>
      <Row className="g-4 m-4">
        {posts.map((post, index) => (
          <Col md={4} key={index}>
            <Card className="shadow-sm border-0 rounded-4 overflow-hidden">
              <Card.Img
                variant="top"
                src={post.image}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <Card.Body className="p-4">
                <Card.Title
                  className="fw-semibold"
                  style={{ fontSize: "1.25rem" }}
                >
                  {post.title}
                </Card.Title>

                <p className="text-muted mt-3 mb-4">{post.date}</p>

                <Button
                  variant="light"
                  className="rounded-pill px-4 py-2 fw-semibold border"
                >
                  {post.tag}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Serviceblog;
