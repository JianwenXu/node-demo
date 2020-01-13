const fs = require('fs');
const path = require('path');

const fsPromises = fs.promises;

const filePath = '/Users/mac/Desktop/testfile/test\ space/miaozhen-package-tool/sign/alias_info.txt';
// const filePath = path.join(__dirname, 'test\ space/t11.txt');
// const filePath = path.join(__dirname, 'test/t11.txt');

fsPromises.readFile(filePath, { flag: 'a+', encoding: 'utf8' })
  .then((data) => {
    console.log('数据为', data);
  })
  .catch(error => {
    console.log('错误', error)
  })