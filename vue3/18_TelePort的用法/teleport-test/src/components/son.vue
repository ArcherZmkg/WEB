<template>
  <div class="main">
    <h3>我是子组件(子)</h3>
    <ChildBox/>
  </div>
</template>

<script>
  import ChildBox from './child.vue'
  export default {
      name:'Son',
      components:{
        ChildBox
      },
      setup(){

      }
  }
</script>

<style scoped>
  .main{
    background-color: yellow;
  }
</style>