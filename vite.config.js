import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import { researchPages } from "./scripts/research-pages.js"

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  // researchPages writes dist/research/<slug>/index.html for each research page.
  plugins: [react(), tailwindcss(), researchPages()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
