import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VITE_PORT = process.env.VITE_PORT || 3000;

const alias = {
  '@': path.resolve(__dirname, 'src'),
  '@components': path.resolve(__dirname, 'src/components'),
  '@config': path.resolve(__dirname, 'src/config'),
  '@context': path.resolve(__dirname, 'src/context'),
  '@pages': path.resolve(__dirname, 'src/pages'),
  '@hooks': path.resolve(__dirname, 'src/hooks'),
  '@utils': path.resolve(__dirname, 'src/utils'),
};

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: VITE_PORT,
    host: true,
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias,
  },
});
