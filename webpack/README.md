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