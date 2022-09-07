<template>
  <button @click="Show">切换显示helloWorld组件</button>
  <HelloWorld v-if="isShow"/>
</template>

<script>
import {ref} from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    let isShow = ref(true);
    const Show = ()=>{
      isShow.value=!isShow.value;
    }
    return {
      isShow,
      Show
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
