<template>
  <div class="app">
    <h3>我是App组件</h3>
  </div>
</template>

<script>
  import {reactive,ref,isRef,isProxy,isReactive,isReadonly,readonly} from 'vue';
  export default {
    name: 'App',
    setup(){
      let car = reactive({name:'x',price:'y'});
      let sum = ref(0);
      let car2 = readonly(car);

      console.log('isRef(sum):',isRef(sum));
      console.log('isReactive(car):',isReactive(car),'isReactive(sum):',isReactive(sum));
      console.log('isReadonly(car):',isReadonly(car),'isReadonly(car2):',isReadonly(car2));
      console.log('isProxy(car):',isProxy(car),'isProxy(car2):',isProxy(car2),'isProxy(sum):',isProxy(sum));

    }
  }
</script>

<style>
  .app{
    background: skyblue;
    padding: 10px;
  }
</style>
