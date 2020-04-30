import tool from "../static/lib/tool";

var directivesObj = {
    'debounce': { // 防抖指定
        bind: function (el, binding, vnode, oldVnode) {
            console.log('插入到元素', binding);
            let typeList = Object.keys(binding.value)
            typeList.forEach(type => {
                 el.addEventListener(
                     type,
                    tool.debounce(binding.value[type], 2000, true)
                  );
            })
        },
        update: function (params) {
            console.log('更新了')
        }

    }
}

function Initdirectives(obj) {

    if (obj instanceof Object) {
        const dirKey = Object.keys(directivesObj)

        dirKey.forEach((key) => {
            obj.directive(key, directivesObj[key])
        })

    } else {
        new Error('请传入Vue对象')
    }
}

export default Initdirectives