<template>
    <!-- vue3 中可以没有根标签 -->
    <img alt="Vue logo" src="./assets/logo.png" />
    <p> 姓名： {{ name }}</p>
    <p>年龄：{{ age }}</p>
    <button @click="changStudent">修改学生信息</button>
    <hr>
    <h3>工作类型：{{job.type}}</h3>
    <h3>公司：{{job.company}}</h3>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "App",
    setup() {
        let name = ref("xiaotao");
        let age = ref(18);
        let job = ref({
            type: '前端开发',
            company: '腾讯'
        })

        function changStudent() {
            name.value = "xiaotao2";
            age.value = Math.random() * 100;
            job.value.type =  '后端开发';
            job.value.company = '阿里';
        }

        return {
            name,
            age,
            job,
            changStudent,
        };
    },
};
</script>
