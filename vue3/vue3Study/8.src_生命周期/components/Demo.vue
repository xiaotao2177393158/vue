<template>
    <!-- vue3 中可以没有根标签 -->
    sum: <span>{{ sum }}</span
    ><br /><br />
    <button @click="sum++">sum++</button>
</template>

<script>
import { onBeforeMount, ref, onBeforeUnmount, onMounted, onBeforeUpdate, onUpdated, onUnmounted  } from "vue";
export default {
    name: "Demo",

    setup() {
        let sum = ref(0);
        // 通过组合 API 的形式使用生命周期钩子
        onBeforeMount(() => {
            console.log("onBeforeMount");
        })
        onMounted(() => {
            console.log("onMounted");
        })
        onBeforeUpdate(() => {
            console.log("onBeforeUpdate");
        })
        onUpdated(() => {
            console.log("onUpdated");
        })
        onBeforeUnmount(() => {
            console.log("onBeforeUnmount");
        })
        onUnmounted(() => {
            console.log("onUnmounted");
        })
        

        return {
            sum,
        };
    },



    // 通过配置项的形式使用生命周期钩子
    //#region
    /* beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeUnmount() {
        console.log('beforeUnmount');
    },
    unmounted() {
        console.log('unmounted');
    }, */
    //#endregion
};
</script>
