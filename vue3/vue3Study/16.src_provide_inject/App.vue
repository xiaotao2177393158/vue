<template>
    <div class="app">
        <h3>祖组件</h3>
        <h4>{{brand}} - {{model}} - {{year}}</h4>
        <Child/>
    </div>
</template>

<script>
import { reactive, toRefs, provide } from "vue";
import Child from "./components/Child.vue";
export default {
    name: "App",
    components: {
        Child,
    },
    setup() {
        let car = reactive({
            brand: "Ford",
            model: "Mustang",
            year: 1964,
        });
        
        provide("car", car);     // 给自己的后代组件传递数据

        return  {...toRefs(car)};
    }
};
</script>

<style>
.app {
    background: skyblue;
    padding: 10px;
}
</style>