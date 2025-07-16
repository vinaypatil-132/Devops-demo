import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,                // Enables expect(), describe(), etc. globally
    environment: 'jsdom',         // Simulates the browser DOM
    setupFiles: './setupTests.js' // Optional: sets up jest-dom matchers
  }
})
