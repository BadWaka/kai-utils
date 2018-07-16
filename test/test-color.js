const color = require('../src/color');

// 传入默认颜色数组
let randomColor = color.getRandomColor({
    defaultColorArr: [
        '#64808f',
        '#be5a37',
        '#0f0903',
        '#1f372c',
        '#c7945f',
        '#617e9f'
    ]
});
console.log('randomColor', randomColor);