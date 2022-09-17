const fs = require('fs');
const util = require('util');
const mineReadFile = util.promisify(fs.readFile);

//  回调函数方式
// fs.readFile('./笔记.md',(err,data)=>{
//     if (err) throw err;
//     fs.readFile('./笔记.md',(err,data)=>{
//         if (err) throw err;
//     })
// })

//
const main  = async ()=>{
    try {
        let data1 = await mineReadFile('./笔记.md');
        let data2 = await mineReadFile('./笔记.md');
        let data3 = await mineReadFile('./笔记.md');
        console.log(data1+data2+data3);
    } catch (error) {
        console.log(error);
    }
}

main();