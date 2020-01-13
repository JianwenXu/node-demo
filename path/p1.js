const path = require('path');

var p1 = '/Users/mac/Library/Application Support/android-package-tool/appData/origin/origin.apk';
p1 = p1.replace(/(\s)/g, '\\$1');
console.log('replace', p1);
// console.log('path join', path.join(p1));
// console.log('path normalize', path.normalize(p1));