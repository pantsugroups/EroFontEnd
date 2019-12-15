const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
//https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const is_production = process.env.NODE_ENV === "production";

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.js',
      '@': resolve('src'),
    }
  },
  entry: "./src/main.js",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'EroFE',
      base: process.env.BASE_URL,
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new MiniCSSExtractPlugin({
      filename: 'style.css'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.(sa|sc|c)ss$/,
      use: [
        is_production ?
          MiniCSSExtractPlugin.loader :
          'vue-style-loader',
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
    }, {
      test: /\.less$/,
      use: [
        is_production ?
          MiniCSSExtractPlugin.loader :
          'vue-style-loader',
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
      test: /\.vue$/,
      use: [{
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      is_production ?
        MiniCSSExtractPlugin.loader :
        'vue-style-loader'
      ]
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: ['babel-loader']
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      loader: [
        'url-loader'
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      loader: [
        'file-loader'
      ]
    }
    ]
  },
  serve: {
    port: 1024,
    content: '../dist'
  }
}
