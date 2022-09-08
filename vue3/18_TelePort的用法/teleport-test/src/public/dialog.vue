<template>
  <div>
    <button @click="isShow=true">点我出现弹窗</button>
    <teleport to='body' >
        <div class="mask" v-if="isShow">
            <div class="dialog">
                <h3>我是弹窗</h3>
                <h3>XXXXXXXXXX</h3>
                <h3>XXXXXXXXXX</h3>
                <h3>XXXXXXXXXX</h3>
                <button  @click="isShow=false">关闭弹窗</button>
            </div>
        </div>
    </teleport>
    
  </div>
</template>

<script>
import {ref} from "vue";
export default {
    name:'Dialog',
    setup(){
        let isShow = ref(false);
        return{isShow}
    }
}
</script>

<style scoped>
    .mask{
        position: absolute;
        top:0;right:0;bottom:0;left:0;
        background: rgba(0,0,0,0.5);
    }
    .dialog{
        background: greenyellow;
        text-align: center;
        position: absolute;
        top:50%;
        left:50%;
        width:300px;
        height:300px;
        transform: translate(-50%,-50%);

    }
</style>