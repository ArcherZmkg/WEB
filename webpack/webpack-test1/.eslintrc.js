module.exports = {
    //  继承Eslint规则
    extends:['eslint:recommended'],
    env:{
        node:true,
        browser:true
    },
    parserOptions: {
        ecmaVersion: 6,//es6
        sourceType: "module",//es module
    },
    //规则
    rules:{
        "no-var":2
    },
    plugins:['import']
}