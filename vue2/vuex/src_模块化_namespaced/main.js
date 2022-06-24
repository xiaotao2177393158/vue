import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import store from './store'

Vue.config.productionTip = false

Vue.use(vueResource)

new Vue({
  render: h => h(App),
  store,   
  beforeCreate() {
    Vue.prototype.$bus = this    // 配置全局事件总线
  }
}).$mount('#app')