import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite copies this folder into the final build and serves its files directly.
  // That keeps the resume as a static asset while the React app stays fully CSR.
  publicDir: 'static',
})
