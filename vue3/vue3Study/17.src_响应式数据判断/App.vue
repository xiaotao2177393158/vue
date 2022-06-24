<template>
    <div class="app">
        <h4>{{brand}} - {{model}} - {{year}}</h4>
    </div>
</template>

<script>
import { ref, reactive, toRefs, readonly, isRef, isReactive, isReadonly, isProxy } from "vue";
export default {
    name: "App",
    setup() {
        let car = reactive({
            brand: "Ford",
            model: "Mustang",
            year: 1964,
        });
        let sum = ref(0);
        let car2 = readonly(car);
        
        console.log(isRef(sum));
        console.log(isReactive(car));
        console.log(isReadonly(car2));
        console.log(isProxy(car));
        

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