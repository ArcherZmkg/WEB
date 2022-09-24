import {sum} from './math';
// import count from './count';

console.log('main.js');
console.log(sum(1,2,3));

document.getElementById('clk').onclick = function(){
    //import的动态导入,将动态导入的文件代码分割(拆分成单独模块)，在需要使用的时候自动加载
    import('./count')
    .then((res)=>{
        console.log('模块加载成功',res.default(3,1));
    })
    .catch((reason)=>{
        console.log('模块加载失败',reason);
    })
   
}