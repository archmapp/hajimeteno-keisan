import React from 'react'
import { Link } from 'react-router-dom'

const About = (props) => {
	return (
		<article className="articleAbout container box py-2">
			<div className="columns is-centered">
				<div className="column is-12 content">
					<article className="message is-info">
						<div className="message-header is-size-5">
							<div className="is-size-5">
								<span className="tag is-primary is-large mr-2 pt-2">
									さんすう入門
								</span>
							</div>
						</div>
						<blockquote className="py-3 mx-1">
							<span className="has-text-weight-normal">
								<span className="has-text-weight-medium has-text-warning-dark">
									<strong>
										下のユーチューブを参考にさせていただきました。（２人の
										Brad）
									</strong>
								</span>
							</span>
						</blockquote>
					</article>

					<article className="message is-info pb-3 mx-4">
						<div className="message-header has-background-success-light">
							<div className="is-size-6 has-text-black-ter">
								参考： ( YOUTUBE )
								<div className="mt-3 ml-3">
									<ul>
										<li>
											<a
												href="https://www.youtube.com/watch?v=EVze4Cq-dZ8"
												className="has-text-left"
											>
												<span className="is-size-6 has-text-success-dark">
													JavaScriptゲーム：CSSトランジションとアニメーション
													を使用したインタラクティブな質問 へ 移動
												</span>
											</a>
										</li>
										<li>
											<a href="https://www.youtube.com/watch?v=70fadMRqnBo">
												<span className="is-size-6 has-text-success-dark">
													Learn React.js in 70 Minutes: JSX &amp; useState
													Tutorial へ 移動
												</span>
											</a>
										</li>
										<li>
											<a href="https://www.youtube.com/watch?v=eddzBlXBl3Y">
												<span className="is-size-6 has-text-success-dark">
													React (Babel) and Sass webpack Tutorial へ 移動
												</span>
											</a>
										</li>
									</ul>

									<br />
									<span className="has-text-black-ter ml-6">by &nbsp;</span>
									<span className="is-size-5 has-text-primary-dark">
										Brad Schiff LearnWebCode
									</span>
								</div>
							</div>
						</div>
					</article>

					<article className="message is-info pb-3 mx-4">
						<div className="message-header has-background-success-light">
							<div className="is-size-6 has-text-black-ter">
								参考： ( YOUTUBE )
								<div className="mt-3 ml-3">
									<ul>
										<li>
											<a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8">
												<span className="is-size-6 has-text-success-dark">
													React JS Crash Course 2021 へ 移動
												</span>
											</a>
										</li>
									</ul>

									<span className="has-text-black-ter ml-6">by &nbsp;</span>
									<span className="has-text-primary-dark has-text-weight-bold is-size-5 mt-4">
										Brad Traversy Media
									</span>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>

			<div className="box has-background-white-bis has-text-centered mt-6 pt-6">
				<h4
					className="title has-text-weight-semibold has-tooltip-top has-tooltip-primary"
					data-tooltip="Javascriptを使って"
				>
					<a href="https://www.archmapp.tech/" className="has-text-info-dark">
						<small className="is-size-5">第二版・</small>
						Bulmaと共に！
					</a>
				</h4>
				<h4>
					作成:　
					<span className="has-text-weight-semibold has-text-success-dark">
						アーキエムアップ
					</span>
					　<span className="has-text-weight-semibold">archmapp</span>
				</h4>
				<h4 className="my-4">メール:　archmapp@i.softbank.jp</h4>
				<Link to="/" className="button is-outlined is-link">
					戻る
				</Link>
			</div>
		</article>
	)
}

export default About
