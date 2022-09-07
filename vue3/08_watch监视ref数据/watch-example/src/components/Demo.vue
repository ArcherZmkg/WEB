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
import {ref,watch,reactive} from "vue";
export default {
  name:'Demo',
  setup(){
    //  数据
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = ref({
        name:'张三',
        age:19,
        job:{
          a:1,
          b:2
        }
    })
    //  监视

    //  不能.value,无法监视基本数据,只能监视数据对象
    watch(sum,(nv,ov)=>{
      console.log('sum值变化了',nv,ov);
    })

    //  监视的不是ref所定义的person数据了,而是ref定义的person里面借助proxy代理的value数据(即reactive定义的)
    watch(person.value,(nv,ov)=>{
      console.log('person值变化',newValue,oldValue);
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