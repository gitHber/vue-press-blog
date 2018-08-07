module.exports = {
  base: '/',
  title: '个人主页',
  description: '月肃生的blog',
  head: [
    ['link', {rel: 'icon', href: '/img/logo.png'}],
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['link', {rel: 'apple-touch-icon', href: '/img/logo.png'}]
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '博文',
        items: [
          {text: 'React', link: '/react/'},
          {text: 'Vue', link: '/vue/'},
          {text: 'H5', items: [
            {text: 'javascript', link: '/h5/javascript/'},
            {text: 'css', link: '/h5/css/'},
            {text: 'html', link: '/h5/html/'},
          ]},
          {text: 'backend', link: '/backend/'},
        ]
      },
      {text: '关于', link: '/about/'},
      {text: 'Github', link: 'https://github.com/gitHber'}
    ],
    // sidebar: 'auto',
    sidebar: {
      '/react/': [
        '',
        '1'
      ],
      '/vue/': [
        ''
      ],
      '/h5/javascript/': [
        '',
        '1'
      ],
      '/h5/html/': [
        '',
        '1'
      ],
      '/h5/css/': [
        ''
      ],
      '/backend/': [
        '',
        'mysql'
      ],
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    displayAllHeaders: false,
    activeHeaderLinks: false, // 默认值：true
    search: true,
    searchMaxSuggestions: 10,
    repo: 'gitHber/vue-press-blog',
    repoLabel: '查看源码'
  },
  markdown: {
    lineNumbers: true
  }
}