import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo_transparent.png";
const Header = () => {
  return (
    <header
      style={{
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className="bg-primary-custom"
    >
      <img src={logo} alt="Logo" width="100px" height="100px" />
      <nav>
        <Link
          to="/"
          className="text-primary-highlight nav-link-custom text-decoration-none"
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
        >
          About
        </Link>
        <Link
          to="/services"
          style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
        >
          Services
        </Link>
        <Link
          to="/blog"
          style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
