var jeannie = require('../dist/package/index'),
	fs = require('fs');

fs.readFile('samples/interfaces.yml', 'utf8', function (err, data) {
	var newFile = jeannie({
		debug: true,
		content: data,
		path: {
			interface: 'samples/x.hbs'
		}
	});
	// console.log(newFile.json);
	// console.log(newFile.output);
});
