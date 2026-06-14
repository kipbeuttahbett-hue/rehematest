import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { lovableViteConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  plugins: [
    react(),
    lovableViteConfig({
      nitro: true, 
    }),
  ],
});