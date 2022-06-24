<template>
    <button @click="changShow">切换隐藏/显示</button><br><br>
    <Demo v-if='isShowDemo'/>
</template>

<script>
import Demo from "./components/Demo.vue";
import { ref } from "vue";
export default {
    name: "App",
    components: {
        Demo,
    },
    setup() {
        let isShowDemo = ref(true);

        function changShow() {
            isShowDemo.value = !isShowDemo.value;
        }

        return {
            isShowDemo,
            changShow
        };
    },
};
</script>
                
<style>
ul {
    list-style: none;
}
</style>
