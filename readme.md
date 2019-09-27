# webpack
### 内容：学习webpack的基础
### 网址：https://segmentfault.com/a/1190000006178770

### 开始时间：2019/9/25
### 计划结束时间： 2019/9/27
### 目标：
- 搭建热加载页面
- 可解析sass文件
- webpack初级插件
### 终极挑战：
- 解析md文件为doc


# 学习成果
1. 创建package.json 可以用npm init创建一个空json
2. 本地或者项目中下载webpack npm install --save -dev webpack 下载webpack-cli npm install --save -dev webpack-cli
3. 创建app文件夹和public文件夹分别存放编译的文件和编译后的文件，其中分别放入js文件和index.html文件，添加编译代码。
4. 创建webpack.config.js用于编写设置。entry/output等基础配置
5. 实现热加载需要webpack-dev-server插件，npm install后，在webpack.config.js中添加 devServer属性，并配置本地服务器设置。在package.json中添加scripts 运行本地服务器。
6. loaders用于解析各种文件，css，less，es6等，在webpack.config.js中进行添加即可
7. 