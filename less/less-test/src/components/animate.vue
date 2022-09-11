<template>
  <div class=" box main">
    <div class="icon "></div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
/**extend继承 */
    .animation{
        transition: all 0.3s ease-out;
        .hide{
            transform: scale(0);
        }
    }

    .main{
        &:extend(.animation);
    }
    .box{
        width:200px;
        height:200px;
        background-color: aqua;
    }

    .icon{
        &:extend(.animation .hide);
    }
</style>