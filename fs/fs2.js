// 写文件（覆盖原来的文件）
var fs = require('fs');

const data =  '测试写入中文并覆盖';
fs.writeFile(__dirname + '/test/t2.txt', data, (err) => {
  if (err) throw err;
  console.log('文件已被保存');
});