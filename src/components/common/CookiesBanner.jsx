import React, { useState, useEffect } from "react";

const CookiesBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setShow(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShow(false);
  };

  if (!show) return null;

  const bannerStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#004952",
    color: "white",
    padding: "16px 20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
    boxShadow: "0 -2px 8px rgba(0,0,0,0.2)",
    fontFamily: "'Montserrat', sans-serif",
  };

  const textStyle = {
    margin: 0,
    flex: "1 1 60%",
    fontSize: "14px",
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: "#004952",
    border: "none",
    padding: "10px 18px",
    fontSize: "14px",
    fontWeight: 500,
    borderRadius: "4px",
    cursor: "pointer",
    flex: "1 1 30%",
    maxWidth: "120px",
    marginLeft: "10px",
    transition: "0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#e0e0e0",
  };

  return (
    <div style={bannerStyle}>
      <p style={textStyle}>
        We use cookies to enhance your experience. By continuing to visit this
        site, you agree to our use of cookies.
      </p>
      <button
        style={buttonStyle}
        onClick={handleAccept}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e0e0e0")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "white")}
      >
        Accept
      </button>
    </div>
  );
};

export default CookiesBanner;
