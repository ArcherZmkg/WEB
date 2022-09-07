<template>
  <div>
    <h2>当前sum：{{sum}}</h2>
    <button @click="sum++">sum加</button>
    <hr>
    <h3>姓名：{{name}}</h3>
    <hr>
    <h3>年龄：{{age}}</h3>
    <h3>工作薪资：{{job.cash}}K</h3>
    <h3>工作时长：{{job.time}}</h3>
    <button @click="name+='!'">操作姓名</button>
    <button @click="age++">增龄</button>
    <button @click="job.cash++">涨薪</button>
  </div>
</template>

<script>
import { reactive,ref, toRefs, readonly, shallowReadonly} from '@vue/reactivity'
export default {
  name:'HelloWorld',
  setup(){
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        cash:30,
        time:'8h'
      }
    });
    let sum = ref(0);

    person = shallowReadonly(person);
    // person = readonly(person);
    // sum = readonly(sum);


    
    return{
      sum,
      ...toRefs(person)
    }
  }
}
</script>

<style>

</style>