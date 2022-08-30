//  该文件用于创建vuex中核心store
import  Vue from 'vue'
//  引入Vuex
import Vuex from 'vuex';

Vue.use(Vuex);
//  准备actions--用于响应组件中的动作
// const actions = {
//     // increment(conText,value){
//     //     conText.commit('INCREMENT',value);
//     // },
//     // decrement(conText,value){
//     //     conText.commit('DECREMENT',value);
//     // },
//     incrementOdd(conText,value){
//         if (conText.state.sum % 2){
//             conText.commit('INCREMENTODD',value);
//         }
//     },
//     incrementWait(conText,value){
//         setTimeout(()=>{
//             conText.commit('INCREMENTWAIT',value);
//         },1000)
//     },
// };
// //  准备mutations--用于操作数据(state)
// const mutations={
//     INCREMENT(state,value){
//         state.sum += value
//     },
//     DECREMENT(state,value){
//         console.log(state,value);
//         state.sum = state.sum - value
//     },
//     INCREMENTODD(state,value){
//         state.sum += value
//     },
//     INCREMENTWAIT(state,value){
//         state.sum += value
//     },
//     ADD_PERSON(state,value){
//         state.personList.unshift(value)
//     }

// };
// //  准备state--用于存储数据
// const state={
//     sum:0,
//     school:'BEIJING',
//     subject:'生物',
//     personList:[
//         {
//             id:1,
//             name:'张三',
//             age:18
//         },
//         {
//             id:2,
//             name:'李四',
//             age:19
//         },
//         {
//             id:3,
//             name:'王五',
//             age:19
//         }
//     ]

// };

// //  (选配)getters配置项--用于将state中的数据进行加工
// const getters={
//     bigSum(state){
//         return state.sum*10
//     }
// }


//方式二
//日常搭建项目时，使用vuex常根据相关业务逻辑进行划分

//求和业务相关
const sumOptions = {
    namespaced:true,
    actions:{
        incrementOdd(conText,value){
            if (conText.state.sum % 2){
                conText.commit('INCREMENTODD',value);
            }
        },
        incrementWait(conText,value){
            setTimeout(()=>{
                conText.commit('INCREMENTWAIT',value);
            },1000)
        },
    },
    mutations:{
        INCREMENT(state,value){
            state.sum += value
        },
        DECREMENT(state,value){
            console.log(state,value);
            state.sum = state.sum - value
        },
        INCREMENTODD(state,value){
            state.sum += value
        },
        INCREMENTWAIT(state,value){
            state.sum += value
        },
    },
    state:{
        sum:0,
        school:'BEIJING',
        subject:'生物',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
}

//人员业务相关
const personOptions={
    namespaced:true,//命名空间
    actions:{
        add_wang(context,value){
            if (value.name.indexOf('王') != 0){
                value.name = '王人员'
            }
            context.commit("ADD_PERSON",value)
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {
                id:1,
                name:'张三',
                age:18
            },
            {
                id:2,
                name:'李四',
                age:19
            },
            {
                id:3,
                name:'王五',
                age:19
            }
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}


//  创建store
// const store = new Vuex.Store({
//     actions,
//     mutations,
//     state,
//     getters
// }



//  导出store
export default new Vuex.Store({
    modules:{
        sumOptions,
        personOptions
    } 
})