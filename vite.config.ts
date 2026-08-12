import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // es2020 evita polyfill que ninguém no público-alvo precisa.
    target: 'es2020',
    cssCodeSplit: true,
  },
})
