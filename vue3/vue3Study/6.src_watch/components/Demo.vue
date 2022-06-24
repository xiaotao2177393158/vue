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
    <button @click="changName">修改姓名</button><br><br>
    <button @click="changAge">修改年龄</button><br><br>
    <span>{{person.job.saler}}</span> <br><br>
    <button @click="person.job.saler += 10">薪资</button>
</template>

<script>
import { ref, reactive, watch } from "vue";
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
        watch(sum, (val) => {
            console.log('sum变化了', val);
        }, {
            immediate: true,  // 初始化就监视
            // deep: true    // 深度监视
        })
    
        // 监听ref 定义的响应式数据的变化 （多个）
        watch([sum,msg],(newVal, oldVal) => {
            console.log('sum或msg变化了', newVal, oldVal);
        })

        /* ******************监听reactive************************** */
        // 监听reactive定义的响应式数据的变化  （全部）
        /* 问题：
        1. oldVal 不能正常获取
        2. 强制开启了深度监视 */
        watch(person, (newVal, oldVal) => {
            console.log('person变化了', newVal, oldVal);
        }, {
            immediate: true, // 初始化就监视
            // deep: false   // deep 配置无效
        })

        // 监听reactive定义的响应式数据的变化  （单个）
        watch(() => person.age , (newVal, oldVal) => {
            console.log('person的age变化了', newVal, oldVal);
        })

        // 监听reactive定义的响应式数据的变化  （某些）
        watch([() => person.age , () => person.name ] , (newVal, oldVal) => {
            console.log('person的age或name变化了', newVal, oldVal);
        })

        // 特殊情况
        watch(() => person.job , (newVal, oldVal) => {
            console.log('person的job变化了', newVal, oldVal);
        },{deep: true})  // 监视的是reactive定义的某个属性 所有 deep 配置有效

        function changName() {
            person.name += '~';
        }

        function changAge() {
            person.age = Math.random() * 100;
        }

        return {
            sum,
            msg,
            person,
            changName,
            changAge
        };
    },

};
</script>
