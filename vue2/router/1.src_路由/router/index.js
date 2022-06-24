// 该文件专门用于路由的配置
import VueRouter from "vue-router";

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/home",
            component: () => import("../views/Home"),
        },
        {
            path: "/about",
            component: () => import("../views/About"),
        }
    ]
});