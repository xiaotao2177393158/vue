import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(vueResource)

const vm = new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this    // 配置全局事件总线
  }
}).$mount('#app')