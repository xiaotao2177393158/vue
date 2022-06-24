// 该文件专门用于路由的配置
import VueRouter from "vue-router";

const router = new VueRouter({
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

// 全局前置路由守卫 初始化时调用,每次路由跳转前都会调用该方法
router.beforeEach((to, from, next) => {
    console.log('before');
    console.log(to);
    console.log(from);
    if (to.meta.isAuth) {   // 当前路由需要登录才能访问
        if(localStorage.getItem('token') === 'xiaotao') {
            next();
        } else {
            alert('请先登录');
        }
    } else {
        next();
    }
});

// 全局后置路由守卫 初始化时调用,每次路由跳转后都会调用该方法
router.afterEach((to, from) => {
    console.log('after');
    console.log(to);
    console.log(from);
    document.title = to.meta.title || '首页';
});

export default router;