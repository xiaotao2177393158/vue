<template>
    <!-- vue3 中可以没有根标签 -->
    姓：<input type="text" v-model="person.firstName"><br>
    名：<input type="text" v-model="person.lastName"><br>
    姓名：<span>{{person.fullName}}</span><br>
    姓名：<input type="text" v-model="person.fullName"><br>
</template>

<script>
import { reactive, computed } from "vue";
export default {
    name: "Demo",

    setup() {
        let person = reactive({
            firstName: "xiao",
            lastName: 'tao'
        });

        // 计算属性 (简写) 没有考虑变量的变化
        /* person.fullName = computed(() => {
            return person.firstName + ' - ' + person.lastName;
        }); */

        // 计算属性 完整
        person.fullName = computed({
            get() {
                return person.firstName + ' - ' + person.lastName;
            },
            set(val) {
                let arr = val.split(' - ');
                person.firstName = arr[0];
                person.lastName = arr[1];
            }
        });


        return {
            person
        };
    },

};
</script>
