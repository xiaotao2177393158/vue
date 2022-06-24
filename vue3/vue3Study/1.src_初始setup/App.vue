<template>
    <!-- vue3 中可以没有根标签 -->
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>Hello {{ msg }}</p>
    <button @click="sayHello">嘿嘿嘿</button>
</template>

<script>
// import { h } from 'vue';
export default {
    name: "App",
    setup() {
        // 数据
        let msg = " Vue!";
        let name = "xiaotao";
        let age = 18;

        // 方法
        function sayHello() {
            alert(`Hello ${name},我今年 ${age} 岁`);
        }

        return {
            msg,
            name,
            age,
            sayHello
        };

        // 返回一个函数（渲染函数）
        // return () => h('h1', 'Hello Vue!') 
    },
};
</script>
