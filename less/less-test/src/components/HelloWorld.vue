<template>
  <div>
    <button class="small-success-btn">点我看一下</button>
    <!-- <div id="main">

    </div> -->
    <div class="box">
      <button >haha</button>
      <span class="icon"></span>
    </div>
    <Main>
      
    </Main>
  </div>
</template>

<script setup>
  import Main from '../components/main.vue'
</script>

<style lang="less" scoped>
@bkColor:rgba(0,0,0,0.5);
@width:200px;
@height:200px;
@rem:16px;
@images:'../../public';

@smallBtn:{
  width:@width;
  cursor: pointer;
  border:none;
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

// #main{
//   width:500px;
//   height:500px;
//   display: flex;
//   background-image: url("@{images}/back.jpg");
// }
.box{
  width: 600px;
  height: 600px;
  border:5px solid #ccc;
  button{
    @smallBtn();
    margin:0 auto;
    display: block;
  }
}

@sb:'smallButton';//变量定义

.icon:after{  //伪类
  content:@sb;  //提示文字
}
</style>