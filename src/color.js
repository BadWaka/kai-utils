/**
 * @file 颜色方法集
 * @author kai <waka931124@gmail.com>
 * 参考链接：https://www.jianshu.com/p/54fc0fce46cc
 */

/**
  * 得到随机颜色
  * @return {string} colorStr
  */
const getRandomColor = (obj) => {
    // 默认颜色数组
    if (obj.defaultColorArr) {
        let randomIndex = Math.floor(Math.random() * 6);
        return obj.defaultColorArr[randomIndex];
    }
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    return color;
};

module.exports = {
    getRandomColor
};