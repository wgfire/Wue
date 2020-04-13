import wButton from "./wButton/index";
import wIcon from "./icon/index";
import wButtonGroup from './wButtonGroup/index'
import {wSwiper,wSwiperItem  } from "./wSwiper/index";
import wDebounce from "./wDebounce/index";

// 存储组件列表
const components = [wButton, wIcon, wButtonGroup,wSwiper,wSwiperItem,wDebounce];
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
function install(Vue) {
  // 遍历注册全局组件

  components.map(component => {

    Vue.component(component.name, component)
  });
  console.info('install-----all')
};
// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export {
  install,
 
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  
};