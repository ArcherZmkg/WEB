<template>
  <div class="child">
    <h3>我是孙组件</h3>
    <Dialog/>
  </div>
</template>

<script>
  import Dialog from '../public/dialog.vue'
  export default {
      name:'ChildBox',
      components:{
        Dialog
      },
      setup(){
        
      }
  }
</script>

<style scoped>
  .child{
    background: snow;
  }
</style>