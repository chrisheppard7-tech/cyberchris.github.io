import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // Sets root to the current directory (where index.html is)
  root: path.resolve(import.meta.dirname), 
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  build: {
    // Ensures the build goes to /dist in the root
    outDir: path.resolve(import.meta.dirname, "dist"), 
    emptyOutDir: true,
  },
});
