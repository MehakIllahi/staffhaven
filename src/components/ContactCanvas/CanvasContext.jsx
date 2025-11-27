import { createContext, useContext, useState } from "react";

const CanvasContext = createContext();

export function CanvasProvider({ children }) {
  const [showCanvas, setShowCanvas] = useState(false);

  const openCanvas = () => setShowCanvas(true);
  const closeCanvas = () => setShowCanvas(false);

  return (
    <CanvasContext.Provider value={{ showCanvas, openCanvas, closeCanvas }}>
      {children}
    </CanvasContext.Provider>
  );
}

export function useCanvas() {
  return useContext(CanvasContext);
}
