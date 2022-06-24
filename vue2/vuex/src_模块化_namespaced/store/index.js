// 该文件用于创建 vuex 最核心的 store，并将其绑定到 Vue 实例上。

import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'

import count from './count'
import person from './person'
// 使用
Vue.use(Vuex)


// 创建 并 暴露 store 实例
export default new Vuex.Store({
    modules: {
        count,
        person
    }
})