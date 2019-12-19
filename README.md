# erofrontend

## 目录结构
```
.        
├── public            静态文件
├── src               所有源文件           
│    ├── assets       资源文件
│    ├── components   vue模板
│    ├── router       路由
│    ├── utils        手写的一些小插件（
│    ├── views        vue展示文件
│    ├── game.js      game入口文件        
│    ├── index.js     主页入口文件
│    ├── light.js     Light入口文件
│    └── user.js      用户中心入口文件                   
├── .browserslistrc   浏览器版本限制配置文件
├── .editorconfig     代码风格控制 \
├── .eslintrc.js      代码风格控制 /
├── babel.config.js   Babel配置文件
└── vue.config.js     vue配置文件
```

## 改动

将EroLogin更改为User，即用户中心

## Todo

- [ ] 整理资源
- [ ] 对接后端

## Coding Guide

放在public下的文件会被解析到root

`public/img/a.png` -->build-->`/img/a.png`

所以在写的时候引用public里面的资源就可以直接用根目录了，或者`<%= BASE_PATH %>/example.png`

## 安装
```
npm install
```

### 开发
```
npm run serve
```

### 编译生产环境
```
npm run build
```

### 进行Lint分析（对鳖神器）
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
