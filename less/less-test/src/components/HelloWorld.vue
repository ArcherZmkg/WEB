<template>
  <div>
    <button class="small-success-btn">点我看一下</button>
    <div id="main">

    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
@bkColor:rgba(0,0,0,0.5);
@width:200px;
@height:200px;
@rem:16px;
@images:'../../public';

@smallBtn:{
  width:@width;
  // height:@width/5;
  cursor: pointer;
  border:none;
  // border-radius: @width/40;
}

@btn-hover:{
  border: none;
  height:@width/40*1.02;
}

.small-success-btn{
  @smallBtn();
  background-color:rgba(30, 216, 108, 0.8);
}

.small-danger-btn{
  @smallBtn();
  background-color:rgba(226, 42, 29, 0.8);
}


.small-success-btn:hover{
  @btn-hover();
  color:rgba(255,255,255,1);
  
}

@img-df:{
  width:@width/2;
  height:@width/2;
  display: inline-block;
}

.default-img{
  @img-df();
}

#main{
  width:500px;
  height:500px;
  display: flex;
  background-image: url("@{images}/back.jpg");
}
</style>