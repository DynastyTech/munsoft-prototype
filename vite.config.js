import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Remove base path for Vercel deployment (root domain)
  base: '/',
  server: {
    port: 3000,
    open: true
  }
})

