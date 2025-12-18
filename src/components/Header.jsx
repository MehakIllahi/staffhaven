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
            <img src={logo} alt="Logo" style={{ height: "50px" }} />
          </Link>

          {/* 🔥 MOBILE BURGER BUTTON */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU (DESKTOP + MOBILE) */}
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav mx-auto gap-3 text-center">
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

            <div className="text-center mt-3 mt-lg-0">
              <button
                className="btn btn-light px-4 rounded-pill fw-semibold"
                onClick={handleShow}
              >
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* OFFCANVAS (UNCHANGED) */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold fs-3">Let's Talk</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="text-center d-flex flex-column justify-content-center">
          <h2 className="fw-bold mb-4">Ready. Steady. Hire.</h2>
          <p className="text-muted mb-4">
            Stop wasting time — let's find you some talent!
          </p>

          <img
            src={contactimg}
            alt="Talent illustration"
            className="img-fluid rounded-4 shadow-sm mb-4"
          />

          <p>
            <a href="mailto:Hr@staffhavensolution.com">
              Hr@staffhavensolution.com
            </a>
          </p>

          <p>
            <a href="tel:14697951858">1 (469) 795-1858</a>
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
