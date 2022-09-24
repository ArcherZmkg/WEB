##  Webpack基本指令
*   webpack安装:npm i webpack webpack-cli -D (D表示开发版本)
*   webpack开发模式打包 npx webpack 需要打包的文件路径 --mode=development
*   webpack生产环境打包 npx webpack 需要打包的文件路径
--mode=production
*   webpack打包:如果有webpack.config.js文件直接输 npx webpack就可以了

##  Webpack五大核心概念
*   1.entry:入口文件，指定从哪个文件开始打包
*   2.output:输出，指示webpack打包完的文件输出到哪里去,如何命名等
*   3.loader:加载器，由于webpack本身只能处理js、json等资源，其他资源需要借助loader，webpack才能解析
*   4.plugins:插件，扩展webpack的功能
*   5.mode:模式，主要分为两种模式:开发模式:development，生产模式:production

##  WebPack开发模式介绍
*   编译代码，使浏览器能识别运行
*   代码质量检查，树立代码规范

##  处理JS资源
*   针对js兼容性处理，我们使用Babel来完成
*   针对代码格式，我们使用Eslint来完成
我们先完成Eslint，检测代码格式后，再由Babel做代码兼容性处理

##  Eslint
*   定义:可组装的JavaScript和JSX(react语法)检查工具。
*   parserOptions:{},解析选项
*   rules:具体检查规则
*   extends:继承其他规则

##  Babel
*   定义:javascript编译器
*   主要用于将ES6语法编写的代码转换为向后兼容的js语法，以便能够运行在当前和旧版本的浏览器或其他环境中
*   多用babel.config.js配置

##  devServer
*   定义:开发服务器,用于开发模式下进行的一个页面的及时更新

##  MiniCssExtractPlugin
*   定义:该插件用于将css提取到单独的文件中,为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载

##  postcss-loader
*   定义:css兼容器，用于对浏览器版本支持的css进行兼容
*   需要在package.json中通过bowerslist指明需要兼容的浏览器情况
*   loader默认采用postcss-preset-env预设

##  CssMinimizerWebpackPlugin
*   这个插件使用cssnano优化和压缩CSS

##  默认生产模式已经进行html和js文件的压缩

##  SourceMap(源代码映射)
*   SourceMap是一个用来生成源代码与构建后代码一一映射的文件的方案

##  devTool
*   开发模式下:cheap-module-source-map
*   优点:打包速度快
*   缺点:没有列映射
*   生产环境下:source-map
*   优点:包含行/列映射
*   缺点:打包编译速度更慢(由于生产模式会压缩为一行代码所以必须包含列映射)

##  HotModuleReplacement
*   HMR,热模块替换:在程序运行中,替换、添加或删除模块,而无需重新加载整个页面
*   vue-loader会自动实现热模块替换功能，常规devServer会默认开启热模块替换(只支持css自动，js需手动，模块热替换仅适用于开发模式)

##  OneOf
*   每个文件只能被其中一个loader配置处理

##  cache
*   开启缓存,提升每次更新后的打包速度

##  thread-loader
*   多线程打包
*   npm i thread-loader --save-dev

##  babel会为编译的每个文件插入辅助代码,使代码体积过大
*   npm i @babel/plugin-transform-runtime -D
*   npm i @babel/runtime
*   babel-loader处引入该插件plugins: ['@babel-plugin-transform-runtime'] 

##  图片压缩Image Minimizer
*   npm i image-minimizer-webpack-plugin imagemin -D
*   后根据需要分为有损压缩和无损压缩
*   无损压缩:npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo --save-dev
*   有损压缩:npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo --save-dev
*   对于 v9.0.0+需要使用 svgo 配置imagemin-svgo

##  Code Split优化代码运行性能