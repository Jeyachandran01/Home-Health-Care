import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import coreAlias from '@core/alias';
import path from 'path';
import { dependencies } from './package.json';

const reactDeps = Object.keys(dependencies).filter(
  (key) => key === 'react' || key.startsWith('react-')
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 4000,
  },
  resolve: {
    alias: [
      ...coreAlias,
      {
        find: '@lib',
        replacement: path.join(__dirname, './src/lib'),
      },
      {
        find: '@router',
        replacement: path.join(__dirname, './src/router'),
      },
      {
        find: '@pages',
        replacement: path.join(__dirname, './src/pages'),
      },
      {
        find: '@styles',
        replacement: path.join(__dirname, './src/styles'),
      },
    ],
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: reactDeps,
          ...Object.keys(dependencies).reduce((chunks, name) => {
            if (!reactDeps.includes(name)) {
              return {
                ...chunks,
                [name]: [name],
              };
            }
            return chunks;
          }, {}),
        },
      },
    },
    external: Object.keys(dependencies),
  },
});
