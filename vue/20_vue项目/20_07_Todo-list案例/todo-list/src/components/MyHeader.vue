<template>
  <div class="header-input">
    <input type="text" class="default-input" @keyup.enter="addName" placeholder="请输入你想要添加或查询的姓名" v-model="newName" ref="inputTitle"/>
    <hr class="default-hr"/>
  </div>
</template>

<script>
export default {
    name:'MyHeader',
    data(){
      return {
        newName:''
      }
    },
    methods: {
      addName(){
        if (this.newName){
          this.$bus.$emit('addName',this.newName);
        }
        else{
          alert("输入的姓名不允许为空!")
        }
      }
    },
    beforeDestroy(){
      this.$off('addName')
    }
}
</script>

<style scoped lang="less">
  .header-input{
    width:calc(100% - 1rem);
    height:2rem;
    padding:0.5rem 0.5rem 0.5rem 0.5rem;
    .default-input{
      width:calc(100% - 2.2rem);
      height:80%;
      border:0.08rem solid gray;
    }
  }
</style>