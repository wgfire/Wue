// src/index.js
// 导入组件，组件必须声明 name
import wButton from './src/wButton.vue'

// 为组件提供 install 安装方法，供按需引入
wButton.install = function (Vue) {
    Vue.component(wButton.name, wButton)
}
// 默认导出组件
console.log('tag', wButton)
export default wButton;