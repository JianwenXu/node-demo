/**
 * 测试读取 asar 文件
 */
const path = require('path');
const fs = require('fs');


const asarPath = '/Applications/秒针多渠道打包工具.app/Contents/Resources/app.asar';

const channelPath = 'assets/package-tools/channel.txt';

fs.readFileSync(path.join(asarPath, channelPath));

// 读文件
// fs.readFile(path.join(asarPath, channelPath), {flag: 'r+', encoding: 'utf8'}, function (err, data) {
// 	if (err) {
// 		console.log('err', err);
// 	}
//   console.log(data);
// });