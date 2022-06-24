<template>
    <Demo @hello="showHelloMsg" msg="hello" name="xiaotao">
        <template v-slot:aaa>
            <span> slot1 </span>
        </template>
        <template v-slot:bbb>
            <span> slot2 </span>
        </template>
    </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
    name: "App",
    components: {
        Demo,
    },
    setup() {
        function showHelloMsg(val) {
            alert(`你触发了自定义函数我收到的参数是：${val} `);
        }

        return {
            showHelloMsg,
        };
    },
};
</script>
                
<style>
ul {
    list-style: none;
}
</style>
