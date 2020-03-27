// src/index.js
// 导入组件，组件必须声明 name
import wButtonGroup from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
wButtonGroup.install = function (Vue) {
    Vue.component(wButtonGroup.name, wButtonGroup)
}
// 默认导出组件
console.log('tag', wButtonGroup)
export default wButtonGroup;