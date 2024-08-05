



import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

import legacy from '@vitejs/plugin-legacy'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // 'vue': '@vue/compat',
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue({}),
    legacy({
      targets: ['defaults', 'not IE 11'],
    })
  ],
  base: process.env.NODE_ENV === "production" ? "./" : "/",

})
  