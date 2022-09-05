<template>
  <div>
    <Home :person="person" @hello="show">
      <template v-slot:qwe>
        <div>
          <span>???</span>
        </div>
      </template>
    </Home>
  </div>
  
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  setup(){
    let person = {
      age:18,
      name:'张三'
    }

    const show=(value)=>{
      alert(`你好啊,你触发了,我收到的emit值为${value}`)
    }

    return {
      person,
      show
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
