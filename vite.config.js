import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

/* eslint-disable */
import UnoCSS from 'unocss/vite';
import { presetWind } from 'unocss';
import Icons from 'unplugin-icons/vite';
/* eslint-enable */

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
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
