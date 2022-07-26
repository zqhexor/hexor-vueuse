import DefaultTheme from 'vitepress/theme';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import DemoBlock from 'vite-plugin-vitepress-demo/dist/demo/index.vue';
import 'vite-plugin-vitepress-demo/dist/demo/code.css';
import './styles/index.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus, {
      locale: zhCn
    });
    app.component('demo', DemoBlock);
  }
};
