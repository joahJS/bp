import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
        '@' : path.resolve(__dirname, './src'),
        pb$ : path.resolve(__dirname, './public'),
        basepath$ : path.resolve(__dirname, '/pine-boiler-plate'),
      
    }
  },
  build: {},
  //base: '/pine-boiler-plate/',
  historyApiFallback: true,
})
