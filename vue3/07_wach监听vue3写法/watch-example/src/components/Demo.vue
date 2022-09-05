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
    let person = reactive({
        name:'张三',
        age:19,
        job:{
          a:1,
          b:2
        }
    })
    //  监视

    //  情况一:监视ref所定义的一个响应式数据
    /* watch(sum,(nv,ov)=>{
      console.log('sum变了');
    },{
      immediate:true
    }) */

    //  情况二:监视ref所定义的多个响应式数据
    /*  watch([sum,msg],(nv,ov)=>{
        console.log('监视多个',nv,ov);
      }) */


    /* 
      情况三:监视reactive所定义的一个响应式数据的全部属性
          1.注意:此处无法正确的获取 oldValue
          2.注意:强制开启了深度监视(deep配置无效)
     */
      //  watch((person),(nv,ov)=>{
      //   console.log(nv,ov,'person变化了');
      // },{
      //   deep:false
      // })

    /* 
      情况四:监视reactive所定义的一个响应式数据中的某个属性
     */
    
      // watch(()=>person.age,(nv,ov)=>{
      //   console.log('person的age变化了',nv,ov)
      // })
    

    /* 
      情况五:监视reactive所定义的一个响应式数据中的某些属性
     */
    
      // watch([()=>person.name,()=>person.age],(nv,ov)=>{
      //   console.log('person的name或age变化了',nv,ov)
      // }) 


    //  特殊情况
    watch(()=>person.job,(nv,ov)=>{
      console.log('person的job发生改变了',nv,ov);
    },{
      deep:true
    })
    //  注:此处由于监视的是reactive定义的对象中的某个属性(job也为一个对象),所以deep配置有效
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