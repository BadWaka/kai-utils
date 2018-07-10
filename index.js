/**
 * 根据参数对象得到 url
 * @param {object} obj 参数对象
 * @return {string} url 拼接好的 url
 */
const getUrlByParamObj = (obj) => {
    let url = '';
    let keyArr = Object.keys(obj);
    keyArr.forEach((key, index) => {
        if (index === 0) {
            url += `?${key}=${obj[key]}`;
        } else {
            url += `&${key}=${obj[key]}`;
        }
    });
    return url;
};

module.exports = {
    getUrlByParamObj
};