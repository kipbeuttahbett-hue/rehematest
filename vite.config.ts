import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// Import the package as a default "pkg" to fix the SyntaxError
import lovablePkg from "@lovable.dev/vite-tanstack-config";

// Extract the config tool from the package manually
const { lovableViteConfig } = lovablePkg;

export default defineConfig({
  plugins: [
    react(),
    lovableViteConfig({
      nitro: true, 
    }),
  ],
});