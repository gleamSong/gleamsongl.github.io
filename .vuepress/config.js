const { defaultTheme } = require('@vuepress/theme-default')
const { activeHeaderLinksPlugin } = require('@vuepress/plugin-active-header-links')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { archivePlugin } = require('vuepress-plugin-archive')

module.exports = {
  title: '递归之路',
  description: '',
  plugins: [
    activeHeaderLinksPlugin({}),
    backToTopPlugin({}),
    // autoSidebar({
    //   sort: {
    //     mode: "asc",
    //     readmeFirst: true,
    //     readmeFirstForce: false
    //   },
    //   title: {
    //     mode: "titlecase",
    //     map: {}
    //   },
    //   sidebarDepth: 10,
    //   collapse: {
    //     open: false,
    //     collapseList: [],
    //     uncollapseList: []
    //   },
    //   ignore: [],
    //   removeEmptyGroup: false,
    //   git: {
    //     trackStatus: 'all'
    //   }
    // }),
    archivePlugin({
      //需要排除的页面url，在该数组里面的路径，都不会被统计
      excludes: ['/footer.html', '/404.html', '/about/', '/mood/', '/link/', '/tag/', '/photo/'],
      //当某篇文章没有标题时，将使用下面值进行替换
      noTitle: '暂时没有标题配置'
    })
  ],
  theme: defaultTheme({
    lastUpdated: '更新于',
    sidebar: 'auto',
    displayAllHeaders: false,
    smoothScroll: true,
    locales: {
      '/': {
        // 将会被设置为 <html> 的 lang 属性
        lang: 'zh-CN',
      }
    }
  }),
  locales: {
    '/': {
      // 将会被设置为 <html> 的 lang 属性
      lang: 'zh-CN',
    }
  },
}
