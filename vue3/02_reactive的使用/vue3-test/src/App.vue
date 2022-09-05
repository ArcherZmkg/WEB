<template>
    <div>
      <h3>个人信息</h3>
      <hr>
      <h3>姓名:{{name}}</h3>
      <h3>年龄:{{age}}</h3>
      <h3>工作种类:{{job.type}}</h3>
      <h3>工作薪资:{{job.salary}}</h3>
      <button @click="changeInfo">点击修改信息</button>
    </div>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
  name: 'App',
  setup(){
    // ref处理基本数据类型确实使用的是数据劫持方式即get和set,但如果处理的是引用数据类型诸如对象之类的则是运用的es6中的proxy代理

    let name = ref('张三');
    let age = ref(19);
    let job = reactive({
      type:'node',
      salary:'33k'
    })


    // 修改信息方法
    const changeInfo=()=>{
      job.type = '前端';
      job.salary = '60k';
      console.log(job);
    }

    //返回一个对象(常用)
    return {
      name,
      age,
      job,
      changeInfo
    }

    //返回一个函数(渲染函数)
    //return ()=> h('h1','尚硅谷')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
