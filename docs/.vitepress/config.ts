import { defineConfig } from 'vitepress';
import { vitePluginVitepressDemo } from 'vite-plugin-vitepress-demo';

module.exports = defineConfig({
  vite: {
    plugins: [vitePluginVitepressDemo()]
  },
  themeConfig: {
    siteTitle: 'hexOr-vueuse',
    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      { text: 'Functions', link: '/functions/', activeMatch: '/functions/' },
      { text: 'Github', link: 'https://github.com/zqhexor/hexor-vueuse' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/zqhexor/hexor-vueuse' }],
    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Get Started', link: '/guide/getStarted' }
          ]
        }
      ],
      '/functions/': [
        {
          text: 'Functions',
          items: [
            { text: 'GO', link: '/functions/' },
            { text: 'useChecker', link: '/functions/useChecker' },
            { text: 'useRequestWithLoading', link: '/functions/useRequestWithLoading' },
            { text: 'useTable', link: '/functions/useTable' },
            { text: 'useProvideStore/useInjectStore', link: '/functions/useProvideInjectStore' }
          ]
        }
      ]
    }
  }
});
