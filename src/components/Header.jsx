import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import logo from "/logo.jpg";
import contactimg from "../assets/contactimg.png";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const [show, setShow] = useState(false); // Offcanvas state
  const [emailHover, setEmailHover] = useState(false);
  const [phoneHover, setPhoneHover] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary-custom">
        <div className="container d-flex align-items-center justify-content-between py-2">
          {/* LOGO */}
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" style={{ height: "50px" }} />
          </Link>

          {/* MOBILE HAMBURGER */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto gap-3 text-center mt-3 mt-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/hire-talent"
                  onClick={closeMenu}
                >
                  Hire Talent
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/services"
                  onClick={closeMenu}
                >
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/about"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
            </ul>

            {/* CTA BUTTON */}
            <div className="text-center mt-3 mt-lg-0">
              <button
                className="btn btn-light px-4 rounded-pill fw-semibold"
                onClick={() => {
                  setShow(true);
                  closeMenu();
                }}
              >
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* OFFCANVAS */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold fs-3">Let's Talk</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="text-center d-flex flex-column justify-content-center">
          <h2 className="fw-bold ">Ready. Steady. Hire.</h2>
          <p className="text-muted ">
            Stop wasting time — let's find you some talent!
          </p>

          <img
            src={contactimg}
            alt="Talent illustration"
            className="img-fluid rounded-4 shadow-sm mb-2"
          />

          <div className="d-flex flex-column gap-2">
            {/* Email */}
            <div
              className={`d-flex justify-content-center align-items-center gap-2 rounded px-3 py-3 ${
                emailHover ? "bg-primary-custom" : "bg-light text-black"
              }`}
              style={{
                cursor: "pointer",
                transition: "0.3s",
                minWidth: "250px",
              }}
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
                phoneHover ? "bg-primary-custom" : "bg-light text-black"
              }`}
              style={{
                cursor: "pointer",
                transition: "0.3s",
                minWidth: "250px",
              }}
              onMouseEnter={() => setPhoneHover(true)}
              onMouseLeave={() => setPhoneHover(false)}
            >
              <AiOutlinePhone size={20} />
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
    </>
  );
}
