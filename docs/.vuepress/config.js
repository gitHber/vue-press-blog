module.exports = {
  base: '/vue-press-blog',
  title: 'Hello vuepress',
  description: 'Just play nothing',
  configureWebpack: {
    resolve: {
      alias: {
        'video': '../static/video',
        'img': '../static/img'
      }
    }
  },
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      // 使用更多 markdown-it 插件！
      // md.use(require('markdown-it-xxx'))
    }
  }
}