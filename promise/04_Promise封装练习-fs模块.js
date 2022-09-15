/**
 * 封装一个函数mineReadFile 读取文件内容
 * @params path 文件路径
 * @return promise 对象
 */

function mineReadFile(path) {
    return new Promise((resolve, reject) => {
        //  读取文件
        require('fs').readFile(path, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

mineReadFile('./笔记.md').then(
    value => {
        console.log(value.toString());
    }, reason => {
        console.log(reason);
    })