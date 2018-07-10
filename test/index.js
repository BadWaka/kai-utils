let {
    getUrlByParamObj
} = require('kai-utils');

let data = {
    a: '参数1',
    b: '参数2',
    c: '参数3'
};

let url = getUrlByParamObj(data);
console.log('url', url);