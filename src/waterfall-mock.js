const fs = require('fs');
const api = require('./api');
const color = require('./color');

api.getBaiduImgs({
    word: '刺客信条'
}, (obj) => {
    // 数据处理
    let jsonObj = JSON.parse(obj.body);
    let array = [];
    jsonObj
        .data
        .forEach((item, index) => {
            let obj = {
                src: item.thumburl,
                width: item.width,
                height: item.height,
                color: color.getRandomColor()
            };
            array.push(obj);
        });
    // 写到文件里
    fs.writeFileSync('./data.json', JSON.stringify(array));
});