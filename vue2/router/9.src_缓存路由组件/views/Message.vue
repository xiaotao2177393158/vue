<template>
    <div>
        <ul>
            <li v-for="item in messageList" :key="item.id">
                <!-- 跳转路由并携带 params 参数  字符串方式-->
                <router-link :to="`/home/message/detail/${item.id}/${item.title}`">
                {{ item.title }} </router-link>&nbsp;&nbsp;
                
                <button @click="replaceShow(item)">replace查看</button>
                <button @click="pushShow(item)">push查看</button>
            </li>
        </ul>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            messageList: [
                { id: 1, title: "message001"},
                { id: 2, title: "message002"},
                { id: 3, title: "message003"},
            ],
        };
    },
    methods: {
        pushShow(item){
            this.$router.push({
                name: 'detail',
                params: {
                    id: item.id,
                    title: item.title
                }
            })
        },
        replaceShow(item){
            this.$router.replace({
                name: 'detail',
                params: {
                    id: item.id,
                    title: item.title
                }
            })
        }
    }
};
</script>