<template>
  <input type="text" v-model="keyWords">
  <h3>{{keyWords}}</h3>
</template>

<script>
import {ref,customRef} from 'vue';


export default {
  name: 'App',
 
  setup(){
    //  自定义的一个ref名为:myRef
    function myRef(value,delay){
        let timer
        console.log('my-ref',value);
        return customRef((track,trigger)=>{
          return {
            get(){
              console.log(`有人从myRef容器中读取数据了,我把数据${value}给他了`);
              track();  //通知Vue追踪数据的变化(提前和get商量一下，让他认为value是有用的)
              return value
            },
            set(newValue){
              clearTimeout(timer);
              console.log(`有人从myRef容器中把数据改了,${value}`);
              
              timer = setTimeout(()=>{
                value = newValue;
                trigger() //通知vue去重新解析模板
              },delay)
            }
          }
        })
    }
    let keyWords = myRef('',1000);
    return {
      keyWords,
      myRef
    }
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
