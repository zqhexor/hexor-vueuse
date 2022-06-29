const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: path.resolve(__dirname, 'lib/index.js'),
      name: 'hexor-vueuse',
      fileName: (format) => `hexor-vueuse.${format}.js`
    },
    rollupOptions: {
      external: ["vue-demi"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          "vue-demi": "vueDemi"
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi']
  }
});