// 该文件专门用于路由的配置
import VueRouter from "vue-router";

const router = new VueRouter({
    // 默认开启hash模式
    mode: "history",
    routes: [
        {
            name: 'home',
            path: "/home",
            component: () => import("../views/Home"),
            meta: {
                title: "首页"
            },
            children: [
                {
                    name: 'message',
                    path: "message",
                    component: () => import("../views/Message"),
                    meta: {isAuth: true, title: "消息"},   // 当前路由需要登录才能访问
                    children: [
                        {
                            name: 'detail',
                            path: "detail/:id/:title",
                            component: () => import("../views/Detail"),
                            props: true,
                            meta: {
                                title: "详情"
                            }
                        }
                    ] 
                },
                {
                    name: 'news',
                    path: "news",
                    component: () => import("../views/News"),
                    meta: {isAuth: true, title: "新闻"},
                    // 独享路由守卫  只有前置 , 没有后置
                    beforeEnter: (to, from, next) => {
                        console.log('beforeEnter');
                        next();
                    }
                }
            ]
        },
        {
            name: 'about',
            path: "/about",
            component: () => import("../views/About"),
            meta: {
                title: "关于"
            }
        }
    ]
});

// 全局
router.afterEach((to, from) => {
    console.log('after');
    console.log(to);
    console.log(from);
    document.title = to.meta.title || '首页';
});

export default router;