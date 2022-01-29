import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: path.resolve(__dirname, 'colorpicker-v3/dist'),
    lib: {
      entry: path.resolve(__dirname, '/packages/ColorPicker/index.ts'),
      name: 'colorpicker-v3',
      fileName: (format) => `colorpicker-v3.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
