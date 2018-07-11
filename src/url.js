/**
 * @file url 操作方法集
 * @author kai <waka931124@gmail.com>
 */

/**
 * 根据参数对象得到 url
 * @param {object} obj 参数对象
 * @param {boolean} isEncode 是否需要编码，默认为 true
 * @return {string} url 拼接好的 url
 */
const getUrlByParamObj = (obj, isEncode = true) => {
    let url = '';
    let keyArr = Object.keys(obj);
    keyArr.forEach((key, index) => {
        // 前缀
        let prefix = '&';
        if (index === 0) {
            prefix = '?';
        }
        // 值
        let val = obj[key];
        // 转义
        if (isEncode) {
            val = encodeURI(val);
        }
        url += `${prefix}${key}=${val}`;
    });
    return url;
};

module.exports = {
    getUrlByParamObj
};