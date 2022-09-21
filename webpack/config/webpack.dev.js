const path = require("path") //node.js核心模块,用来处理路径问题
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口
    entry:'./src/main.js',
    //输出
    output:{
        //文件的输出路径
        //__dirname nodejs的变量,代表当前文件的文件夹目录
        // path:path.resolve(__dirname,'dist'),//绝对路径
        path:undefined,//开发模式不需要输出,他输出在内存就进行了
        //文件名
        filename:'static/js/main.js',
        //自动清空上一次打包内容
        //原理:在打包前,将path整个目录内容清空,再进行打包
        // clean:true   //开发模式不需要输出
    },
    //加载器
    module:{
        //  注意loader顺序是先执行后面的，因此stylus-loader这种将stylus语法转换为css应该放在最后,
        //  其次是css-loader将css转为commonjs，最后才是用style-loader将css用style标签放入html中生效
        rules:[
            //loader的配置
            {
                test: /\.css$/, //  只检测.css文件
                use:[ 
                    //执行顺序从右到左(从下到上)
                    'style-loader', //将js中css通过创建style标签添加html文件中生效
                    'css-loader'//将css资源编译成commonJs的模块到js中
                ]
            },
            {
                test: /\.less$/,
                //  loader:'xxx'只能使用1个loader
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.sass$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            },
            {
                test: /\.styl$/,
                use:[
                    {
                        loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: "stylus-loader", // 将 Stylus 文件编译为 CSS
                    }
                ]
            },
            {
                //需要删除之前的dist文件才能看到效果
                test: /\.(svg|jpe?g|webp|png|gif)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                      //小于10KB的图片会转成base64
                      //优点:减少请求数量 缺点:体积会更大
                      maxSize: 10 * 1024 // 10kb
                    },
                },
                generator: {
                    //输出图片名称([hash][ext][query]表示图片命名情况,hash:10表示取hash值前十位)
                    filename: 'static/images/[hash:10][ext][query]'
                }
               
            },
            {
                test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
                type: 'asset/resource',
                generator: {
                    //输出文件
                    filename: 'static/media/[hash:10][ext][query]'
                }
               
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,  //排除node_modules中的js文件(这些文件不处理)
                use: {
                  loader: 'babel-loader'
                }
            }
        ]
    },
    //插件
    plugins:[
        //plugin的配置
        new ESLintPlugin({
            context:path.resolve(__dirname,'../src')
        }),
        new HtmlWebpackPlugin({
            //  模板,以public/index.html文件创建新的html文件
            //  新的html文件特点:1.结构和原来一致2.自动引入打包的资源
            template:path.resolve(__dirname,'../public/index.html')
        })
    ],
    //开发服务器:不会输出资源,在内存中编译打包
    devServer: {
        host:'localhost',//启动服务器域名
        open:true,//自动打开浏览器
        static: {
          directory: path.join(__dirname, '../public'),
        },
        // compress: true,  //gzip压缩
        port: 3005,//启动服务器端口号
        hot:true
    },
    //模式
    mode:'development',
    devtool:'cheap-module-source-map'
}