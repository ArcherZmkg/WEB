<template>
  <div>
   <h3>姓名：{{person.name}}</h3>
   <h3>姓名ref版{{name}}</h3>
   <hr>
   <h3>当前x的值:{{x}}</h3>
   <button>x+1</button>
   <hr>
   <h3>年龄：{{person.age}}</h3>
   <h3>工作薪资：{{person.job.cash}}K</h3>
   <h3>工作时长：{{person.job.time}}</h3>
   <button @click="person.name+='!'">操作姓名</button>
   <button @click="person.age++">增龄</button>
   <button @click="upCash">涨薪</button>
  </div>
</template>

<script>
import { reactive,ref, shallowReactive, shallowRef} from '@vue/reactivity'
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
    })

    //  只考虑第一层数据的响应式，即job里数据不是响应式的
    // let person = shallowReactive({
    //   name:'张三',
    //   age:18,
    //   job:{
    //     cash:30,
    //     time:'8h'
    //   }
    // })

    let x = ref(0);
    let y = ref({
      y:0
    })
    // let x = shallowRef(0);
    // let y = shallowRef({
    //   y:0
    // })

    const upCash=()=>{
      person.job.cash +=1 
    }
    return{
      person,
      upCash,
      x,
      y
    }
  }
}
</script>

<style>

</style>