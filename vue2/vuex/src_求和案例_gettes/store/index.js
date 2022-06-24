// 该文件用于创建 vuex 最核心的 store，并将其绑定到 Vue 实例上。

import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
// 使用
Vue.use(Vuex)

// 用于响应组件中的动作
const actions = {
    oddJia(context, value) {
        if(context.state.sum % 2 == 0) {
            context.commit('JIA',value)
        }
    },
    waitJia(context, value) {
        setTimeout(() => {
            context.commit('JIA',value)
        },500)
    }
}

// 用于操作数据
const mutations = {
    JIA(state, value) {
        state.sum += value
        console.log(state.sum);
    },
    JIAN(state, value) {
        state.sum -= value
        console.log(state.sum);
    }
}

//用于储存数据
const state = {
    sum: 0  // 当前和
}

// getters  用于将 state 中的数据进行处理，比如添加前缀等
const getters = {
    getSum(state) {
        return state.sum * 10
    }
}

// 创建 并 暴露 store 实例
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})