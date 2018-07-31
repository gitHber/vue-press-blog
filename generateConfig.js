var fs = require('fs')
var path = require('path')

var config = require('./default-config')
var sidebar = {}
var items = []

// 生成nav
function generateNavByPath(dir, parent){
  var items = []
  fs.readdirSync(dir).forEach(function(file){
    if(file ==='.vuepress' || file === 'about' || file === 'README.md') {
      return
    }
    var pathname = path.join(dir, file)
    if(isDirectory(pathname)){
      // 判断有没有子目录
      if(isNoChildDirectory(pathname)){
        items.push({text: file, items: generateNavByPath(pathname, `${parent + file}/`)})
      } else {
        items.push({text: file, link: `${parent + file}/`})
      }
    }
  })
  return items
}
// 生成sidebar
function generateSidebarByItems(items, sidebar) {
  var sidebar = {}
  items.forEach(item => {
    if (item.link) {
      let files = ['']
      fs.readdirSync(path.join(__dirname, 'docs', item.link)).forEach(file => {
        if (file === 'README.md') {
          return
        }
        files.push(getFileName(file))
        sidebar[item.link] = files
      })
    } else {
      sidebar = {...sidebar, ...generateSidebarByItems(item.items, sidebar)}
    }
  })
  return sidebar
}

function isDirectory(pathname) {
  return fs.statSync(pathname).isDirectory()
}
// 判断有没有子目录,默认只有文件或只有目录两种形式，并且不存在没有的情况
function isNoChildDirectory(dir){
  return fs.statSync(path.join(dir, fs.readdirSync(dir)[0])).isDirectory()
}
// 获取文件名（无后缀）
function getFileName(file) {
  let lastIndex = file.lastIndexOf('.')
  return file.substring(0, lastIndex)
}

items = generateNavByPath(path.join(__dirname, 'docs'), '/')

sidebar = generateSidebarByItems(items, sidebar)

config.themeConfig.nav[1].items = items
config.themeConfig.sidebar = sidebar
// 写入文件
fs.writeFileSync(path.join(__dirname, 'docs/.vuepress/config.js'), 'module.exports = ' + JSON.stringify(config))
