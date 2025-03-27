import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    open: true, // Automatically open the app in the browser on server start
    port: 3000, // Specify the port number
  },
  build: {
    outDir: 'dist', // Specify the output directory
  },
});