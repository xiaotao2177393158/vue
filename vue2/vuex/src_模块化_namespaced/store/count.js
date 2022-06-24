// 求和相关配置
export default {
    namespaced: true,
    state: {
        sum: 0,  // 当前和
        school: '清华大学',
        subject: '计算机科学与技术'
    },
    getters: {
        getSum(state) {
            return state.sum * 10
        }
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
            console.log(state.sum);
        },
        JIAN(state, value) {
            state.sum -= value
            console.log(state.sum);
        }
    },
    actions: {
        oddJia(context, value) {
            if(context.state.sum % 2 !== 0) {
                context.commit('JIA',value)
            }
        },
        waitJia(context, value) {
            setTimeout(() => {
                context.commit('JIA',value)
            },500)
        }
    }
}