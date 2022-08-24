<template>
  <div id="app">
    <div class="main">
      <my-header></my-header>
      <my-list></my-list>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    MyList
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
.btn-danger{
  width:6rem;
  height:2rem;
  background: rgb(179, 36, 36);
  color: rgb(245, 239, 239);
  font-weight: 600;
  font-size:0.9rem;
  font-family: '幼圆';
  border: 2px solid  rgb(179, 36, 36);
  border-radius: 0.3rem;
}

.btn-danger:hover{
  cursor: pointer;
  background:   rgb(245, 239, 239);
  color:  rgb(179, 36, 36);
}

.btn-default{
  width:6rem;
  height:2rem;
  background: rgb(28, 117, 233);
  color: rgb(245, 239, 239);
  font-weight: 600;
  font-size:0.9rem;
  font-family: '幼圆';
  border: 2px solid rgb(28, 117, 233);
  padding:0.03rem;
  /* box-shadow: 1rem 1rem 0.5rem 0.01rem rgb(41, 177, 204); */
  border-radius: 0.3rem;
}

.btn-default:hover{
  cursor: pointer;
  background:  rgb(245, 239, 239);
  color: rgb(28, 117, 233);
}

.default-hr{
  width:calc(100% - 2.2rem);
  height:0rem;
  background: rgb(74, 69, 69);
}
</style>
<style scoped>
.main{
  width:600px;
  height:600px;
  overflow-y: scroll;
  border:0.03rem solid rgba(117, 111, 111,0.5)
}
</style>
