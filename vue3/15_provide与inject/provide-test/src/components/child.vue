<template>
  <div class="child">
    <h3>我是孙组件{{car.name}}--{{car.price}}</h3>
  </div>
</template>

<script>
  import  {inject} from 'vue';
  export default {
      name:'ChildBox',
      setup(){
        const car = inject("car");
        return {car}
      }
  }
</script>

<style scoped>
  .child{
    background: snow;
  }
</style>