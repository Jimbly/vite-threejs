import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
  // root: resolve(__dirname, 'client'),
  plugins: [
    checker({
      typescript: true,
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint "./{client,common,server}/**/*.{js,ts}"',
        watchPath: ['./client', './common', './server'],
      },
    }),
  ],
  base: '',
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    fs: {
      allow: ['client', 'common', 'public', 'index.html'],
    },
  },
});
