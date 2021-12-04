// https://www.youtube.com/watch?v=EVze4Cq-dZ8
// JavaScriptゲーム：CSSトランジションとアニメーションを使用したインタラクティブな質問

// https://www.youtube.com/watch?v=eddzBlXBl3Y&t=1871s
// React (Babel) and Sass webpack Tutorial: Extract CSS Into Its Own Separate File

import './styles/main.scss'

import SlideRoutes from 'react-slide-routes'
import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import {
	HashRouter as Router,
	// BrowserRouter as Router,
	Route,
	NavLink,
	useLocation,
} from 'react-router-dom'

import Main from './components/Main'
import About from './components/About'

function App() {
	const location = useLocation()
	const link0 = useRef(null)

	useEffect(() => {
		$$.ocL(link0.current, 'active', 'add')
	}, [])

	return (
		<>
			<section className="section pt-0">
				<div className="container">
					<div className="columns">
						<div className="column"></div>
						<div className="column is-size-6 is-10">
							<div className="hero is-primary is-bold">
								<div className="hero-body h_hero">
									<div className="is-flex is-justify-content-space-between is-align-items-center">
										<h1 className="is-size-4-tablet is-size-3-desktop">
											初めての【 けいさん 】
										</h1>
										{/* <h1 className="is-size-6-mobile">
											<span className="subtitle is-size-6-mobile">
												<button
													type="button"
													className="button is-info has-tooltip-bottom has-tooltip-warning"
													data-tooltip="しんけいすいじゃく作成中"
												>ゲーム</button>
											</span>
										</h1> */}
									</div>
								</div>
							</div>

							<nav className="is-size-7-mobile my-2 px-2 pt-1">
								<NavLink to="/" exact ref={link0}>
									たし算・ひき算・かけ算
								</NavLink>
								<NavLink to="/about">お知らせ</NavLink>
							</nav>
							<SlideRoutes location={location} duration={500} className="mb-1">
								<Route path="/" exact component={Main} className="active" />
								<Route path="/about" component={About} />
								<Route component={Main} />
							</SlideRoutes>
						</div>

						<div className="column"></div>
					</div>
				</div>
			</section>
		</>
	)
}

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	$$.Id('app')
)

if (module.hot) {
	module.hot.accept()
}
