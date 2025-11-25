import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  TbLayoutGrid,
  TbLayersSubtract,
  TbShieldCheck,
  TbCircuitChangeover,
  TbMessageCircle,
  TbChecklist,
} from "react-icons/tb";

function OurServices() {
  const servicesTop = [
    {
      icon: <TbLayoutGrid />, // replace with real icon
      title: "We Provide an Individual Approach",
      text: [
        "We treat everyone exactly as they should be – like an individual.",
        "You can be sure that we’ll respect your preferences and ensure you’re happy every step of the process.",
      ],
    },
    {
      icon: <TbLayersSubtract />,
      title: "We Provide a Personable Service",
      text: [
        "Recruiters are people too, contrary to popular belief!",
        "We know that, as recruiters, we’ve got a bad rap. At StaffHaven, we actively work to change it.",
        "Our team values personal connection with clients and candidates alike and we communicate respectfully and clearly without sacrificing friendliness.",
      ],
    },
    {
      icon: <TbShieldCheck />,
      title: "We Champion Equal Opportunities",
      text: [
        "Our customers want only the best talent – and that means variety.",
        "That is why we, along with our customers, put diversity and inclusion at the heart of our hiring practices.",
      ],
    },
  ];

  const servicesBottom = [
    {
      icon: <TbCircuitChangeover />,
      title: "We're a Team That Works For You",
      text: [
        "Our team is focused on one thing: finding you the best career.",
        "That means that you’ll have an entire team of talented recruiters working to connect you with the best opportunities.",
      ],
    },
    {
      icon: <TbMessageCircle />,
      title: "We Value Feedback",
      text: [
        "We make mistakes and we get things wrong – but when we do, we work hard to put them right.",
        "We always take the time to listen to feedback and adjust our practices.",
        "This is why we have so many 5-star reviews!",
      ],
    },
    {
      icon: <TbChecklist />,
      title: "We Support You",
      text: [
        "Our dedicated team works hard to find candidates the perfect careers. Then, we work even harder to ensure it lives up to expectations.",
        "We’ll work closely with you during the onboarding and throughout the first six months to make sure your shiny new job stays just that… shiny.",
      ],
    },
  ];

  const cardStyle = {
    backgroundColor: "#fafafa",
    padding: "1.5rem 0px",
  };

  const iconStyle = {
    fontSize: "2.2rem",
    marginBottom: "1.5rem",
    color: "#4c6fff", // your primary blue
  };

  const titleStyle = {
    fontSize: "1.6rem",
    fontWeight: 600,
    lineHeight: 1.3,
    marginBottom: "1rem",
    color: "#111",
  };

  const textStyle = {
    color: "#555",
    fontSize: "0.98rem",
    lineHeight: 1.7,
    marginBottom: "0.75rem",
  };

  return (
    <section style={{ backgroundColor: "#fdfdfd", padding: "4rem 0" }}>
      <Container>
        {/* First row */}
        <h1>Our Services</h1>
        <Row>
          {servicesTop.map((item, index) => (
            <Col md={4} key={index}>
              <div style={cardStyle}>
                <div style={iconStyle}>{item.icon}</div>
                <h3 style={titleStyle}>{item.title}</h3>
                {item.text.map((p, i) => (
                  <p style={textStyle} key={i}>
                    {p}
                  </p>
                ))}
              </div>
            </Col>
          ))}
        </Row>

        {/* Second row */}
        <Row>
          {servicesBottom.map((item, index) => (
            <Col md={4} key={index}>
              <div style={cardStyle}>
                <div style={iconStyle}>{item.icon}</div>
                <h3 style={titleStyle}>{item.title}</h3>
                {item.text.map((p, i) => (
                  <p style={textStyle} key={i}>
                    {p}
                  </p>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default OurServices;
