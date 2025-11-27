// ProgressiveImage.js
import { useState } from "react";
import usePreloadImage from "./usePreloadImage";

export default function ProgressiveImage({ src, placeholder, alt }) {
  const [loaded, setLoaded] = useState(false);

  usePreloadImage(src);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
        overflow: "hidden",
      }}
    >
      {/* Placeholder (blurred) */}
      <img
        src={placeholder}
        alt=""
        style={{
          width: "100%",
          filter: "blur(10px)",
          opacity: loaded ? 0 : 1,
          transition: "opacity 0.4s ease",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {/* Main image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        loading="eager"
        fetchPriority="high"
        style={{
          width: "100%",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.4s ease",
          display: "block",
        }}
      />
    </div>
  );
}
