import Vue from 'vue'
import App from './App.vue'
import './static/iconfont'
import './static/global.styl'

//import HelloWorld from './components/helloWorld/index'

import wVue from '../components/index'
import tool from "./static/lib/tool";
Vue.prototype.$tool = tool
Vue.config.productionTip = false
Vue.use(wVue)

new Vue({
  render: h => h(App)
}).$mount('#app')