require("marko/node-require")
const index = require("../components/index/");
module.exports = {
    'GET /': ctx => {
        ctx.type = "text/html";
        ctx.body = index.renderToString({
            name: 1
        })
    }
}