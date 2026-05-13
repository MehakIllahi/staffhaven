import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    // Raise chunk warning limit (bootstrap + slick are big by nature)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor libraries into separate cached chunks
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-bootstrap": ["bootstrap", "react-bootstrap"],
          "vendor-carousel": ["react-slick", "slick-carousel", "embla-carousel-react"],
          "vendor-icons": ["react-icons"],
        },
      },
    },
  },
  // Speed up dev server
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "bootstrap", "react-bootstrap"],
  },
});
