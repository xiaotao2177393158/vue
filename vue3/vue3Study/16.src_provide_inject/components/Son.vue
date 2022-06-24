<template>
    <div class="son">
        <h3>孙组件</h3>
        <h4>{{brand}} - {{model}} - {{year}}</h4>
    </div>
</template>

<script>
import { inject, toRefs } from 'vue';
export default {
    name: "Son",
    setup() {
        const car = inject('car');
        return  {...toRefs(car)};
    },
};
</script>

<style>
.son {
    background: red;
    padding: 10px;
}





























</style>