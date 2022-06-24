// 该文件专门用于路由的配置
import VueRouter from "vue-router";

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/home",
            component: () => import("../views/Home"),
            children: [
                {
                    path: "message",
                    component: () => import("../views/Message"),
                    children: [
                        {
                            name: 'detail',
                            path: "detail/:id/:title",
                            component: () => import("../views/Detail"),
                            // 值为对象 该对象中的所有 key-value 对都会被作为 props 传递给 Detail 组件  
                            // props: {id: "", title: ""},
                            // 值为布尔值 若值为true 则会将该路由接收到的所有 params 参数都作为 props 传递给 Detail 组件
                            props: true,
                            // 值为函数 该函数的返回值会被作为 props 传递给 Detail 组件
                            /* props: (route) => ({
                                id: route.query.id, 
                                title: route.query.title

                                id: route.params.id, 
                                title: route.params.title
                            }) */
                        }
                    ] 
                },
                {
                    path: "news",
                    component: () => import("../views/News"),
                }
            ]
        },
        {
            name: 'about',
            path: "/about",
            component: () => import("../views/About"),
        }
    ]
});