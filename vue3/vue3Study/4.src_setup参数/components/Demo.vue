<template>
    <!-- vue3 中可以没有根标签 -->
    <p>姓名： {{ person.name }}</p>
    <p>年龄：{{ person.age }}</p>
    <button @click="hello">触发Dome的hello事件</button><br><br>
    <slot name="aaa"></slot>
    <slot name="bbb"></slot>
</template>

<script>
import { reactive } from "vue";
export default {
    name: "Demo",
    props: {
        msg: String,
        name: String
    },
    emits: ["hello"],
    setup(props, context) {
        console.log('-----setup-----', props);
        console.log('-----setup-----', context);
        // console.log('-----setup-----', context.attrs);   // 与vue2的 $attrs 相同
        // console.log('-----setup-----', context.emit);   // 触发自定义事件
        console.log(context.slots);

        let person = reactive({
            name: "xiaotao",
            age: 18
        });

        function hello() {
            context.emit('hello', 'hello xiaotao');
        }

        return {
            person,
            hello
        };
    },
    beforeCreate() {
        console.log('-----beforeCreate-----');
    },
};
</script>
