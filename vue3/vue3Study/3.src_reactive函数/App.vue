<template>
    <!-- vue3 中可以没有根标签 -->
    <p>姓名： {{ person.name }}</p>
    <p>年龄：{{ person.age }}</p>
    <button @click="changStudent">修改学生信息</button>
    <hr />
    <h3>工作类型：{{ person.job.type }}</h3>
    <h3>公司：{{ person.job.company }}</h3>
    <ul>
        <li v-for="(item, index) in person.hobby" :key="index">{{ item }}</li>
    </ul>
</template>

<script>
import { reactive } from "vue";
export default {
    name: "App",
    setup() {
        let person = reactive({
            name: "xiaotao",
            age: 18,
            job: {
                type: "前端开发",
                company: "腾讯"
            },
            hobby: ["打游戏", "看电影", "听音乐"]
        });

        function changStudent() {
            person.name = "xiaotao2";
            person.age = Math.random() * 100;
            person.job.type = "后端开发";
            person.job.company = "阿里";
            person.hobby[0] = "游泳";
        }

        return {
            person,
            changStudent
        };
    },
};
</script>
