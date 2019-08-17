const path = require('path');

module.exports = {
	mode: 'development',
	entry: './Pages/Index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'wwwroot/js')
	}
};