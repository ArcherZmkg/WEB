const express = require('express');
const cors = require('cors');
const { response } = require('express');
const app = express();
// app.use(cors());

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
});

//all表示可以接收任意类型的请求
app.all('/server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应头，设置允许自定义(任意类型)的响应头
    response.setHeader('Access-Control-Allow-Header','*');
    //设置响应体
    response.send('HELLO AJAX POST');
});

//all表示可以接收任意类型的请求
app.get('/json-server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    const data = {
        name:"XXX"
    }
    let str = JSON.stringify(data)
    response.send(str);
});

app.get('/IE',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('hello IE-2')
});

/**延时响应 */
app.all('/timeout',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    // response.setHeader('Access-Control-Allow-Header','*');
    setTimeout(()=>{
        response.send('hello IE-2')
    },3000)
   
});

/**jQuery服务 */
app.all('/jquery-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Header','*');
    const  data = {name:'xxx'}
    setTimeout(()=>{
        response.send(JSON.stringify(data))
    },2000)
});

/**axios服务 */
app.all('/axios-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Header','*');
    const  data = {name:'xxx'}
    setTimeout(()=>{
        response.send(JSON.stringify(data))
    },2000)
});

/**fetch服务 */
app.all('/fetch-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Header','*');
    const  data = {name:'xxx'}
    setTimeout(()=>{
        response.send(JSON.stringify(data))
    },2000)
});

/**jsonp服务 */
app.all('/jsonp-server',(request,response)=>{
    // response.send('console.log("hello jsonp-server")')
    const data = {
        name:'尚硅谷'
    }
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`)
});

/**用户名检测是否存在 */
app.all('/check-username',(request,response)=>{
    const data = {
        exist:1,
        msg:"用户名已经存在"
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`)
});

/**jquery发送jsonp */
app.all('/jquery-jsonp-server',(request,response)=>{
    const data = {
        name:'who'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收callback参数
    let cb = request.query.callback;
    //返回结果
    response.end(`${cb}(${str})`)
});

/**cors */
app.all('/cors-server',(request,response)=>{
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader("Access-Control-Allow-Headers","*")
    response.send('hello CORS');
});

/**监听端口并开启服务器 */
app.listen(8001,()=>{
    console.log("服务已经启动,8001端口监听中,http://127.0.0.1:8001");
});