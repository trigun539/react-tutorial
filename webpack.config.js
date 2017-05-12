var webpack = require('webpack');
var resolve = require('path').resolve;
var join    = require('path').join;

module.exports = {
	context: join(__dirname, 'src'),
	entry: './app.js',
	output: {
		path: join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		modules: [
			'node_modules',
			'./src'
		]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: join(__dirname, 'node_modules')
			}
		]
	},
	devtool: '#eval-inline-source'
};
