const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const path = require('path')
const chalk = require('chalk')

const config = require('./webpack.devConfig')

// Server Setup
const PORT = 8000


const server = new WebpackDevServer(webpack(config), {
	contentBase: '/public',
	port: PORT,
	hot: true,
	historyApiFallback: true,
	compress: true,
	setup: (app) => {
	},
	quiet: false,
	noInfo: false,
	stats: {
		colors: true,
	},
})

server.listen(PORT, 'localhost', () => {
	console.log(chalk.bgWhite.bold(`Webpack Development Server is up and running on port ${PORT}`))
	console.log(chalk.blue(`Browse to http://localhost:${PORT}`))
})
