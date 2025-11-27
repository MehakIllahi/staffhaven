import React, { useState } from "react";
import "./FloatingTail.css";

export default function FloatingTail({ children, tooltip }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    setPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  return (
    <div
      className="floating-tail-box"
      onMouseMove={handleMove}
      style={{ cursor: "pointer" }}
    >
      {children}

      <div
        className="floating-tail-tooltip"
        style={{ left: pos.x, top: pos.y - 20 }}
      >
        {tooltip}
      </div>
    </div>
  );
}
