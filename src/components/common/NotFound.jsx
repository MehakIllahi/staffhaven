import React from "react";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.text}>
        It’s not you. It’s the internet — or the page you’re looking for doesn’t
        exist.
      </p>
      <p style={styles.subText}>
        Please check the URL or return to the homepage.
      </p>

      <a href="/" style={styles.button}>
        Go to Home
      </a>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: "#f5f8f8",
    color: "#004952",
  },
  code: {
    fontSize: "96px",
    fontWeight: 700,
    margin: 0,
  },
  title: {
    fontSize: "28px",
    fontWeight: 600,
    marginTop: "10px",
  },
  text: {
    fontSize: "16px",
    marginTop: "12px",
    maxWidth: "420px",
  },
  subText: {
    fontSize: "14px",
    marginTop: "6px",
    color: "#555",
  },
  button: {
    marginTop: "24px",
    padding: "10px 22px",
    backgroundColor: "#004952",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: 500,
    transition: "0.3s",
  },
};

export default NotFound;
