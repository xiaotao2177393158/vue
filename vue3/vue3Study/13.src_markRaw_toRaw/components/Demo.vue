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
    <button @click="job.salary += 10">薪资</button><br><br>
    
    <button @click="showRawPerson">输出最原始的数据</button> <br><br>

    <button @click="addCar" >添加一台车</button>
    <h4 v-show="person.car"> {{ person.car}}</h4>
    <button @click="person.car.color += '!'">修改颜色</button>
</template>

<script>
import { reactive, ref, toRefs, toRaw, markRaw } from "vue";
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

        /* toRaw: 用于将 reactive 生成的响应式对象 变成一个普通对象 */
        function showRawPerson() {
            let p = toRaw(person);
            console.log(p);
        }

        /* markRaw： 标记一个对象 使其永远不会变成响应式 */
        function addCar() {
            person.car = markRaw({
                brand: "奔驰",
                color: "红色",
            });
        }

        return {
            n,
            person,
            ...toRefs(person),
            showRawPerson,
            addCar,
        };
    },
};
</script>

