const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const a = require('./app/myPlugin.js')


//给js添加上hash值 防止出现名称一样生成缓存
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//添加了hash之后，会导致改变文件内容后重新打包时，文件名不同而内容越来越多，因此这里介绍另外一个很好用的插件clean-webpack-plugin。
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  devtool: 'eval-source-map', //打包方式，影响到速度和效果
  // devtool: 'source-map',
  entry: __dirname + '/app/main.js', //入口文件
  // output: { //输出文件
  //   // path: __dirname + '/public', //在添加插件时由 /public 改为 /build
  //   path: __dirname + '/build', //利用html-webpack-plugin添加到build中，不用手动再创建
  //   filename: 'bundle.js'
  // },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle-[hash].js"
  },
  //webpack-dev-server 使用webpack构建本地服务器
  //实现热加载
  devServer: {
    // contentBase: './public',//本地服务器所加载的页面所在的目录
    port: '8081', //监听端口
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    hot: true
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }]
    }, {
      test: /\.less$/,
      // use: ['style-loader', 'css-loader', 'less-loader']
      // use: [{
      //   loader: "less-loader"
      // }]
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "less-loader"
      }]
    }]
  },
  //插件（Plugins）是用来拓展Webpack功能的，它们会在整个构建过程中生效，执行相关的任务
  plugins: [
    new webpack.BannerPlugin('版权插件，bannerPlugin'),
    new webpack.HotModuleReplacementPlugin(), //与热加载的devServer中的hot重复了
    new HtmlWebpackPlugin({
      // 模板来源
      // template: path.resolve(__dirname, './app/index.html'),
      template: './app/index.html',
      // 文件名称
      filename: 'index.html',
      inject: true
    }),
    new CleanWebpackPlugin(),//实例化，参数为目录
    new a({ tip: '这里是插件接受的参数' })
  ]
}