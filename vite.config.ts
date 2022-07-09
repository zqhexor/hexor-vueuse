import { resolve } from 'path';
import { defineConfig } from 'vite';

module.exports = defineConfig({
  build: {
    // target: 'es2015',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      // name 则是暴露的全局变量，在 formats 包含 'umd' 或 'iife' 时是必须的
      name: 'hexor-vueuse',
      fileName: 'index',
      formats: ['es', 'cjs', 'umd']
      // fileName: (format) => `hexor-vueuse.${format}.js`
    },
    rollupOptions: {
      external: ['vue-demi'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          'vue-demi': 'vueDemi'
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi']
  }
});
