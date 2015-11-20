var jeannie = require('../dist/package/index'),
	fs = require('fs');

fs.readFile('test/samples/interfaces.yml', 'utf8', function (err, data) {
	var newFile = jeannie({
		debug: true,
		content: data,
		path: {
			header: 'test/samples/header.hbs'
		}
	});
	// console.log(newFile.json);
	// console.log(newFile.output);
});
