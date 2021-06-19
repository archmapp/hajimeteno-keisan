https://archmapp.github.io/hajimeteno-keisan/


ty7575au@yahoo.co.jp
https://app.netlify.com/sites/affectionate-wozniak-de01a2/overview

affectionate-wozniak-de01a2.netlify.app

https://affectionate-wozniak-de01a2.netlify.app/



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


サーバーを立ち上げる必要
https://ja.stackoverflow.com/questions/55377/%E3%81%AA%E3%81%9Creact%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B%E3%81%A8%E3%81%8Dlocalhost%E3%81%AE%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%A7%E3%81%99%E3%81%8B



~~~
<nav className="mt-2 mx-6 px-2 pt-1">
	<NavLink to="/" exact>
		たし算・ひき算・かけ算
	</NavLink>
	<NavLink to="/about">お知らせ</NavLink>
</nav>{' '}

				a.active {
					background: #fff;
					font-weight: 500;
					border-radius: 8px;
					box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
				}


	<li>
		<NavLink exact to="/" activeStyle={current}>
			トップ NavLink ... activeStyle=
		</NavLink>
	</li>
	<li>
		<NavLink to="/hello" activeStyle={current}>
			Hello NavLink
		</NavLink>
	</li>

			const current = { color: 'Red' }
~~~


    this.name  = React.createRef();
    this.email = React.createRef();
				<div>
					<label htmlFor="name">名前：</label>
					<input id="name" name="name" type="text"
						ref={this.name} defaultValue="山田太郎" />
				</div>
				<div>
					<label htmlFor="email">メールアドレス：</label>
					<input id="email" name="email" type="mail"
						ref={this.email} defaultValue="tyamada@example.com" />
				</div>


	const answerField = useRef(null)
	const resetButton = useRef(null)
				<input
					ref={answerField}
					value={userAnswer}
				<button
					ref={resetButton}
					onClick={resetGame}


GitHub Pages で React Router を使った SPA サイトを動かす方法
https://maku.blog/p/9u8it5f/



下層ページを直接開くと404になる問題
https://www.i-ryo.com/entry/2021/02/28/174841#%E4%B8%8B%E5%B1%A4%E3%83%9A%E3%83%BC%E3%82%B8%E3%82%92%E7%9B%B4%E6%8E%A5%E9%96%8B%E3%81%8F%E3%81%A8404%E3%81%AB%E3%81%AA%E3%82%8B%E5%95%8F%E9%A1%8C

メインページ（/）は「index.html」をアクセスするので問題ないが、別ページ（/other）にアクセスした場合は「/other/index.html」を探しに行って（実際には存在しない仮想のディレクトリ&ファイルのため「そんなページないよ（404）」となるようだった。


リソースが存在しないと直接URLにアクセスしても404になる
