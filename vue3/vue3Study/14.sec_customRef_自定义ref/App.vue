<template>
    <input type="text" v-model="keyWord">
    <h3>{{keyWord}}</h3>
</template>

<script>
import { ref, customRef } from "vue";
export default {
    name: "App",
    setup() {
        // let keyWord = ref('hello');  // 使用vue3的ref
        let keyWord = myRef('hello');   // 使用自定义的ref  

        // 自定义 myRef 实现
        function myRef(value) {
            let timer;
            return customRef((track, trigger) => {
                return {
                    get() {
                        track();    // 通知vue追踪 value的变化
                        return value;
                    },
                    set(val) {
                        value = val;
                        clearTimeout(timer);
                        timer = setTimeout(() => {    // 等待 1s 再执行
                            trigger();  // 通知 vue 重新解析模板
                        }, 1000);
                        // trigger();   
                    }
                };
            })
        }

        return {
            keyWord
        };
    },
};
</script>
                
<style>
ul {
    list-style: none;
}
</style>
