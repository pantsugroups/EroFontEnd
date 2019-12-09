const path = require('path');
const base_conf = require('./webpack.base.conf');
process.env.NODE_ENV = '"development"';
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "../build",
        hot: true
    },
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js',
        path: path.resolve(__dirname, '../build')
    },
    ...base_conf
}