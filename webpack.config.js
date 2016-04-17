'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './app/main.ts',
		vendor: [
			'es6-shim',
			'es6-promise',
			'zone.js',
			'rxjs',
			'reflect-metadata',
			'angular2/bundles/angular2-polyfills',
			'angular2/bootstrap',
			'angular2/platform/browser',
			'angular2/platform/common_dom',
			'angular2/core',
			'angular2/router',
			'angular2/http'
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/'
	},
	module: {
		preLoaders: [
			{test: /\.ts$/, loader: 'tslint', exclude: /node_modules/}
		],
		loaders: [
			{test: /\.ts$/, loader: 'ts', exclude: /node_modules/}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', '[name].bundle.js'),
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: 'head',
			minify: false
		})
	],
	resolve: {
		extensions: ['', '.webpack.js', '.ts', '.js']
	}
};
