import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const serviceBlogs = {
  "engineering-consulting": {
    title: "Engineering & Consulting Solutions",
    content: [
      "Our Engineering & Consulting Solutions are designed to help organizations overcome complex technical and operational challenges. We combine deep industry expertise with innovative thinking to deliver tailored solutions that drive measurable business results.",
      "We provide comprehensive analysis and advisory services, from process optimization and system design to technical strategy and implementation support. Our consultants bring years of hands-on engineering experience and a problem-solving mindset to every project.",
      "We specialize in addressing challenges related to infrastructure modernization, operational efficiency, and product development. By leveraging data-driven insights and best practices, we help organizations make informed decisions that improve performance and reduce risk.",
      "Our approach is collaborative, ensuring that our solutions align with your business objectives and operational capabilities. We work closely with internal teams to ensure seamless integration and sustainable outcomes.",
      "Whether you are launching a new initiative, upgrading existing systems, or optimizing processes, our Engineering & Consulting Solutions ensure your organization stays competitive, efficient, and future-ready.",
    ],
  },

  "project-consulting": {
    title: "Project Consulting Expertise",
    content: [
      "Our Project Consulting services are designed to help organizations plan, manage, and execute projects successfully, from inception to completion. We provide structured frameworks and expert guidance to ensure projects are delivered on time, within budget, and to the highest quality standards.",
      "We assist in project initiation, resource planning, risk assessment, timeline management, and stakeholder communication. Our consultants bring industry-specific methodologies and best practices that reduce uncertainty and enhance project predictability.",
      "Our team ensures alignment across all stakeholders, providing clear milestones, actionable deliverables, and proactive issue resolution. This approach minimizes delays and ensures consistent project progress.",
      "Whether managing complex transformation programs, infrastructure projects, or short-term initiatives, we provide guidance that maximizes ROI and ensures strategic objectives are met.",
      "Through our Project Consulting Expertise, organizations gain operational efficiency, improved collaboration, and confidence that projects will achieve intended outcomes.",
    ],
  },

  "engineering-staffing": {
    title: "Engineering Staffing Services",
    content: [
      "Our Engineering Staffing services connect organizations with top-tier engineering talent to meet both immediate and long-term business needs. We specialize in matching candidates with the right skills, experience, and cultural fit.",
      "We source and screen candidates across multiple engineering disciplines, ensuring you have access to qualified professionals who can contribute from day one. Our rigorous evaluation process guarantees technical competence and reliability.",
      "Our staffing solutions support startups, mid-sized companies, and large enterprises, helping teams scale quickly without compromising on quality. We provide flexible engagement models, including permanent, contract, and project-based hires.",
      "We also offer advisory support to optimize workforce planning, ensuring you have the right mix of skills and resources for each project. This reduces hiring risks and improves team efficiency.",
      "With our Engineering Staffing services, organizations can accelerate project delivery, maintain competitive advantage, and build high-performing engineering teams that drive innovation.",
    ],
  },

  "contract-staffing": {
    title: "Contract Staffing Solutions",
    content: [
      "Our Contract Staffing Solutions provide businesses with flexible workforce options to meet short-term or project-based requirements. This approach allows organizations to scale teams quickly while managing costs effectively.",
      "We offer skilled professionals across various disciplines on a contractual basis, enabling organizations to adapt to changing project demands, seasonal workloads, or specialized skill requirements.",
      "Our rigorous recruitment and onboarding processes ensure that contracted professionals are immediately productive and aligned with organizational standards. Compliance, documentation, and seamless integration are our top priorities.",
      "Contract staffing is ideal for businesses looking to execute specific projects efficiently, fill temporary skill gaps, or enhance team capabilities without committing to permanent hires.",
      "By leveraging our Contract Staffing Solutions, organizations gain operational agility, maintain productivity during peak periods, and ensure timely project delivery with minimal administrative overhead.",
    ],
  },

  "permanent-staffing": {
    title: "Permanent Staffing Services",
    content: [
      "Our Permanent Staffing Services deliver full-cycle recruitment solutions designed to help organizations build stable, high-performing teams. We manage the hiring process from talent sourcing to onboarding, ensuring a seamless experience for both candidates and employers.",
      "We specialize in identifying candidates with the right technical skills, experience, and cultural fit, reducing hiring risks and improving retention rates. Our extensive talent network allows us to find the best professionals for every role.",
      "Our recruitment process is structured and transparent, including screening, interviews, reference checks, and final placement support. This ensures quality hires who can contribute effectively from day one.",
      "We work closely with clients to understand organizational needs, growth plans, and workforce strategies, aligning our recruitment approach to achieve long-term success.",
      "By leveraging our Permanent Staffing Services, organizations gain a reliable talent pipeline, improved employee engagement, and a strong foundation for sustainable growth.",
    ],
  },

  "technology-consulting": {
    title: "Technology Consulting Services",
    content: [
      "Our Technology Consulting Services help businesses navigate the ever-evolving landscape of digital transformation, system modernization, and emerging technologies. We provide strategic guidance to optimize technology investments and drive innovation.",
      "We analyze current systems, processes, and technology stacks to identify areas for improvement and implement solutions that enhance efficiency, reduce costs, and support business goals.",
      "Our team provides expertise in cloud adoption, enterprise integration, cybersecurity, data analytics, and custom software development. We ensure that technology solutions are scalable, secure, and aligned with your organizational strategy.",
      "We work collaboratively with internal teams to design and implement technology initiatives, provide training, and ensure smooth adoption across the organization.",
      "With our Technology Consulting Services, organizations can accelerate digital transformation, improve operational performance, and gain a competitive advantage in the market.",
    ],
  },
};

const ServiceDetails = () => {
  const { slug } = useParams();
  console.log("SLUG:", slug);

  const service = serviceBlogs[slug];

  if (!service) {
    return (
      <Container className="py-5">
        <h2>Service Not Found</h2>
        <p>Slug does not match service data.</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="fw-bold">{service.title}</h1>
      <p className="text-muted mt-3">{service.content}</p>
    </Container>
  );
};

export default ServiceDetails;
