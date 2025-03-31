import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ailmel04.github.io/", // GitHub Pages subpath
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "./index.html", // Ensure Vite modifies this correctly
    },
  },
});
