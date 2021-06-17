

詳しいソース情報：
devtool: 'eval-source-map',


npm i -D optimize-css-assets-webpack-plugin@^5.0.4
npm i -D html-loader@^1.3.0 url-loader@^4.1.0

	entry: {
		main: './app/app.js',
		// main: './src/index.js',
		// vendor: './src/vendor.js',
	},
	// entry: './src/index.js',


	plugins: [
		new HtmlWebpackPlugin({
			template: './app/index.html',
			// template: './src/index.html',
		}),


  "devDependencies": {
    "@babel/core": "^7.11.6",
    "@babel/preset-env": "^7.11.5",
    "@babel/preset-react": "^7.10.4",
    "babel-loader": "^8.1.0",

npm i -D @babel/core@^7.11.6 @babel/preset-env@^7.11.5 @babel/preset-react@^7.10.4 babel-loader@^8.1.0

	module: {
		rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },


		new webpack.ProvidePlugin({
			$$: path.resolve(path.join(__dirname, 'app/js/shortJS.js')),
