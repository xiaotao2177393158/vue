<template>
    <h4>{{ person }}</h4>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <span>{{ job.salary }}</span> <br /><br />
    <button @click="changName">修改姓名</button><br /><br />
    <button @click="changAge">修改年龄</button><br /><br />
    <button @click="job.salary += 10">薪资</button>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
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

        let name1 = person.name;
        console.log("name1", name1);

        let name2 = toRef(person, "name");
        console.log("name2", name2);

        let personToRefs = toRefs(person);
        console.log("personToRefs", personToRefs);

        function changName() {
            person.name += "~";
        }
        function changAge() {
            person.age = Math.random() * 100;
        }

        return {
            person,
            changName,
            changAge,
            /* name: toRef(person, "name"),
            age: toRef(person, "age"),
            salary: toRef(person.job, "salary"), */
            ...toRefs(person)
        };
    },
};
</script>
