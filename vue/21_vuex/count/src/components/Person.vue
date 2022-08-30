<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名字" v-model="name">
        <h3>列表中第一个人的名字是:{{firstPersonName}}</h3>
        <button @click="addName">添加</button>
        <button @click="addWang">添加一位王姓成员</button>
        <ul>
            <li v-for="item in personList" :key="item.id">
                {{item.name}}
            </li>
        </ul>
        <h3>Count组件的求和{{sum}}</h3>
    </div>
</template>

<script>
import {nanoid} from 'nanoid';
import {mapMutations} from 'vuex'
export default {
    name:'Person',
    data() {
        return {
            name:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personOptions.personList
        },
        sum(){
            return this.$store.state.sumOptions.sum
        },
        firstPersonName(){
            return this.$store.getters['personOptions/firstPersonName']
        }
    },
    methods: {
        addName(){
            const obj = {id:nanoid(),name:this.name,age:18}
            this.name=""
            this.$store.commit('personOptions/ADD_PERSON',obj)
        },
        addWang(){
            const obj = {id:nanoid(),name:this.name,age:18}
            this.name=""
            console.log(this.$store);
            this.$store.dispatch('personOptions/add_wang',obj)
        }
    },
}
</script>

<style>

</style>