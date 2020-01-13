/**
 * 测试 watch 文件
 */
const fs = require('fs');

const filePath = './files/channel.txt';

const channelWatcher = fs.watch(filePath, { encoding: 'utf8' }, (eventType, filename) => {
	if (eventType === 'change') {
		console.log('文件修改');
	  fs.readFile(filePath, {flag: 'a+', encoding: 'utf8'}, function (err, data) {
	  	if (err) {
	  		console.log('err', err);
	  	}
	    console.log('变更后的文件内容为', data);
	  });
	} else {
		console.log('其他事件类型', eventType);
	}
});

console.log('channelWatcher', channelWatcher);

