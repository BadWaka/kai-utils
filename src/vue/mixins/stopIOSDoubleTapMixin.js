/**
 * @file 阻止 iOS 默认双击上/下滑 mixin；仅在 iOS 下有效
 * @author wangkai37<waka931124@gmail.com>
 */

// 双击时间间隔
const DOUBLE_TAP_TIME_INTERVAL = 300;

export default {
    beforeDestory() {
        if (this.isIOS() && this.flagStopIOSDoubleTapMixin) {
            this.removeOrientationListenerMixin();
        }
    },
    methods: {
        // 添加事件 body touchend 监听
        addBodyTouchendListenerStopIOSDoubleTapMixin() {
            if (!this.isIOS()) {
                return;
            }
            // 记录上次触摸的时间
            this.lastTouchTimeStopIOSDoubleTapMixin = null;
            // 标志位
            this.flagStopIOSDoubleTapMixin = true;
            // 监听 document.body 的 touchend 事件
            document.body.addEventListener('touchend', this.bodyTouchendListenerStopIOSDoubleTapMixin, false);
        },
        // 移除事件 body touchend 监听
        removeBodyTouchendListenerStopIOSDoubleTapMixin() {
            if (!this.isIOS()) {
                return;
            }
            // 标志位
            this.flagStopIOSDoubleTapMixin = false;
            // 移除监听
            document.body.removeEventListener('touchend', this.bodyTouchendListenerStopIOSDoubleTapMixin);
        },
        bodyTouchendListenerStopIOSDoubleTapMixin(e) {
            if (!this.isIOS()) {
                return;
            }
            // 当前触摸的时间戳
            let curTouchTime = new Date().getTime();
            // 如果上次触摸的时间不存在
            if (!this.lastTouchTimeStopIOSDoubleTapMixin) {
                this.lastTouchTimeStopIOSDoubleTapMixin = curTouchTime;
            }
            // 时间差值
            let timeDiff = curTouchTime - this.lastTouchTimeStopIOSDoubleTapMixin;
            if (timeDiff < DOUBLE_TAP_TIME_INTERVAL && timeDiff > 0) {
                // 阻止 iOS 双击默认滑动的行为
                e.cancelable && e.preventDefault();
                return false;
            }
            this.lastTouchTimeStopIOSDoubleTapMixin = curTouchTime;
        },
        isIOS() {
            return /(iphone|ipod|ipad)/.test(navigator.userAgent.toLowerCase());
        }
    }
};
