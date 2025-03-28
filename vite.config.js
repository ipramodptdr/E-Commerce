import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import reactRouterDom from 'react-router-dom';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      external: [reactRouterDom],
    },
  },
})
