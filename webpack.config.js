var path         			= require('path');
var slsw        		  = require('serverless-webpack');
var nodeExternals 		= require('webpack-node-externals');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  // Generate sourcemaps for proper error messages
  devtool: 'source-map',
  // Since 'aws-sdk' is not compatible with webpack,
  // we exclude all node dependencies
  externals: [nodeExternals()],
  // Run babel on all .js files and skip those in node_modules
  module: {
    rules: [
			{
      	test: /\.js$/,
      	include: __dirname,
      	exclude: /node_modules/,
      	use: [
       	 {
       	   loader: 'babel-loader',
       	   options: {
       	     plugins: ["source-map-support", "transform-runtime"],
       	     presets: ['env', 'stage-3'],
       	   },
       	 },
     	 ],
    	},
		]
  },
	plugins: [
		// Copy Vali Admin files
		new CopyWebpackPlugin([
			{
				from: 'admin/views',
				to: 'views',
			},
      {
				from: 'admin/css',
				to: 'css',
			},
      {
				from: 'admin/js',
				to: 'js',
			}
		])
	],
	output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
};
