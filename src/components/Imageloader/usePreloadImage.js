// usePreloadImage.js
import { useEffect } from "react";

export default function usePreloadImage(src) {
  useEffect(() => {
    const img = new Image();
    img.src = src;
  }, [src]);
}
