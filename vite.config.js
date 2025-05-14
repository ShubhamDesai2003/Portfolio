import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["dotenv"], // Exclude dotenv from pre-bundling
  },
  build: {
    rollupOptions: {
      external: ["dotenv"],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'lucide-react'],
          firebase: ['firebase/app', 'firebase/firestore', 'firebase/storage', 'firebase/analytics']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});