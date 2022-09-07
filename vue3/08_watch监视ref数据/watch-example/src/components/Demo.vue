<template>
  <div>
    <h2>当前求和为:{{sum}}</h2>
    <hr>
    <button @click="sum++">点我+1</button>
    <button @click="msg += '!'">点我+!</button>
    <hr>
    <h2>姓名:{{person.name}}</h2>
    <h2>年龄:{{person.age}}</h2>
    <button @click="person.age++">年龄++</button>
    <button @click="person.job.a++">job.a++</button>
  </div>
</template>

<script>
import {ref,watch,reactive,watchEffect} from "vue";
export default {
  name:'Demo',
  setup(){
    //  数据
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = reactive({
        name:'张三',
        age:19,
        job:{
          a:1,
          b:2
        }
    })
    //  监视

    watchEffect(()=>{
      const x1 = sum.value
      const y1 = person.job.a
      console.log('watchEffect所指定回调执行了');
    })
    
    return {
      sum,
      msg,
      person
    }
  }
  
}
</script>

<style>

</style>