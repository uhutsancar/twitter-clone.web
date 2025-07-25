import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"
import compression from 'vite-plugin-compression'; // Doğru import

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
     compression({
      algorithm: 'gzip'
    })
  
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },

  build: {
    rollupOptions: {
      treeshake: true,
    },
  },

})
