const path = require('path');

const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")

const is_production = process.env.NODE_ENV === "production";

module.exports = {
    entry: "./src/index.js",
    resolve: {
        extensions: [".js", ".marko"]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'EroFE'
        }),
        new MiniCSSExtractPlugin({
            filename: is_production ?
                "[name].css" : "[name].[hash].css"
        })
    ],
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                is_production ?
                MiniCSSExtractPlugin.loader :
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
        }, {
            test: /\.less$/,
            use: [
                is_production ?
                MiniCSSExtractPlugin.loader :
                'style-loader',
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "less-loader",
                    options: {
                        sourceMap: true
                    }
                },
            ]
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: ['babel-loader']
        }, {
            test: /\.marko$/,
            loader: ["@marko/webpack/loader"]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            loader: [
                'url-loader'
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            loader: [
                'file-loader'
            ]
        }]
    },
    serve: {
        port: 1024,
        content: '../build'
    }
}