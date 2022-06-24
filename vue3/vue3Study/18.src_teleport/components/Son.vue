<template>
    <div class="son">
        <h3>孙组件</h3>
        <Dialog/>
    </div>
</template>

<script>
import DialogVue from './Dialog.vue';
export default {
    name: "Son",
    components: {
        Dialog: DialogVue
    }
};
</script>

<style>
.son {
    background: red;
    padding: 10px;
}
































</style>