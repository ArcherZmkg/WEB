<template>
  <div class="app">
    <h3>我是App组件(祖){{name}}--{{price}}</h3>
    <Son/>
  </div>
</template>

<script>
  import {reactive,toRefs,provide} from 'vue';
  import Son from './components/son.vue';
  export default {
    name: 'App',
    components: {
      Son
    },
    setup(){
      let car = reactive({name:'XXX',price:'?????'})
      provide('car',car);
      return {...toRefs(car)}
    }
  }
</script>

<style>
  .app{
    background: skyblue;
    padding: 10px;
  }
</style>
