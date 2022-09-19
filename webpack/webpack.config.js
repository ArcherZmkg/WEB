const path = require("path") //node.js核心模块,用来处理路径问题
module.exports = {
    //入口
    entry:'./src/main.js',
    //输出
    output:{
        //文件的输出路径
        //__dirname nodejs的变量,代表当前文件的文件夹目录
        path:path.resolve(__dirname,'dist'),//绝对路径
        //文件名
        filename:'main.js',
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
        ]
    },
    //插件
    plugins:[
        //plugin的配置
    ],
    //模式
    mode:'development'
}