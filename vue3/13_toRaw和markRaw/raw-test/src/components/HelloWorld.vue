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
    <button @click="printRawPerson">输出最原始的person</button>
    <hr>
    <h3 v-show="person.car">座驾信息{{person.car}}</h3>
    <button @click="addCar">添加一台座驾</button>
    <button @click="person.car.name+='!'">换车名</button>
    <button @click="changePrice">换价格</button>
  
  </div>
</template>

<script>
import { reactive,ref, toRefs,toRaw,markRaw } from '@vue/reactivity'
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

    function printRawPerson(){
      const p = toRaw(person);
      console.log(p,'raw');
    }
    function addCar(){
      let car = {name:"奔驰",price:40};
      person.car =markRaw(car)
    }

    const changePrice=()=>{
      person.car.price++;
      console.log(person.car);
    }
    return{
      sum,
      person,
      ...toRefs(person),
      printRawPerson,
      addCar,
      changePrice
    }
  }
}
</script>

<style>

</style>