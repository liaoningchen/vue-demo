# 1.初始化项目
```html
npm init -y
```
# 2.安装webpack相关
```html
npm install webpack webpack-dev-server --save-dev
```
# 3. 转化es6 es7语法
```html
npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 --save-dev 
npm install babel-loader@7.1.5 --save-dev
```
# 4.css相关
```html
npm install css-loader style-loader less less-loader --save-dev
```
# 5.图片相关、
```html
npm install file-loader url-loader --save-dev
```
#6.webpack html插件
```html
npm install html-webpack-plugin --save-dev
```

# 7.新建webpack配置文件
webpack.config.js 配置规则

# 8.新建 .babelrc 文件 (webpack 转化es7,es6时使用的映射文件)

# 9. 安装vue
```html
npm install vue --save-dev
```

# 10. 安装vue-loader vue-template-compiler
```html
vue-loader 解析vue文件的 vue会自动的调用 vue-template-compiler
vue-template-compiler 来解析vue模板的

npm install vue-loader vue-template-compiler --save-dev
```
