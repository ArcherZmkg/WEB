module.exports={
    //智能预设，能够编译ES6语法
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-transform-runtime']    //减小代码体积
};