<template>
    <button class="success-btn">ss</button>
    <button class="danger-btn">按钮</button>
</template>

<script>
// import "../assets/style.less";
export default {

}
</script>

<style lang="less" scoped>
/**加了reference后文件内代码不会执行的 */
@import (reference) '../assets/style.less';
.danger-btn{
    .btn();
    background-color: orange;
}
.success-btn{
    .btn();
}
</style>