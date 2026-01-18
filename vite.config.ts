import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

export default defineConfig({
  // Root points to the current directory where index.html is located
  root: path.resolve(import.meta.dirname),
  plugins: [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()],
  resolve: {
    alias: {
      // Maps '@' to the root 'src' folder
      "@": path.resolve(import.meta.dirname, "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  build: {
    // Outputs build files to the /dist folder in the root
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
