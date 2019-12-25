// 创建目录
// 
// 注意：
// recursive: 是否创建多级，默认false只能创建一级，true的时候可以创建多级
var fs = require('fs');

fs.mkdir(__dirname + '/test3/t/t', { recursive: true }, function (err) {
  if(err)
    throw err;
  console.log('创建目录成功')
});