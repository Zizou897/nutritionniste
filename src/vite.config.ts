import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 5173, // ou un autre port si besoin
    host: true, // pour permettre l'accès externe (ex: via ngrok)
    allowedHosts: ['aa61-196-47-128-170.ngrok-free.app']
  }
})
