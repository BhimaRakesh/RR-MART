import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/RR-MART/',  // Make sure to add a comma here after 'react()'
  build: {
    outDir: 'docs',  // Ensure the build output is going to the 'docs' folder
  },
});
