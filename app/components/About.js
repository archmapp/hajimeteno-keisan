import React from 'react'
import { Link } from 'react-router-dom'

const About = (props) => {
	return (
		<article className="container box py-2">
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
								<div className="mt-2">
									<a
										href="https://www.youtube.com/watch?v=eddzBlXBl3Y"
										className="has-text-centered"
									>
										<span className="is-size-6 has-text-success-dark has-text-centered">
											React (Babel) and Sass webpack Tutorial{' '}
										</span>
									</a>{' '}
									へ 移動
									<br />
									<span className="has-text-black-ter ml-5">by </span>
									<span className="is-size-5 has-text-primary-dark">
										Brad LearnWebCode
									</span>
								</div>
							</div>
						</div>
					</article>

					<article className="message is-info pb-3 mx-4">
						<div className="message-header has-background-success-light">
							<div className="is-size-6 has-text-black-ter">
								参考： ( YOUTUBE )
								<div className="mt-2">
									<a
										href="https://www.youtube.com/watch?v=w7ejDZ8SWv8"
										className="has-text-centered"
									>
										<span className="is-size-6 has-text-success-dark has-text-centered">
											React JS Crash Course 2021{' '}
										</span>
									</a>{' '}
									へ 移動
									<br />
									<span className="has-text-black-ter ml-5">by </span>
									<span className="has-text-primary-dark has-text-weight-bold is-size-5 mt-4">
										Brad Traversy Media
									</span>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>

			<div className="has-text-centered mt-6">
				<h4>
					作成:　
					<span className="has-text-weight-semibold has-text-success-dark">
						アーキエムアップ
					</span>
					　<span className="has-text-weight-semibold">archmapp</span>
				</h4>
				<h4 className="mb-3">メール:　archmapp@i.softbank.jp</h4>
				<Link to="/">戻る</Link>
			</div>
		</article>
	)
}

export default About
