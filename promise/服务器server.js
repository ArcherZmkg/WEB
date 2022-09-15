const express = require('express');
const CORS = require('cors');
const app = express();
app.use(CORS());

app.get('/getJoke',(request,response)=>{
    const data = {
        name:'joker'
    }
    let str = JSON.stringify(data)
    // response.send('Hello Promise')
    response.send(str);
})

app.listen(8000,()=>{
    console.log('服务器已经启动,IP地址为:http://127.0.0.1:8000');
})
