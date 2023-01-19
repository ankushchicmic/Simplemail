import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  build: {
    outDir:"build",
    minify: false,
    rollupOptions: {
      output: {
				// Default
				// dir: 'dist',
				// With laravel: laravel-app/public/js
				dir: 'build',
				entryFileNames: 'pricing.js',
				assetFileNames: 'pricing.css',
				manualChunks: undefined,
			}
    }
  }
});