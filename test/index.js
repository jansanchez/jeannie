var jeannie = require('../dist/package/index'),
	fs = require('fs');

fs.readFile('samples/interfaces.yml', 'utf8', function (err, data) {
	var newFile = jeannie({
		content: data
	});
	//console.log(newFile.output);
});
