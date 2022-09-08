<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Son></Son>
  </div>
</template>

<script>
  import {ref} from 'vue';
  import Son from './components/son.vue';
  export default {
    name: 'App',
    components:{
      Son
    },
    setup(){
     
    }
  }
</script>

<style>
  .app{
    background: gray;
    padding: 10px;
  }
</style>
