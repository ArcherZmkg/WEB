const fs = require('fs');

/**回调函数形式 */
// fs.readFile('./笔记.md',(err,data)=>{
//     //  如果出错 抛出
//     if (err) throw err;
//     //  输出文件内容
//     console.log(data.toString());
// })

/**Promise形式 */
const p = new Promise((resolve,reject)=>{
    fs.readFile('./笔记.txt',(err,data)=>{
        // 出错
        if (err) reject(err);
        resolve(data);
    })
})
p.then((value)=>{
    console.log(value.toString());
},(reason)=>{
    console.log(reason);
})