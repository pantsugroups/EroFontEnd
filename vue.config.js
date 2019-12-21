const pages = { // mulit pages conf
  index: {
    entry: "src/entries/index.js",
    template: "public/index.html",
    filename: "index.html", // http://exapmle.com/
    title: "~主页⭐魔法使之家~"
  },
  game: {
    entry: "src/entries/game.js",
    template: "public/index.html",
    filename: "game/index.html", // http://exapmle.com/game
    title: "~游戏⭐魔法使之家~"
  },
  light: {
    entry: "src/entries/light.js",
    template: "public/index.html",
    filename: "light/index.html", // http://exapmle.com/light
    title: "~小说⭐魔法使之家~"
  },
  user: {
    entry: "src/entries/user.js",
    template: "public/index.html",
    filename: "user/index.html", // http://exapmle.com/user
    title: "~用户中心⭐魔法使之家~"
  }
};

const vueConf = {
  publicPath: "/",
  outputDir: "dist",
  //  indexPath: "no/index.html",
  //  filenameHashing: false,//default true
  assetsDir: "public", // default: static
  productionSourceMap: false, // default: true
  crossorigin: "use-credentials", // default: undefined
  pwa: {
    name: "魔法使之家",
    short_name: "Ero",
    themeColor: "pink"
  }
};

module.exports = {
  ...vueConf,
  pages
};
