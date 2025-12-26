import React from "react";

const FloatingTail = () => {
  return (
    <div
      className="position-absolute w-100"
      style={{
        bottom: "-1px",
        left: 0,
        lineHeight: 0,
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "80px",
          display: "block",
        }}
      >
        <path
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,53.3C672,53,768,75,864,80C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,120L0,120Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};

export default FloatingTail;
