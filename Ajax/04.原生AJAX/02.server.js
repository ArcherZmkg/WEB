const express = require('express');

const app = express();


/**
 * 创建路由规则
 * request是对请求报文的封装
 * response是对响应报文的封装
 */
app.get('/server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    response.send('HELLO AJAX');
})

//all表示可以接收任意类型的请求
app.all('/server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应头，设置允许自定义(任意类型)的响应头
    response.setHeader('Access-Control-Allow-Header','*');
    //设置响应体
    response.send('HELLO AJAX POST');
})

/**监听端口并开启服务器 */
app.listen(8001,()=>{
    console.log("服务已经启动,8000端口监听中,http://127.0.0.1:8001");
});