import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
    // Add other plugins here if needed
  ],
  base: '/positivus/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: true
  }
});
