/**
 * @file api 集合
 * @author kai <waka931124@gmail.com>
 */

const request = require('request');
const fs = require('fs');
const url = require('./url');

/**
 * 得到百度图片
 * @param {object} param 参数对象
 * @param {function} cb 回调方法
 */
const getBaiduImgs = (param, cb) => {
    let api = 'https://m.baidu.com/sf/vsearch/image/search/wisejsonala';
    let param2 = {
        tn: param && param.tn || 'wisejsonala',
        ie: param && param.ie || 'utf8',
        cur: param && param.cur || 'result',
        fromsf: param && param.fromsf || 1,
        word: param && param.word || '刺客信条',
        pn: param && param.pn || 0,
        rn: param && param.rn || 30,
        gsm: param && param.gsm || 78
    };
    api += url.getUrlByParamObj(param2);
    request(api, (error, response, body) => {
        // 触发回调
        cb({error, response, body});
    });
};

module.exports = {
    getBaiduImgs
};