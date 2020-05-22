import Vue from 'vue'
import App from './App.vue'
import './static/iconfont'
import './static/global.styl'

//import HelloWorld from './components/helloWorld/index'

import wVue from '../components/index'
import tool from "./static/lib/tool";
import Initdirectives from "./static/directives";
Vue.prototype.$tool = tool
Vue.config.productionTip = false
Vue.use(wVue)
tool.getIconfont('//at.alicdn.com/t/font_1478618_8p9zpqha323.js')
Initdirectives(Vue) // 注册全局指令
new Vue({
  render: h => h(App)
}).$mount('#app')