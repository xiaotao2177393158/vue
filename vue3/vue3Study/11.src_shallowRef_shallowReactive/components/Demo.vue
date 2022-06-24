<template>
    <span>{{ n }}</span
    ><br /><br />
    <button @click="n++">n++</button>
    <h4>{{ person }}</h4>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <span>{{ job.salary }}</span> <br /><br />
    <button @click="job.salary += 10">薪资</button>
</template>

<script>
import { reactive, toRef, toRefs, shallowReactive, shallowRef } from "vue";
export default {
    name: "Demo",

    setup() {
        // let person = shallowReactive({   // 只考虑第一层数据的改变 不会影响里面数据  （浅层次的响应式）
        let person = reactive({
            name: "xiaotao",
            age: 18,
            job: {
                salary: 20,
            },
        });

        // let n = shallowRef(1);    // 只处理基本数据类型的响应式 不会对对象进行处理

        return {
            n,
            person,
            ...toRefs(person),
        };
    },
};
</script>
