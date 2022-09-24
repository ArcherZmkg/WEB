const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //entry:'./src/main.js'
    entry: {
        app: './src/app.js',
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',    //webpack命名方式,[name]以文件名自己命名
        clean:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        })
    ],
    mode: "production",
    optimization: {
        splitChunks: {
            chunks: 'all',
            // 默认配置
            // chunks: 'async',
            // minSize: 20000,
            // minRemainingSize: 0,
            // minChunks: 1,
            // maxAsyncRequests: 30,
            // maxInitialRequests: 30,
            // enforceSizeThreshold: 50000,
            // cacheGroups: {
            //     defaultVendors: {
            //         test: /[\\/]node_modules[\\/]/,
            //         priority: -10,
            //         reuseExistingChunk: true,
            //     },
            //     default: {
            //         minChunks: 2,
            //         priority: -20,
            //         reuseExistingChunk: true,
            //     },
            // },
            cacheGroups:{
                default:{
                    minSize:0,
                    priority: -20,
                    reuseExistingChunk: true,
                }
            }
        },
    },
}