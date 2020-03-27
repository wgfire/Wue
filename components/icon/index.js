// src/index.js
// 导入组件，组件必须声明 name
import wIcon from './src/wIcon.vue'

// 为组件提供 install 安装方法，供按需引入
wIcon.install = function (Vue) {
    Vue.component(wIcon.name, wIcon)
}
// 默认导出组件
console.log('tag', wIcon)
export default wIcon;