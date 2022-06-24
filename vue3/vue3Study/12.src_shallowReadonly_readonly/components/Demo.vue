<template>
    <span>{{ n }}</span
    ><br /><br />
    <button @click="n++">n++</button>
    <h4>{{ person }}</h4>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3><br>
    <button @click="name += '~'">name chang</button><br><br>
    <button @click="age += 10">age chang</button><br><br>
    <span>{{ job.salary }}</span> <br /><br />
    <button @click="job.salary += 10">薪资</button>
</template>

<script>
import { reactive, ref, toRefs, readonly, shallowReadonly } from "vue";
export default {
    name: "Demo",

    setup() {
        let person = reactive({
            name: "xiaotao",
            age: 18,
            job: {
                salary: 20,
            },
        });
        let n = ref(1);
        
        person = readonly(person);      //  让一个响应式数据变成只读  （深只读）
        person = shallowReadonly(person);  // 让一个响应式数据变成只读  （浅只读）

        return {
            n,
            person,
            ...toRefs(person),
        };
    },
};
</script>
