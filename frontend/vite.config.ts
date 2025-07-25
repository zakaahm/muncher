import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 5173,
      open: true,       
      strictPort: true, 
    },
    build: {
      sourcemap: true,
      outDir: 'dist',
      emptyOutDir: true,
      minify: 'esbuild',
      target: 'esnext',
    },
    css: {
      devSourcemap: true,
    },
    esbuild: {
      drop: env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    },
  };
});
