<template>
  <div id="app">
      <Banner></Banner>
      <hr>
      <div>
        <!-- Vue中借助router-link实现路由的切换 -->
        <router-link :to='{name:"guanyu"}'>About</router-link>
        <br>
        <router-link to='/home'>home</router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
export default {
  name: 'App',
  components: {
    Banner
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
