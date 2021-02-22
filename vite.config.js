import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:  "https://georgius1024.github.io/transitions-demo/",
  plugins: [vue()]
})
