//注释都是给鳖鳖看的，所以详细点（
require("marko/node-require");

const Koa = require("koa");
const Router = require('koa-router');
const staticRouter = require('koa-static');

const fs = require("fs");
const path = require('path');

const router = new Router();
const app = new Koa();

const config = require("./config.js")

/**
 * 鳖鳖不要动这个函数
 * @param {Router} router 
 * @param {Object} mapping 
 */
function addMapping(router, mapping) {
    for (const url in mapping) {
        if (url.startsWith('GET ')) {
            let path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            let path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

/**
 * 这个函数也不要动
 * @param {Route} router 
 */
function addControllers(router) {
    let files = fs.readdirSync(__dirname + '/routes');
    let js_files = files.filter((f) => {
        return f.endsWith('.js');
    });

    for (var f of js_files) {
        console.log(`process controller: ${f}...`);
        let mapping = require(__dirname + '/routes/' + f);
        addMapping(router, mapping);
    }
}

//自动添加路由
addControllers(router);

app.use(staticRouter(path.resolve(__dirname, "static")));

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(config.web.host, config.web.port, () => console.log(`Website already run on ${config.web.host}:${config.web.port}`));