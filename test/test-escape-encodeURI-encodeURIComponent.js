/**
 * @file 测试 escape、encodeURI、encodeURIComponent 的区别
 */

let str = '刺客信条';

let escapeDemo = escape(str);
let encodeURIDemo = encodeURI(str);
let encodeURIComponentDemo = encodeURIComponent(str);

console.log('escapeDemo', escapeDemo);
console.log('encodeURIDemo', encodeURIDemo);
console.log('encodeURIComponentDemo', encodeURIComponentDemo);