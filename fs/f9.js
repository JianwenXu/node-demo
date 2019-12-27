var fs = require('fs');
var xml2js = require('xml2js');

// 读文件
fs.readFile(__dirname + '/test/test.xml', {flag: 'r+', encoding: 'utf8'}, function (err, data) {
	if (err) {
		console.log('err', err);
	}
	xml2js.parseStringPromise(data)
	  .then(function (result) {
		  let jsData = result;
		  jsData.manifest.application[0]['meta-data'][1].$['android:value'] = '1234567890';

		  // json 2 xml
		  var builder = new xml2js.Builder({ xmldec: {
		  	'version': '1.0',
		  	'encoding': 'utf-8',
		  	'standalone': false
		  }});
		  var xml = builder.buildObject(jsData);

		  fs.writeFile(__dirname + '/test/test2.xml', xml, (err) => {
		    if (err) throw err;
		    console.log('文件已被保存');
		  });

		})
		.catch(function (err) {
		  console.log('解析错误', err);
		});
});