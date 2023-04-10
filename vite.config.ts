import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://mateusvrsilva.github.io/Hamburgueria/",
build: {
outDir: 'build'
}


})
