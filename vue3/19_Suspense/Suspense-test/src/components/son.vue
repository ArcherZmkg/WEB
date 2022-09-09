<template>
  <div class="main">
    <h3>我是子组件(子)</h3>
    {{sum}}
  </div>
</template>

<script>
  import {ref} from 'vue';
  export default {
      name:'Son',
      async setup(){
        let sum = ref(0);
        let p = new Promise((reslove,reject)=>{
          setTimeout(()=>{
            reslove({sum})
          },3000)
        })
        return await p
      }
  }
</script>

<style scoped>
  .main{
    background-color: yellow;
  }
</style>