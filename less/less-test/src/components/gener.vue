<template>
  <div id="msx">
    <div class="column-1 box">1</div>
    <div class="column-2 box">2</div>
    <div class="column-3 box">3</div>
    <div class="column-4 box">4</div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    /**循环 */
    .generate-columns(4);
    .generate-columns(@n,@i:1) when (@i<@n){
        .column-@{i}{
            width: (@i * 100% / @n);
        }
        .generate-columns(@n, (@i+1))
    }
    .box{
        height: 100px;
        background-color: aqua;
    }
    #msx{
        width:1000px;
    }
</style>