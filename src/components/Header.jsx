import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import logo from "/logo.jpg";
import styles from "./Header.module.css";
import TalkToUsOffcanvas from "./common/TalkToUsOffcanvas";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showTalk, setShowTalk] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // 🔥 Sticky after hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const triggerHeight = heroSection ? heroSection.offsetHeight : 300;
      setIsSticky(window.scrollY > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-primary-custom ${
          isSticky ? styles.sticky : ""
        }`}
      >
        <div className="container d-flex align-items-center justify-content-between">
          {/* LOGO */}
          <NavLink className="navbar-brand" to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" height="60" width="100" />
          </NavLink>

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
            <ul className="navbar-nav mx-auto gap-5 text-center mt-3 mt-lg-0">
              {[
                { name: "Home", path: "/" },
                { name: "Hire Talent", path: "/hire-talent" },
                { name: "Service", path: "/services" },
                { name: "About", path: "/about" },
              ].map((item) => (
                <li className="nav-item" key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `${styles.navLink} text-white ${
                        isActive ? styles.activeLink : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* CTA BUTTON */}
            <div className="text-center mt-3 mt-lg-0">
              <TalkToUsOffcanvas
                show={showTalk}
                onClose={() => setShowTalk(false)}
              />

              <button
                className={`btn btn-light px-4 rounded-pill fw-semibold ${styles.navButton}`}
                onClick={() => setShowTalk(true)}
              >
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
