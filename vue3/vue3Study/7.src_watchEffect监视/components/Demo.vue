<template>
    <!-- vue3 中可以没有根标签 -->
    sum: <span>{{sum}}</span><br><br>
    <button @click="sum++">sum++</button>
    <hr>
    msg: <span>{{msg}}</span><br><br>
    <button @click="msg+='！'">msgChange</button>

    <hr>
    <h3>姓名：{{person.name}}</h3>
    <h3>年龄：{{person.age}}</h3>
    <span>{{person.job.saler}}</span> <br><br>
    <button @click="person.job.saler += 10">薪资</button>
</template>

<script>
import { ref, reactive, watch, watchEffect } from "vue";
export default {
    name: "Demo",

    setup() {
        let sum = ref(0)
        let msg = ref('hello')
        let person = reactive({
            name: 'xiaotao',
            age: 18,
            job: {
                saler: 20
            }
        })


        /* ******************监听ref************************** */
        // 监听ref 定义的响应式数据的变化 （一个）   
        /* watch(sum, (val) => {
            console.log('sum变化了', val);
        }, {
            immediate: true,  // 初始化就监视
        }) */

        /* watchEffect : 不用指明监视谁 使用谁就会监视谁 */
        watchEffect(() => {
            console.log('sum变化了', sum.value);
            console.log('msg变化了', msg.value);
        })
    
        return {
            sum,
            msg,
            person
        };
    },

};
</script>
