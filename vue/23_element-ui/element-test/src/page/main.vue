<template>
  <div class="main">
    <h3>请查看el组件</h3>
    <el-button type=primary icon="el-icon-edit" size='small'>你好</el-button>
  </div>
</template>

<script>
export default {
    name:'MainPage'
}
</script>

<style scoped lang="less">
@BkColor:rgb(111, 194, 216);
  .main{
    width:100wh;
    height:800px;
    background: @BkColor;
  }
</style>