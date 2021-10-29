// https://www.youtube.com/watch?v=EVze4Cq-dZ8
// JavaScriptゲーム：CSSトランジションとアニメーションを使用したインタラクティブな質問

// https://www.youtube.com/watch?v=eddzBlXBl3Y&t=1871s
// React (Babel) and Sass webpack Tutorial: Extract CSS Into Its Own Separate File

import './styles/main.scss'

import SlideRoutes from 'react-slide-routes'
import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
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
			<section className="section mt-0 pt-0">
				<div className="container">
					<div className="columns">
						<div className="column mt-0 pt-0"></div>
						<div className="column is-size-6 is-10 mt-0 pt-0">
							<div className="card">
								<header className="card-header has-background-primary">
									<div className="card-header-title is-flex is-justify-content-space-between is-align-items-cente">
										<div className="title is-size-6-mobile">
											初めての【 けいさん 】
										</div>
										<div className="is-size-6-mobile">
											<span className="subtitle is-size-6-mobile">
												<a href="mailto:archmapp@i.softbank.jp">トランプ</a>
											</span>
										</div>
									</div>
									<a
										href="#0"
										className="card-header-icon"
										aria-label="More options"
									>
										<span className="icon">
											<i className="fas fa-angle-down"></i>
										</span>
									</a>
								</header>

								<div className="card-content pt-1">
									<nav className="is-size-7-mobile my-2 px-2 pt-1">
										<NavLink to="/" exact ref={link0}>
											たし算・ひき算・かけ算
										</NavLink>
										{/* <NavLink to="/division">わり算</NavLink> */}
										<NavLink to="/about">お知らせ</NavLink>
									</nav>
								</div>
							</div>

							<div className="hero is-primary is-bold h_hero">
								<div className="hero-body">
									<div className="container is-flex is-justify-content-space-around">
										<h1 className="title is-size-6-mobile">
											初めての【 けいさん 】
										</h1>
										<h2 className="is-size-6-mobile">
											<span className="subtitle is-size-6-mobile">
												<a href="mailto:archmapp@i.softbank.jp">トランプ</a>
											</span>
										</h2>
									</div>
								</div>
							</div>
							<nav className="is-size-7-mobile my-2 px-2 pt-1">
								<NavLink to="/" exact ref={link0}>
									たし算・ひき算・かけ算
								</NavLink>
								{/* <NavLink to="/division">わり算</NavLink> */}
								<NavLink to="/about">お知らせ</NavLink>
							</nav>
							<SlideRoutes location={location} duration={500} className="mb-1">
								<Route path="/" exact component={Main} className="active" />
								<Route path="/division" component={About} />
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
