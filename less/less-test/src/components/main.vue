<template>
  <div>
    <!-- <a href="http://">
      <h3>这是一个宇宙!</h3>
    </a>
    <div>
      <div class="cardYellow"></div>
      <div class="cardv"></div>
      <div class="top-triangle"></div>
    </div> -->
    <hr>
    <!-- <div id="warh">
    </div> -->
    <div id="main">hello</div>
    <div id="bosx">hello</div>
  </div>
</template>

<script setup>
  
</script>

<style lang="less" scoped>
@widthAll:200px;
@heightAll:200px;
@smallBtn:{
  width:180px;
  cursor: pointer;
  border:none;
  display: inline-block;
  line-height:10px;
  text-align: center;
  border-radius:10px;
  line-height:20px;
  font-size: 16px;
}
a{
  @smallBtn();
  background: aqua;
  position:relative;
  h3{
    color:red;
    &:hover{
      color:orange;
    }
  }
  &:hover{
    background: rgba(51, 234, 155, 0.5);
    &::before{
      border-left: 10px solid orange;
    }
  }
  &::before{
    content: '';
    display: block;
    width:0;
    height:0;
    border:10px solid transparent;
    border-left: 10px solid red;
    position: absolute;
    right:0;
    top:calc(50% - 10px);
  }
  @media (min-width: 1500px) {
    background-color:#000;
  }
  @media (min-width: 900px) and (max-width:1500px) {
    background-color:rgba(0, 0, 0,0.1);
  }
  }
  .card(@bgColor:blue){
    width:@widthAll;
    height:@heightAll;
    border-radius: 20px;
    background-color: @bgColor;
  }
  .cardYellow{
    .card(yellow);
  }
  .cardv{
    .card(red);
  }

  /**三角形方法匹配模式 */
  .triangle(top,@width:20px,@color:black){
    border-color:transparent transparent @color transparent;
  }
  .triangle(right,@width:20px,@color:black){
    border-color:transparent  transparent  transparent @color;
  }
  .triangle(bottom,@width:20px,@color:black){
    border-color:@color transparent transparent  transparent;
  }
  .triangle(left,@width:20px,@color:black){
    border-color:transparent @color transparent  transparent;
  }
  .triangle(@_, @width, @color:black){
    border-style: solid;
    border-width: @width;
  }

  .top-triangle{
    .triangle(top,40px,pink);
    width:0;
    height:0;
  }

  /**函数定义（嵌套） */
  #card(){
    background-color: aqua;
    .d(@width:200px){
      width:@width;
      #j(@height:200px){
        height:@height;
      };
    };
  }
  /**函数调用(多层级分别调用) */
  #warh{
    #card();
    // #card > .d > #j(450px);
    // #card > .d(200px);
  }

  /**when语法条件判断*/
  #cvcc{
    /**and运算符 */
    .border(@width,@color,@style) when (@width>100px) and (@color=#999){
      border:@width @style @color ;
    }
    /**not运算符 */
    .bgs(@color) when not (@color=#999) {
      background-color: @color
    }
    /**或运算符:用逗号分隔来实现或运算 */
    .font(@size) when (@size>100px) , (size<50px) {
      font-size:@size;
    } 
  }

  /**定义方法传不确定的参数 */
  .boxShadow(...){
    box-shadow: @arguments;
  }

  .textShadow(...){
    text-shadow: @arguments;
  }

  #bosx{
    .boxShadow(inset,0,0,10px,#333);
    .textShadow(10px, 10px, 10px,yellow);
    width: 200px;
    height: 200px;
  }
  #main{
    // #cvcc > .border(120px,#999,solid);
    width: 200px;
    height: 200px;
    // #cvcc > .bgs(#658);
    // #cvcc > .font(105px);

    // .boxShadow(0,0,10px,#333);
    .boxShadow(inset,0,0,10px,#333);

  }
</style>