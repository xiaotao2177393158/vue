<template>
    <!-- vue3 中可以没有根标签 -->
    sum: <span>{{ sum }}</span
    ><br /><br />
    <button @click="sum++">sum++</button>

    <h3>当前点击的鼠标坐标为：X: {{point.x}}  Y:   {{point.y}}</h3>
</template>

<script>
import { ref } from "vue";
import usePoint from '../hooks/usePoint';
export default {
    name: "Demo",

    setup() {
        let sum = ref(0);
        
        let point = usePoint();

        return {
            sum,
            point
        };
    }
};
</script>
