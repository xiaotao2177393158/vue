<template>
    <div>
        <ul>
            <li v-for="item in messageList" :key="item.id">
                <!-- 跳转路由并携带 query 参数  字符串方式-->
                <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">
                {{ item.title }} </router-link>&nbsp;&nbsp;

                <!-- 跳转路由并携带 query 参数  对象方式-->
                <router-link :to="{
                    path: '/home/message/detail',
                    query: {
                        id: item.id,
                        title: item.title
                    }
                }">
                {{ item.title }}
                </router-link>
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
};
</script>