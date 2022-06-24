import Vue from "vue";
import App from "./App.vue";

import VueRoute from "vue-router";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VueRoute);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
