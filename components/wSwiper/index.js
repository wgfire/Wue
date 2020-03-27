// src/index.js
// 导入组件，组件必须声明 name
import wSwiper from './src/wSwiper.vue'
import wSwiperItem from './src/wSwiper-item.vue'

// 为组件提供 install 安装方法，供按需引入
wSwiper.install = function (Vue) {
    Vue.component(wSwiper.name, wSwiper)
}
wSwiperItem.install = function (Vue) {
    Vue.component(wSwiperItem.name, wSwiperItem)
}
// 默认导出组件
console.log('tag', wSwiper,wSwiperItem)
export  {wSwiper,wSwiperItem};