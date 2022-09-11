<template>
    <div class="main box">

    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
/**阴影叠加 */
// .box{
//     box-shadow:1px 1px 2px yellow,1px 1px 2px yellow,1px 1px 2px yellow;
// }

.boxShadow(){
    box-shadow+: 0 0 10px #555;
}

.main{
    .boxShadow();
    box-shadow+:0 0 20px black;
}

.box{
    margin:0 auto;
    width:200px;
    height: 200px;
}
</style>