// 写文件（在原来的文件上面追加）
// 
// 注意：
// 必须目录存在才行
var fs = require('fs');

const data =  '追加写文件';
fs.appendFile(__dirname + '/test/q/t3.txt', data, (err) => {
  if (err) throw err;
  console.log('文件已被追加并保存');
});