const pages = { // mulit pages conf
  index: {
    entry: 'src/index.js',
    template: 'public/index.html',
    filename: 'index.html',
    title: '~主页⭐魔法使之家~'
  },
  game: {
    entry: 'src/game.js',
    template: 'public/index.html',
    filename: 'game/index.html',
    title: '~游戏⭐魔法使之家~'
  }
  // ,light: {
  //   entry: 'src/light.js',
  //   template: 'public/index.html',
  //   filename: 'light/index.html',
  //   title: '~小说⭐魔法使之家~'
  // },
  // user: {
  //   entry: 'src/user.js',
  //   template: 'public/index.html',
  //   filename: 'user/index.html',
  //   title: '~用户中心⭐魔法使之家~'
  // }
}

const vueConf = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'public', // default: static
  productionSourceMap: false, // default: true
  crossorigin: 'use-credentials', // default: undefined
  pwa: {
    name: '魔法使之家',
    short_name: 'Ero',
    themeColor: 'pink'
  }
}

module.exports = {
  ...vueConf,
  pages
}
