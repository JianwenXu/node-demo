var fs = require('fs');

// 读文件
fs.readFile(__dirname + '/test/t1.txt', {flag: 'r+', encoding: 'utf8'}, function (err, fd) {
	if (err) {
		console.log('err', err);
	}
	const array = fd.split('\n');
  console.log(JSON.stringify(array));
});