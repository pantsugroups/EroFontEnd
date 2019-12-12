const path = require('path');
const base_conf = require('./webpack.base.conf');
process.env.NODE_ENV = '"production"';
module.exports = {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../build')
    },
    ...base_conf
}