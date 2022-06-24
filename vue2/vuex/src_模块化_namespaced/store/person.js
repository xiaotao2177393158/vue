// person 相关配置
import axios from "axios"
import { nanoid } from "nanoid"

export default {
    namespaced: true,
    state: {
        personList: [
            {
                id: '1',
                name: '张三',
                age: 18
            },
            {
                id: '2',
                name: '李四',
                age: 20
            }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    },
    mutations: {
        ADD_PERSON(state, person) {
            state.personList.unshift(person)
        } 
    },
    actions: {
        // 添加的person 必须是性 张的格式 
        addPersonZhang(context, person) {
            if(person.name.indexOf('张') === 0) {
                context.commit('ADD_PERSON',person)
            }else {
                alert('请输入张开头的名字');
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(res => {
                context.commit('ADD_PERSON',{
                    id: nanoid(),
                    name: res.data,
                    age: Math.ceil(Math.random() * 100)
                })
            }, err => {
                alert(err.message);
            })
        }
    }
}