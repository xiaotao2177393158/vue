<template>
    <button @click="isShow = !isShow">弹出框</button>
    <teleport to="body">
        <div class="mask"  v-if="isShow">
            <div class="dialog">
            <h3>我是一个弹出框</h3>
            <h4>内容·</h4>
            <h4>内容·</h4>
            <h4>内容·</h4>
            <button @click="isShow = !isShow">关闭弹框</button>
        </div>
        </div>
    </teleport>
</template>

<script>
import { ref } from "vue";
export default {
    name: "Dialog",
    setup() {
        let isShow = ref(false);

        return {
            isShow,
        };
    },
};
</script>

<style>
.dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: greenyellow;
    text-align: center;
    width: 20%;
}
.mask {
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;
    background: rgba(0,0,0,0.5);
    padding: 10px;
}
</style>





































</.>