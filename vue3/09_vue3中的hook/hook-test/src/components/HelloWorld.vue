<template>
  <div>
    <h2>当前点击鼠标的坐标为:x:{{point.x}},y:{{point.y}}</h2>
  </div>
</template>

<script>
import usePoint from '../hooks/usePoint'
export default {
  name:'HelloWorld',
  setup(){
    const point = usePoint();
    return{
      point
    }
  }
}
</script>

<style>

</style>