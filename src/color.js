/**
 * @file 颜色方法集
 * @author kai <waka931124@gmail.com>
 * 参考链接：https://www.jianshu.com/p/54fc0fce46cc
 */

/**
  * 得到随机颜色
  * @return {string} colorStr
  */
const getRandomColor = (opacity = 1) => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = 'rgba(' + r + ',' + g + ',' + b + ')';
    return color;
};

module.exports = {
    getRandomColor
};