<template>
    <div>
        <a href="" class="linkBtn">链接按钮</a>
        <hr>
        <a href="" class="linkAll">继承所有链接按钮</a>
        <hr>
        <a href="" class="linkAll2">link2</a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .linkBtn{
        width:200px;
        height: 50px;;
    }
    .linkBtn{
        width:200px;
        height:60px;
        line-height: 50px;
        text-align: center;
        margin:0 auto;
        display: block;
        background: skyblue;
        color:#fff;
        &:hover{
            color:#000;
        }
    }
    .linkAll:extend(.linkBtn all){
        text-decoration: none;
    }
    .linkAll2{
        .linkBtn;
    }
</style>