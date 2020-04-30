// src/index.js
// 导入组件，组件必须声明 name
import wLaypage from './src/wLaypage.vue'

// 为组件提供 install 安装方法，供按需引入
wLaypage.install = function (Vue) {
    Vue.component(wLaypage.name, wLaypage)
}
// 默认导出组件
console.log('tag', wLaypage)
export default wLaypage;