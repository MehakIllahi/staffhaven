import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import contactimg from "../../assets/contactimg.png";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";

const TalkToUsOffcanvas = ({ show, onClose }) => {
  const [emailHover, setEmailHover] = useState(false);
  const [phoneHover, setPhoneHover] = useState(false);

  return (
    <Offcanvas
      show={show}
      onHide={onClose}
      placement="end"
      backdrop={false}
      scroll={true}
      style={{ zIndex: 2000 }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fw-bold fs-3 mb-2">
          Let's Talk
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="text-center d-flex flex-column  mb-2">
        <h2 className="fw-bold">Ready. Steady. Hire.</h2>
        <p className="text-muted">
          Stop wasting time — let's find you some talent!
        </p>

        <img
          src={contactimg}
          alt="Talent illustration"
          className="img-fluid rounded-4 shadow-sm mb-3"
        />

        <div className="d-flex flex-column gap-2">
          {/* Email */}
          <div
            className={`d-flex justify-content-center align-items-center gap-2 rounded px-3 py-3 ${
              emailHover ? "bg-primary-custom" : "bg-light"
            }`}
            style={{ cursor: "pointer", transition: "0.3s" }}
            onMouseEnter={() => setEmailHover(true)}
            onMouseLeave={() => setEmailHover(false)}
          >
            <AiOutlineMail size={20} />
            <a
              href="mailto:Hr@staffhavensolution.com"
              className="text-decoration-none"
              style={{ color: emailHover ? "white" : "black" }}
            >
              hr@staffhavensolution.com
            </a>
          </div>

          {/* Phone */}
          <div
            className={`d-flex justify-content-center align-items-center gap-2 rounded px-3 py-3 ${
              phoneHover ? "bg-primary-custom" : "bg-light"
            }`}
            style={{ cursor: "pointer", transition: "0.3s" }}
            onMouseEnter={() => setPhoneHover(true)}
            onMouseLeave={() => setPhoneHover(false)}
          >
            <CiPhone size={20} />
            <a
              href="tel:14697951858"
              className="text-decoration-none"
              style={{ color: phoneHover ? "white" : "black" }}
            >
              1 (469) 795-1858
            </a>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default TalkToUsOffcanvas;
