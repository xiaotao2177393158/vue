import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

// 全部引入

/* // 引入 ElementUI 组件
import ElementUI from "element-ui";
// 引入 ElementUI 的全部样式
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI); */

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';
Vue.use(Button);
Vue.use(Row);
Vue.use(DatePicker);


new Vue({
  render: (h) => h(App),
}).$mount("#app");
