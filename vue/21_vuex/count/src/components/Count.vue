<template>
    <div class="main">
        <h1 class="h1-text">当前数据和为:{{sum}}</h1>
        <h3 class="h1-text">当前数据放大十倍为:{{bigSum}}</h3>
        <h3 class="h1-text">{{school}}{{subject}}</h3>
        <h3 style="color:red">
            <!-- Person组件的总人数是:{{personList.length}} -->
        </h3>
        <div class="btn-group">
            <select v-model.number="originNum" class="select-default">
                <option v-for="item in selectOptions" :key="item.id" :value="item.value">{{item.value}}</option>
            </select>
            <button @click="increment(originNum)" style="flex:1">+</button>
            <!-- <button @click="INCREMENT(originNum)" style="flex:1">+</button> -->
            <button @click="decrement(originNum)" style="flex:1">-</button>
            <!-- <button @click="DECREMENT(originNum)" style="flex:1">-</button> -->
            <button @click="incrementOdd(originNum)" style="flex:1">当前求和为奇数时加</button>
            <button @click="incrementWait(originNum)" style="flex:1">等待一段时间后再加</button>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
    name:'Count',
    data(){
        return{
            originNum:1,
            selectOptions:[
                {
                    id:0,
                    value:1
                },
                {
                    id:1,
                    value:2
                },
                {
                    id:2,
                    value:3
                },
                {
                    id:3,
                    value:4
                },
            ]
        }
    },
    computed:{

        
        //  借助mapState生成计算属性，从state中读取数据。(对象写法)
        // ...mapState({
        //     sum:'sum',
        //     school:'school',
        //     subject:'subject'
        // })
        //  借助mapState生成计算属性，从state中读取数据。(数组写法)
        //  数组写法的实现:一方面生成sum、school、subject的计算属性，另一方面以上述三个名去this.$store.state中寻找与之匹配
        // ...mapState(['sum','school','subject','personList']),

        ...mapState('sumOptions',['sum','school','subject']),


        //  借助mapGetters生成计算属性，从Getters中读取数据。(对象写法)
        // ...mapGetters({
        //     bigSum:'bigSum',
        // })
        //  借助mapGetters生成计算属性，从Getters中读取数据。(数组写法)
        ...mapGetters('sumOptions',['bigSum'])
    },
    methods: {
        // increment(){
        //     // this.$store.dispatch('increment',this.originNum)
        //     this.$store.commit('INCREMENT',this.originNum)
        // },
        // decrement(){
        //     // this.$store.dispatch('decrement',this.originNum)
        //     this.$store.commit('DECREMENT',this.originNum)
        // },
        // incrementOdd(){
        //     this.$store.dispatch('incrementOdd',this.originNum)
        // },
        // incrementWait(){
        //     this.$store.dispatch('incrementWait',this.originNum)
        // },


        //  注意观察increment和decrement两种传参形式originNum（一般不用decrement方式）
        // decrement(){
        //     this.jian(this.originNum)
        // },
        // ...mapMutations({increment:'INCREMENT',jian:'DECREMENT'})
        //  借助mapMutations生成对应的方法,方法中会调用commit去联系mutations
        ...mapMutations('sumOptions',{increment:'INCREMENT',decrement:'DECREMENT'}),
        // ...mapMutations(['INCREMENT','DECREMENT'])


        //  借助mapActions生成对应的方法,方法中会调用dispatch去联系actions(对象写法)
        //  ...mapActions({incrementOdd:'incrementOdd',incrementWait:'incrementWait'})
        //  借助mapActions生成对应的方法,方法中会调用dispatch去联系actions(数组写法)
        ...mapActions('sumOptions',['incrementOdd','incrementWait'])
    },
}
</script>

<style lang="less" scoped>
    .main{
        width:100vw;
        height: 30vh;
        background: orange;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .h1-text{
            flex:2;
        }
        .btn-group{
            flex:0.5;
            display: flex;
            justify-content: space-around;
            .select-default{
                flex:1.5;
            }
        }
    }
</style>