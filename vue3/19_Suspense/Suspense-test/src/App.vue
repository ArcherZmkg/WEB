<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <!-- default插槽里放入正常加载显示的组件 -->
      <template v-slot:default>
        <Son></Son>
      </template>
      <!-- fallback插槽里放入未能及时加载显示该组件的应对情况 -->
      <template v-slot:fallback>
        <h3>稍等,加载中......</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
  import {ref} from 'vue';
  // import Son from './components/son.vue';
  import {defineAsyncComponent} from "vue"; //静态引入
  const Son = defineAsyncComponent(()=>import('./components/son.vue'));//异步引入
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
