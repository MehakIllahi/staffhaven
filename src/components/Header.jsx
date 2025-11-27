import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import logo from "/logo.jpg";

import contactimg from "../assets/contactimg.png";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary-custom">
        <div className="container d-flex align-items-center justify-content-between py-2">
          {/* Logo */}
          <Link
            className="navbar-brand d-flex align-items-center gap-2 text-white"
            to="/"
          >
            <img
              src={process.env.PUBLIC_URL + "/logo.jpg"}
              alt="Logo"
              style={{ height: "100px" }}
            />
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex align-items-center gap-3">
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

            {/* Right Buttons */}
            <div className="d-flex align-items-center gap-3">
              <button
                className="btn btn-light px-4 rounded-pill fw-semibold"
                onClick={handleShow}
              >
                Talk to us
              </button>

              <i className="bi bi-heart text-white fs-4"></i>
              <i className="bi bi-list text-white fs-3"></i>
            </div>
          </div>
        </div>
      </nav>

      {/* ⭐ Beautiful Contact Slide (No form) */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold fs-3">Let's Talk</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body
          className="text-center d-flex flex-column justify-content-center"
          style={{ minHeight: "80vh" }}
        >
          <h2 className="fw-bold mb-3">Ready. Steady. Hire.</h2>
          <p className="text-muted mb-4">
            Stop wasting time — let's find you some talent!
          </p>
          <div className="mb-4">
            <img
              src={contactimg}
              alt="Talent illustration"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>

          {/* Contact Email */}
          <div
            className="mb-4 p-3 shadow-sm rounded-4"
            style={{ background: "#f8f9fa" }}
          >
            <i className="bi bi-envelope-fill fs-4 text-primary"></i>
            <h5 className="mt-2 mb-0">info@thisisnoa.com</h5>
          </div>

          {/* Contact Phone */}
          <div
            className="mb-4 p-3 shadow-sm rounded-4"
            style={{ background: "#f8f9fa" }}
          >
            <i className="bi bi-telephone-fill fs-4 text-primary"></i>
            <h5 className="mt-2 mb-0">01908 010390</h5>
          </div>

          <p className="mt-4 text-muted">We're here to help — anytime!</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
