const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		bundle: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:8000/',
			'webpack/hot/dev-server',
			'babel-polyfill',
			'script-loader!jquery/dist/jquery.min.js',
			'index',
		]
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: '/',
		filename: '[name].js'
	},
	externals: {
		jquery: 'jQuery'
	},
	resolve: {
		modules: ['node_modules', 'src'],
		extensions: ['.js', '.jsx', '.sass'],
		mainFiles: ['index', 'configureStore', 'styles', 'reducers', 'actions'],
		alias: {
			'Components': path.resolve(__dirname, './src/components'),
			'Containers': path.resolve(__dirname, 'src/containers'),
			'Actions': path.resolve(__dirname, './src/actions'),
			'Styles': path.resolve(__dirname, './src/styles'),
			'Reducers': path.resolve(__dirname, './src/reducers'),
			'Store': path.resolve(__dirname, './src/store'),
			'pain': path.resolve(__dirname, './src/components/Pain.jsx')
		}
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: 'pug-loader',
			},
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(sass|scss|css)$/,
				loaders: ['style-loader', 'css-loader',
					{
						loader: 'sass-loader',
						query: {
							includePaths: [
								path.resolve(__dirname, 'node_modules/foundation-sites/scss'),
							]
						}
					}]
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/views/template.pug',
			filename: 'index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'inline-source-map'
}
