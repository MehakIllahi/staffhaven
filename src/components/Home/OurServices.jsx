import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  TbLayoutGrid,
  TbLayersSubtract,
  TbShieldCheck,
  TbUsers,
  TbUserCheck,
  TbBriefcase,
} from "react-icons/tb";

function OurServices() {
  const servicesTop = [
    {
      icon: <TbLayoutGrid size={60} />,
      title: "We Provide a Personalized Recruitment Approach",
      text: [
        "At StaffHaven, we understand that every hiring requirement is unique and deserves a tailored strategy.",
        "Our recruitment process is designed around your business goals, role expectations, and company culture.",
        "This individualized approach leads to better talent alignment and long-term hiring success.",
      ],
    },
    {
      icon: <TbLayersSubtract size={60} />,
      title: "We Provide Human-Centered Staffing Services",
      text: [
        "Recruitment is ultimately about people, not just filling positions. We focus on meaningful relationships.",
        "StaffHaven delivers a professional, transparent, and approachable staffing experience for clients and candidates.",
        "Our team communicates clearly while maintaining a supportive and respectful process.",
      ],
    },
    {
      icon: <TbShieldCheck size={60} />,
      title: "We Provide Equal Opportunity Hiring",
      text: [
        "We believe that strong organizations are built through diverse and inclusive hiring practices.",
        "StaffHaven actively promotes fair, unbiased, and ethical recruitment for every role.",
        "This commitment allows businesses to access broader talent pools and build stronger teams.",
      ],
    },
  ];

  const servicesBottom = [
    {
      icon: <TbUsers size={60} />,
      title: "We Provide Contract & Temporary Staffing",
      text: [
        "Changing business demands require flexible workforce solutions. Our contract staffing meets short-term needs.",
        "We supply skilled professionals who can contribute immediately to projects and operations.",
        "This flexibility helps organizations scale efficiently without long-term obligations.",
      ],
    },
    {
      icon: <TbUserCheck size={60} />,
      title: "We Provide Permanent Hiring Solutions",
      text: [
        "Long-term success depends on hiring the right permanent talent. We manage the full recruitment lifecycle.",
        "From sourcing to placement, StaffHaven ensures high-quality, reliable hires.",
        "Our focus is on skill match, cultural fit, and long-term retention.",
      ],
    },
    {
      icon: <TbBriefcase size={60} />,
      title: "We Provide Recruitment Consulting & Advisory",
      text: [
        "Beyond staffing, we offer expert recruitment consulting to strengthen hiring strategies.",
        "StaffHaven advises organizations on workforce planning and recruitment optimization.",
        "Our consulting services help reduce hiring risks and improve overall talent outcomes.",
      ],
    },
  ];

  const cardStyle = {
    padding: "1.5rem 20px",
  };

  const iconStyle = {
    fontSize: "3rem",
    marginBottom: "1.5rem",
    color: "#004952",
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
    <section className="bg-light" style={{ padding: "4rem 0" }}>
      <Container>
        <h1 className="mb-5">Our Services</h1>

        {/* TOP ROW */}
        <Row>
          {servicesTop.map((item, index) => (
            <Col lg={4} key={index} className="mb-4">
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

        {/* BOTTOM ROW */}
        <Row>
          {servicesBottom.map((item, index) => (
            <Col lg={4} key={index} className="mb-4">
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
