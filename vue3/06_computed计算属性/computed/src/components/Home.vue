<template>
    <h1>准备一个人的信息</h1>
    姓:
    <input type="text" v-model="person.firstName"><br>
    名：
    <input type="text" v-model="person.lastName">
    <span>全名为{{person.fullName}}</span>
    <input type="text" v-model="person.fullName">
</template>

<script>
import {reactive,computed} from 'vue'
export default {
    name:'Home',
    setup(){
        //  数据
        let person = reactive({
            firstName:'张',
            lastName:'三'
        });
        //  计算属性----简写(只读)
        // person.fullName = computed(()=>{
        //     return person.firstName+'-'+person.lastName
        // })

        //  计算属性----完整写法(考虑读和写)
        person.fullName = computed({
            get(){
                return person.firstName+'-'+person.lastName
            },
            set(value){
                const nameArr = value.split('-');
                person.firstName = nameArr[0];
                person.lastName = nameArr[1];
            }
        })
        return{
            person
        }
    }
}
</script>

<style>

</style>