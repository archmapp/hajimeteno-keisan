import './styles/main.scss'

import SlideRoutes from 'react-slide-routes'
import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	Route,
	Link,
	NavLink,
	useLocation,
} from 'react-router-dom'

import Main from './components/Main'
import About from './components/About'

function App() {
	const location = useLocation()
	const link0 = useRef(null)
	// console.log(link0)
	// setTimeout(()=>console.log(link0), 2000)
	// console.log(link0.current)
	// setTimeout(() => console.log(link0.current), 2000)

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
										<h1 className="titleis-size-7-mobile">
											<Link to="/">初めての【 けいさん 】</Link>
										</h1>
										<h2 className="subtitle is-size-4 has-text-centered mt-2">
											さんすう入門
										</h2>
										<h2 className="subtitle is-size-7-mobile has-text-centered mt-2">
											~~ たし算・ひき算・かけ算 ~~
										</h2>
										<h3 className="subtitle has-text-white is-5">
											using Bulma & React
										</h3>
									</div>
								</div>
							</div>
							<nav className="is-size-7-mobile mt-2 px-2 pt-1">
								<NavLink to="/" exact ref={link0}>
									たし算・ひき算・かけ算
								</NavLink>
								<NavLink to="/about">お知らせ</NavLink>
							</nav>{' '}
							<SlideRoutes location={location} duration={500} className="mb-1">
								<Route
									path="/"
									exact
									component={Main}
									className="active mt-1"
								/>

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
