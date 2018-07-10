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
        }
        else {
            url += `&${key}=${obj[key]}`;
        }
    });
    return url;
};

module.export = {
    getUrlByParamObj
};

let data = {
    a: '你好',
    b: '你不好',
    c: '你真的很好'
};

let url = getUrlByParamObj(data);
console.log('url', url);