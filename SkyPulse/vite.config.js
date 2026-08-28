import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  preview: {
    allowedHosts: [
      'skypulse-weather-app-vgw4.onrender.com',
      '.onrender.com',
    ],
  },
  server: {
    allowedHosts: [
      'skypulse-weather-app-vgw4.onrender.com',
      '.onrender.com',
    ],
  },
})
