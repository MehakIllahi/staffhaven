import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import logo from "/logo.jpg";
import contactimg from "../assets/contactimg.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar bg-primary-custom py-2">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" style={{ height: "60px" }} />
          </Link>

          {/* Desktop Button */}
          <div className="d-none d-lg-block">
            <button
              className="btn btn-light px-4 rounded-pill fw-semibold"
              onClick={() => setContactOpen(true)}
            >
              Talk to us
            </button>
          </div>

          {/* Mobile Burger */}
          <button
            className="btn d-lg-none border-0"
            onClick={() => setMenuOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OFFCANVAS */}
      <Offcanvas
        show={menuOpen}
        onHide={() => setMenuOpen(false)}
        placement="end"
        className="d-lg-none"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logo} alt="Logo" style={{ height: "50px" }} />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="text-center">
          <ul className="list-unstyled fs-4 fw-semibold">
            <li className="mb-3">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/hire-talent" onClick={() => setMenuOpen(false)}>
                Hire Talent
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
          </ul>

          <button
            className="btn btn-primary w-100 rounded-pill py-2"
            onClick={() => {
              setMenuOpen(false);
              setContactOpen(true);
            }}
          >
            Talk to us
          </button>
        </Offcanvas.Body>
      </Offcanvas>

      {/* CONTACT OFFCANVAS */}
      <Offcanvas
        show={contactOpen}
        onHide={() => setContactOpen(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold">Let's Talk</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="text-center">
          <h3 className="fw-bold mb-3">Ready. Steady. Hire.</h3>
          <p className="text-muted mb-4">
            Stop wasting time — let's find you some talent!
          </p>

          <img
            src={contactimg}
            alt="Contact"
            className="img-fluid rounded-4 mb-4"
          />

          <p className="fw-semibold mb-1">Email</p>
          <a href="mailto:Hr@staffhavensolution.com">
            Hr@staffhavensolution.com
          </a>

          <p className="fw-semibold mt-4 mb-1">Phone</p>
          <a href="tel:14697951858">1 (469) 795-1858</a>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
