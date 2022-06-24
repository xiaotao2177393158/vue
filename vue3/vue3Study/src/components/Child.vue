<template>
    <div class="child">
        <h3>子组件</h3>
        <h4>{{sum}}</h4>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "Child",
    setup() {
        const sum = ref(0);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                sum.value = 1;
                resolve({ sum });
            }, 1000);
        });
    }
};
</script>

<style>
.child {
    background: yellow;
    padding: 10px;
}

</style>