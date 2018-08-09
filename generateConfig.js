var fs = require('fs')
var path = require('path')

var config = require('./default-config')
var sidebar = {}
var items = []
var docsPath = path.join(__dirname, 'docs')

// 生成nav,docs下除了.vuepress,about,README.生成博文的路由
function generateNavByPath(){
  var items = []
  fs.readdirSync(docsPath).forEach(function(file){
    if(file ==='.vuepress' || file === 'about' || file === 'README.md') {
      return
    }
    var pathname = path.join(docsPath, file)
    if(isDirectory(pathname)){
      items.push({text: file, link: `/${file}/`})
    }
  })
  return items
}
// 生成sidebar
function generateSidebarByItems(items, sidebar) {
  var sidebar = {}
  items.forEach(item => {
    let barPath = path.join(docsPath, item.link) // 当前bar的地址
    let bars = [''] // 该分类的侧边栏: 默认目录下有README.md
    fs.readdirSync(barPath).forEach(fileName => {
      if(fileName=='README.md') return
      let filePath = path.join(barPath, fileName)
      if(isDirectory(filePath)){
        // 侧边栏组(文件夹下的文章)
        bars.push({
          title: fileName,
          children: getFilesByPath(filePath, fileName+'/')
        })
      } else {
        // 文章
        bars.push(getFileName(fileName))
      }
    })
    sidebar[item.link] = bars
  })
  return sidebar
}

function isDirectory(pathname) {
  return fs.statSync(pathname).isDirectory()
}
// 获取文件名（无后缀）
function getFileName(file) {
  let lastIndex = file.lastIndexOf('.')
  return file.substring(0, lastIndex)
}
// 获取目录下的所有文件名(去除后缀)
function getFilesByPath(path, prefix=''){
  return fs.readdirSync(path).map(fileName => {
    return getFileName(prefix+fileName)
  })
}

items = generateNavByPath(path.join(__dirname, 'docs'), '/')

sidebar = generateSidebarByItems(items, sidebar)

config.themeConfig.nav[1].items = items
config.themeConfig.sidebar = sidebar
// 写入文件
fs.writeFileSync(path.join(__dirname, 'docs/.vuepress/config.js'), 'module.exports = ' + JSON.stringify(config))
