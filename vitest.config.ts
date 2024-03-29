import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
    reporters: 'verbose',
    deps: {
      inline: ['vue2', '@vue/composition-api', 'vue-demi']
    },
    coverage: {
      include: ['src/*'],
      clean: true
      //       lines: 99,
      //       statements: 99
    }
  }
});
