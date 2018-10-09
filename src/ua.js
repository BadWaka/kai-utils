/**
 * @file 判断 user-agent
 * @author kai <waka931124@gmail.com>
 */

const isIOS = () => /(iphone|ipod|ipad)/.test(navigator.userAgent.toLowerCase());

module.exports = {
    isIOS
};
