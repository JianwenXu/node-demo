// 读取目录
// 
// 用到了 fs.stat 查看文件与目录的信息
var fs = require('fs');
var path = require('path');

fs.readdir(__dirname + '/test3/', function (err, files) {
  if(err) {
    console.error(err);
    return;
  }
  files.forEach(function (file) {
    var filePath = path.normalize(__dirname + '/test3/' + file);
    fs.stat(filePath, function (err, stat) {
      if(stat.isFile()) {
        console.log(filePath + ' is: ' + 'file');
      }
      if(stat.isDirectory()) {
        console.log(filePath + ' is: ' + 'dir');
      }
    });
  });
  for (var i = 0; i < files.length; i++) {
    //使用闭包无法保证读取文件的顺序与数组中保存的致
    (function () {
      var filePath = path.normalize(__dirname + '/test3/' + files[i]);
      fs.stat(filePath, function (err, stat) {
        if(stat.isFile()) {
          console.log(filePath + ' is: ' + 'file');
        }
        if(stat.isDirectory()) {
          console.log(filePath + ' is: ' + 'dir');
        }
      });
    })();
    }
});