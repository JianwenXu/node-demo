// 文件拷贝

const fs = require('fs');

// 默认情况下将创建或覆盖目标文件。
fs.copyFile(__dirname + '/test/t1.txt', __dirname + '/test2/t111.txt', (err) => {
  if (err) throw err;
  console.log('源文件已拷贝到目标文件');
});