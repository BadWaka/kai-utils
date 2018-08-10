const fs = require('fs');

/**
 * 得到文件夹下的所有文件路径
 * @param {string} dirPath 文件夹路径
 * @param {Array} arr 文件路径数组
 */
const getDirAllFilePaths = (dirPath, arr = []) => {
    if (!fs.statSync(dirPath).isDirectory()) {
        arr.push(dirPath);
        return arr;
    }
    let fileList = fs.readdirSync(dirPath);
    fileList.forEach((fileItem, fileIndex) => {
        const fileItemDirPath = `${dirPath}/${fileItem}`;
        if (fs.statSync(fileItemDirPath).isDirectory()) {
            getDirAllFilePaths(fileItemDirPath, arr);
        }
        else {
            arr.push(fileItemDirPath);
        }
    });
    return arr;
};

module.exports = {
    getDirAllFilePaths
};