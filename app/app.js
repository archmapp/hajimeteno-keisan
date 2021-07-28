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
			<section className="section">
				<div className="container">
					<div className="columns">
						<div className="column"></div>
						<div className="column is-size-6 is-10">
							<div className="hero is-primary is-bold">
								<div className="hero-body">
									<div className="container">
										<h1 className="title has-text-centered is-size-6-mobile">
											初めての【 けいさん 】
										</h1>
									</div>
								</div>
							</div>
							<nav className="is-size-7-mobile my-2 px-2 pt-1">
								<NavLink to="/" exact ref={link0}>
									たし算・ひき算・かけ算
								</NavLink>
								<NavLink to="/division">わり算</NavLink>
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
