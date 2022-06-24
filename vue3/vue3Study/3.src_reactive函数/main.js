// 引入的不再是  Vue 构造函数 引入的是一个名为 createApp 的工厂函数
import { createApp } from 'vue'
import App from '../src copy/App.vue'
import './index.css'

createApp(App).mount('#app')
  