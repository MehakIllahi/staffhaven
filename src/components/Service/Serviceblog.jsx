import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import img21 from "../../assets/img21.jpg";
import img20 from "../../assets/img20.jpg";
import img19 from "../../assets/img19.jpg";
import img22 from "../../assets/img22.jpg";
import img23 from "../../assets/img23.jpg";
import img24 from "../../assets/img24.jpg";
import styles from "./service.module.css";

const Serviceblog = () => {
  const posts = [
    {
      image: img21,
      title: "Engineering & Consulting Solutions",
      desc: "Trusted US-based engineering consulting tailored to your business needs.",
      slug: "engineering-consulting",
    },
    {
      image: img20,
      title: "Project Consulting Expertise",
      desc: "Delivering strategic guidance and execution support across diverse projects.",
      slug: "project-consulting",
    },
    {
      image: img22,
      title: "Engineering Staffing Services",
      desc: "Connecting top engineering talent with leading organizations worldwide.",
      slug: "engineering-staffing",
    },
    {
      image: img19,
      title: "Contract Staffing Solutions",
      desc: "Flexible staffing for short-term, seasonal, and specialized project needs.",
      slug: "contract-staffing",
    },
    {
      image: img23,
      title: "Permanent Staffing Services",
      desc: "End-to-end recruitment solutions for long-term and critical roles.",
      slug: "permanent-staffing",
    },
    {
      image: img24,
      title: "Technology Consulting Services",
      desc: "Empowering businesses with modern technology and expert consulting.",
      slug: "technology-consulting",
    },
  ];

  return (
    <Container>
      <Row className="g-4 my-4">
        {posts.map((post, index) => (
          <Col lg={4} md={6} sm={12} key={index}>
            <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden">
              <Card.Img
                variant="top"
                src={post.image}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <Card.Body className="p-4 d-flex flex-column">
                <Card.Title className="fw-semibold fs-5">
                  {post.title}
                </Card.Title>

                <p className="text-muted mt-3">{post.desc}</p>

                <Button
                  as={Link}
                  to={`/services/${post.slug}`}
                  className={`rounded-pill px-4 mt-auto align-self-start bg-primary-custom ${styles.homepagebtn}`}
                >
                  Explore
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
