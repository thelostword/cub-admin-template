import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// eslint-disable-next-line import/no-unresolved
import UnoCSS from 'unocss/vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import { presetWind } from 'unocss';
// eslint-disable-next-line import/no-extraneous-dependencies
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  base: mode === 'development' ? '/' : '/cub-admin-template/',
  plugins: [
    vue(),
    UnoCSS({
      presets: [presetWind({
        variablePrefix: '',
        prefix: '',
      })],
    }),
    svgLoader(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
