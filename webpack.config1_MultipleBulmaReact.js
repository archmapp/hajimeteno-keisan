const path = require('path')
const webpack = require('webpack')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const mode = process.env.NODE_ENV.trim() || 'development'
const isDev = mode === 'development'

let config = {
	mode: isDev ? 'development' : 'production',

	entry: {
		main: './src/index.js',
		vendor: './src/vendor.js',
	},
	// entry: './src/index.js',

	devtool: 'eval-source-map',

	devServer: {
		// before: function (app, server) {
		// 	server._watch('./src/sub/**/*.html')
		// },
		// contentBase: 'docs',
		contentBase: path.join(__dirname, 'docs'),
		open: true,
		hot: true,
		writeToDisk: true,
		// port: 3000,
		// host: '0.0.0.0',
	},

	module: {
		rules: [
			{
				// test: /\.css$/,
				test: /\.css|\.scss$/,
				use: [
					isDev ? { loader: 'style-loader' } : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							// options...
						},
					},
				],
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
					options: {
						attributes: true,
					},
				},
			},
			{
				test: /\.(gif|png|jpg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							// wings.jpg: 16.3KB<51200
							limit: 51200,
							name: './imgs/[name].[ext]',
						},
					},
				],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		// ~~~ By default, module resolution path is current folder (./**) and node_modules.
		// It is also possible to specify full path:
		new webpack.ProvidePlugin({
			$$: path.resolve(path.join(__dirname, 'app/js/shortJS.js')),
			// bulmaCalendar: path.resolve(
			// 	path.join(__dirname, 'src/js/bulma-calendar.min.js')
			// ),
			bulmaCalendar: './bulma-calendar.min.js',
		}),
	],
}

if (isDev) {
	config = {
		...config,
		output: {
			path: path.resolve(__dirname, 'docs'),
			filename: 'js/[name].js',
		},
	}
} else {
	config = {
		...config,
		optimization: {
			minimize: true,
			minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
		},
		output: {
			path: path.resolve(__dirname, 'docs'),
			filename: 'js/[name]-[chunkhash].js',
		},
	}
	config.plugins.push(
		new MiniCssExtractPlugin({
			filename: 'css/[name]-[chunkhash].css',
		}),
		new CleanWebpackPlugin()
	)
}

module.exports = config
