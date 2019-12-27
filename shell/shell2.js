var shell = require('shelljs');
 
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

shell.exec('git st', {
	silent: true,
	async: true,
}, function(code, stdout, stderr) {
  console.log('222Exit code:', code);
  console.log('111Program output:', stdout);
  console.log('333Program stderr:', stderr);
});