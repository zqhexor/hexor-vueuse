export default {
  themeConfig: {
    siteTitle: 'hexOr-vueuse',
    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      { text: 'Functions', link: '/functions/', activeMatch: '/functions/' },
      { text: 'Github', link: 'https://github.com/zqhexor' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/zqhexor' }],
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
            { text: 'Index', link: '/functions/' },
            { text: 'useChecker', link: '/functions/useChecker' }
          ]
        }
      ]
    }
  }
};
