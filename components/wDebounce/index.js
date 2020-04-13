const throttle = function (fn, wait = 50, isDebounce, ctx) {
    let timer
    let lastCall = 0
    return function (...params) {
        if (isDebounce) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                console.log('组件执行防抖');
                fn.apply(ctx, params)
            }, wait)
        } else {
            const now = new Date().getTime()
            if (now - lastCall < wait) return
            lastCall = now
            console.log('组件执行节流');
            fn.apply(ctx, params)
        }
    }
}


let wDebounce = {
    name: 'wDebounce',
    abstract: true,
    props: {
        time: Number,
        events: String,
        isDebounce: { // 节流还是防抖
            type: Boolean,
            default: true
        },
    },
    created() {
        this.eventKeys = this.events.split(',')
        console.log('eventkeys',this.eventKeys);
        
        this.originMap = {}
        this.throttledMap = {}
    },
    render() {
        const vnode = this.$slots.default[0]
        console.log('vnode',vnode)
        this.eventKeys.forEach((key) => {
            const target = vnode.data.on[key]// 执行的函数
            if (target === this.originMap[key] && this.throttledMap[key]) {
                vnode.data.on[key] = this.throttledMap[key]
            } else if (target) {
                this.originMap[key] = target
                this.throttledMap[key] = throttle(target, this.time, this.isDebounce, vnode)
                vnode.data.on[key] = this.throttledMap[key]
            }
        })
        return vnode
    },
    install: function (Vue) {
        Vue.component(wDebounce.name, wDebounce)
    }
}


export default wDebounce