<template>
<!-- 组件结构 -->
    <div class="demo">
        <h2>{{studentName}}</h2>
        <h2>{{studentAge}}</h2>
        <h2>{{time}}</h2>
        <h2>{{who}}</h2>
        <h2>{{ownAge}}</h2>
        <button @click="showName">点我提示学生名</button>
        <button @click="updateAge">修改传入的年龄</button>
    </div>
</template>

<script>
//组件交互相关代码(数据、方法等等)
const student = ({
    name:'student',
    data(){
        return{
            studentName:'张三',
            studentAge:'19',
            ownAge:this.age
        }
    },
    methods: {
        showName(){
            alert(this.studentName);
        },
        updateAge(){
            this.ownAge++
        }
    },
    //简单声明接收
    // props:['time','who','age']

    //接收的同时对数据进行类型限制
    // props:{
    //     time:String,
    //     who:String,
    //     age:Number,
    // }

    //接收的同时对数据进行类型限制+默认值的指定+必要性的限制
    //props优先级比data要高,该组件初始化时优先准备props,再配置data(){}中数据
    props:{
        time:{
            type:String,    // time类型是字符串
            required:true, // time是必要的
            default:''
        },
        age:{
            type:Number,    // age类型是数字
            required:true, // age是必要的
            default:0
        },
        who:{
            type:String,    // who类型是字符串
            required:true, // who是必要的
            default:''
        },
    }

})
export default student
</script>

<style>
/*组件的样式*/
.demo{
    background-color: aquamarine;
}
</style>
