const fs = require('fs');
const api = require('../src/api');
const color = require('../src/color');

api.getBaiduImgs({
    word: '刺客信条',
    pn: 0,
    rn: 20
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
                color: color.getRandomColor({
                    defaultColorArr: [
                        '#64808f',
                        '#be5a37',
                        '#0f0903',
                        '#1f372c',
                        '#c7945f',
                        '#617e9f'
                    ]
                }),
                text: Math.floor(Math.random() * 100),
                icon: 'imgs'
            };
            array.push(obj);
        });
    // 写到文件里
    fs.writeFileSync('./data.json', JSON.stringify(array));
});