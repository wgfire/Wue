export default {
    throttle: function (fn, wait) {
        let timeout = null
        return function () {
            let context = this;
            let args = arguments;
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    fn.apply(context, args)
                }, wait)
            }
        }

    },
    debounce: function (fn, wait, imadte) {
        console.log('执行防抖');
        let timeout = null
        return function () {
            let context = this;
            let args = arguments;
            if (timeout) clearTimeout(timeout);
            if (imadte) {
                let call = !timeout;
                timeout = setTimeout(() => {
                    timeout = null;
                }, wait)
                if (call) fn.apply(context, args)
            } else {
                timeout = setTimeout(() => {
                    fn.apply(context, args)
                }, wait);
            }
        }
    }
}