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