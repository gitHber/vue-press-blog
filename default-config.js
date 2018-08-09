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
          {text: 'text1', link: '/path1/'},
          {text: 'text2', items: [
            {text: 'text2-1', link: '/path2/path2-1/'},
            {text: 'text2-1', link: '/path2/path2-2/'}
          ]}
        ]
      },
      {text: '关于', link: '/about/'},
      {text: 'Github', link: 'https://github.com/gitHber'}
    ],
    sidebar: {
      '/path1/': [
        '',
        '1',
        {
          title: 'group1',
          children: [
            "3"
          ]
        }
      ]
    },
    sidebarDepth: 1,
    lastUpdated: 'Last Updated',
    displayAllHeaders: false,
    activeHeaderLinks: false, // 默认值：true
    search: true,
    searchMaxSuggestions: 10,
    repo: 'gitHber/vue-press-blog',
    docsDir: 'docs',
    // 可选，默认为 master
    docsBranch: 'master',
    // 默认为 true，设置为 false 来禁用
    editLinks: false,
    repoLabel: '查看源码'
  },
  markdown: {
    lineNumbers: true
  }
}