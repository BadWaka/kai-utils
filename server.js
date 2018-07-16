const express = require('express');
const os = require('os');
const api = require('./src/api');
const color = require('./src/color');

// 获得 ip 地址
// const hostname = os.hostname;
// let IPv4;
// for (let i = 0; i < os.networkInterfaces().en0.length; i++) {
//     if (os.networkInterfaces().en0[i].family === 'IPv4') {
//         IPv4 = os
//             .networkInterfaces()
//             .en0[i]
//             .address;
//     }
// }
// console.log('hostname', hostname, 'IPv4', IPv4);

// express
const app = express();

// 设置跨域访问
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 获得百度图片
app.get('/getBaiduImgs', (req, res) => {
    console.log('/getBaiduImgs req', req.query);
    api.getBaiduImgs(req.query, (obj) => {
        // 数据处理
        let jsonObj = JSON.parse(obj.body);
        let array = [];
        jsonObj
            .data
            .forEach((item, index) => {
                let obj = {
                    src: item.thumburl,
                    text: Math.floor(Math.random() * 100),
                    icon: 'imgs'
                };
                if (req.query.isWh) {
                    obj.width = item.width;
                    obj.height = item.height;
                }
                if (req.query.isColor) {
                    obj.color = color.getRandomColor({
                        defaultColorArr: [
                            '#64808f',
                            '#be5a37',
                            '#0f0903',
                            '#1f372c',
                            '#c7945f',
                            '#617e9f'
                        ]
                    });
                }
                array.push(obj);
            });
        res.send(array);
    });
});

const server = app.listen(13003, () => {
    const port = server
        .address()
        .port
    console.log(`listening on http://:${port}`);
});