// 保存输出日志
var shell = require('shelljs');
let fs = require('fs');
 
let options = {
  flags: 'a',     // append模式
  encoding: 'utf8',  // utf8编码
};
 
let stdout = fs.createWriteStream('./logs/stdout.log', options);
let stderr = fs.createWriteStream('./logs/stderr.log', options);
 
// 创建logger
let logger = new console.Console(stdout, stderr);
 
// for (let i = 0; i < 100; i++) {
//   logger.log(`log message ${i}`);
//   logger.error(`err message ${i}`);
 
if (!shell.which('git')) {
	logger.error(`${+new Date()}: Sorry, this script requires git`);
  shell.exit(1);
}

shell.exec('git st', {
	silent: true,
	async: true,
}, function(code, stdout, stderr) {
  console.log('222Exit code:', code);
  logger.log(`${+new Date()}: ${stdout}`);
  console.log('111Program output:', stdout);
  console.log('333Program stderr:', stderr);
});