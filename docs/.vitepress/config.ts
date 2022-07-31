import { defineConfig } from 'vitepress';
import { vitePluginVitepressDemo } from 'vite-plugin-vitepress-demo';

module.exports = defineConfig({
  vite: {
    plugins: [vitePluginVitepressDemo()]
  },
  themeConfig: {
    siteTitle: 'hexOr-vueuse',
    nav: [
      { text: '指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '文档', link: '/functions/', activeMatch: '/functions/' },
      {
        text: '1.0.3',
        items: [
          {
            text: 'CHANGELOG',
            link: 'https://github.com/zqhexor/hexor-vueuse/blob/master/CHANGELOG.md'
          }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/zqhexor/hexor-vueuse' }],
    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getStarted' }
          ]
        }
      ],
      '/functions/': [
        {
          text: '文档',
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
