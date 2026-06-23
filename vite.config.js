import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/51-west-tolentino',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
});
