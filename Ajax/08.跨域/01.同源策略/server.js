const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/home',(request,response)=>{
    //  响应一个页面
    response.sendFile(__dirname+'/index.html');
});

app.get('/data',(request,response)=>{
    response.send('用户数据');
})


app.listen(9000,()=>{
    console.log('服务已经启动...,http://127.0.0.1:9000/home');
})