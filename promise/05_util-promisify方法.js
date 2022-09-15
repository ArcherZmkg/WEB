/**
 * util.promisify方法(采用该方法无需手动去进行promise封装)
 */
//  引入util模块
const util = require('util');
//  引入fs模块
const fs = require('fs');
//  返回一个新的函数
let minReadFile  = util.promisify(fs.readFile);

minReadFile('./笔记.md').then(value=>{
    console.log(value.toString());
})