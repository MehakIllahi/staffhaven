import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import logo from "/logo.jpg";
import contactimg from "../assets/contactimg.png";

export default function Header() {
  const [show, setShow] = useState(false);
  const [emailHover, setEmailHover] = useState(false);
  const [phoneHover, setPhoneHover] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary-custom">
        <div className="container d-flex align-items-center justify-content-between py-2">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" style={{ height: "100px" }} />
          </Link>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav mx-auto gap-3">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/hire-talent">
                  Hire Talent
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/services">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </li>
            </ul>

            <button
              className="btn btn-light px-4 rounded-pill fw-semibold"
              onClick={handleShow}
            >
              Talk to us
            </button>
          </div>
        </div>
      </nav>

      {/* Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton style={{ backgroundColor: "#fff" }}>
          <Offcanvas.Title className="fw-bold fs-3" style={{ color: "#000" }}>
            Let's Talk
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body
          className="text-center d-flex flex-column justify-content-center"
          style={{ minHeight: "80vh" }}
        >
          <h2 className="fw-bold mb-5">Ready. Steady. Hire.</h2>

          <p className="text-muted">
            Stop wasting time — let's find you some talent!
          </p>

          <img
            src={contactimg}
            alt="Talent illustration"
            className="img-fluid rounded-4 shadow-sm mb-4"
          />

          {/* Email Block */}
          <div
            className="mb-4 p-3 rounded-4"
            style={{
              background: "#f8f9fa",
              boxShadow: emailHover
                ? "0 8px 20px rgba(13,110,253,0.4)"
                : "0 4px 10px rgba(0,0,0,0.1)",
              transform: emailHover ? "translateY(-4px)" : "translateY(0)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={() => setEmailHover(true)}
            onMouseLeave={() => setEmailHover(false)}
          >
            <i
              className="bi bi-envelope-fill fs-4"
              style={{ color: emailHover ? "#0d6efd" : "#000" }}
            ></i>

            <h5 className="mt-2 mb-0">
              <a
                href="mailto:Hr@staffhavensolution.com"
                style={{
                  textDecoration: "none",
                  color: emailHover ? "#0d6efd" : "#000",
                  transition: "color 0.3s ease",
                }}
              >
                Hr@staffhavensolution.com
              </a>
            </h5>
          </div>

          {/* Phone Block */}
          <div
            className="mb-4 p-3 rounded-4"
            style={{
              background: "#f8f9fa",
              boxShadow: phoneHover
                ? "0 8px 20px rgba(13,110,253,0.4)"
                : "0 4px 10px rgba(0,0,0,0.1)",
              transform: phoneHover ? "translateY(-4px)" : "translateY(0)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={() => setPhoneHover(true)}
            onMouseLeave={() => setPhoneHover(false)}
          >
            <i
              className="bi bi-telephone-fill fs-4"
              style={{ color: phoneHover ? "#0d6efd" : "#000" }}
            ></i>

            <h5 className="mt-2 mb-0">
              <a
                href="tel:14697951858"
                style={{
                  textDecoration: "none",
                  color: phoneHover ? "#0d6efd" : "#000",
                  transition: "color 0.3s ease",
                }}
              >
                1 (469) 795-1858
              </a>
            </h5>
          </div>

          <p className="mt-4 text-muted">We're here to help — anytime!</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
