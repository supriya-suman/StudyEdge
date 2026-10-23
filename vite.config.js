import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config: React plugin + split big data files into their own chunks
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/highlight.js')) return 'hljs';
          if (id.includes('/src/data/sem/') || id.includes('/src/data/skills/')) return 'syllabus';
        }
      }
    }
  }
});
