import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-bootstrap": ["bootstrap", "react-bootstrap"],
          "vendor-carousel": [
            "embla-carousel-react",
            "embla-carousel-autoplay",
          ],
          "vendor-icons": ["react-icons"],
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "bootstrap",
      "react-bootstrap",
      "embla-carousel-react",
      "embla-carousel-autoplay",
    ],
  },
});
