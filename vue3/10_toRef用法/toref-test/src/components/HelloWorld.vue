<template>
  <div>
   <h3>姓名：{{person.name}}</h3>
   <h3>姓名ref版{{name}}</h3>
   <h3>年龄：{{person.age}}</h3>
   <h3>工作薪资：{{person.job.cash}}</h3>
   <h3>工作时长：{{person.job.time}}</h3>
   <button @click="person.name+='!'">操作姓名</button>
  </div>
</template>

<script>
import { reactive,toRef,toRefs } from '@vue/reactivity'
export default {
  name:'HelloWorld',
  setup(){
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        cash:'30k',
        time:'8h'
      }
    })
    const name = toRef(person,'name');
    const x = toRefs(person);
    return{
      person,
      name,
      ...x
    }
  }
}
</script>

<style>

</style>