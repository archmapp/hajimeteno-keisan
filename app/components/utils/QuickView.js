import React, { useState, useEffect, useRef } from 'react'
import './QuickView.css'

import $$ from '../../js/shortJS'

function QuickView() {
	useEffect(() => {
		$$.oe(
			document,
			(e) => {
				if (e.key === 'Escape') {
					// console.log(e.key)
					$$.qcL('.quickT')
				}
			},
			'keyup'
		)
		$$.qcLm('#quick', { selT: '.quickT' })
		// bulmaQuickview.attach()
	}, [])

	return (
		<>
			<article>
				<div className="quickview quickT">
					{/* <div id="quickviewDefault" className="quickview quickT my-1"> */}
					{/* <div className="box has-background-primary p-2"> */}
					<div className="box p-2" style={{ backgroundColor: '#375A7F' }}>
						<header className="quickview-header">
							<p className="is-size-4 has-text-white">ゲーム一覧</p>
							<span
								className="delete deleteQV"
								onClick={() => {
									$$.qcL('.quickT')
								}}
							></span>
						</header>

						<div className="quickview-body">
							<article className="message is-primary mb-0">
								<div className="message-header pb-1">
									<p>リンク先</p>
								</div>
								<div className="message-body is-size-6 py-2 px-0">
									<table className="table is-hoverable">
										<tbody>
											<tr>
												<th className="has-text-right is-flex-grow-5">
													<a href="https://affectionate-wozniak-de01a2.netlify.app/">
														初めての【 けいさん 】
													</a>
												</th>
												<td className="td_flex-direction is-size-7 is-flex-grow-4">
													だれでもできる
												</td>
											</tr>
											<tr>
												<th className="has-text-right is-flex-grow-5">
													<a href="https://jolly-lamport-67e201.netlify.app">
														しんけいすいじゃく
													</a>
												</th>
												<td className="td_width is-size-7 is-flex-grow-4">
													忍者トランプ
												</td>
											</tr>
											<tr>
												<th className="has-text-right is-flex-grow-5">
													<a href="https://flashcard2.netlify.app">
														一発勝負 <span style={{ color: 'red' }}>❣</span>
													</a>
												</th>
												<td className="td_boxes is-size-7 is-flex-grow-4">
													記憶ゲーム
												</td>
											</tr>
											<tr>
												<th className="has-text-right is-flex-grow-5">
													<a href="https://space-game2.netlify.app">
														いん石を狙え <span style={{ color: 'red' }}>❣</span>
													</a>
												</th>
												<td className="td_boxes is-size-7 is-flex-grow-4">
													宇宙の旅
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</article>
							<article className="message is-primary mt-3">
								<div className="message-header py-2 is-justify-content-center">
									<p className="is-size-7">
										<span>このビューの開閉について (トグル操作)</span>
									</p>
								</div>
								<div className="message-body py-1 ml-5 is-size-7">
									<ul>
										<li>
											画面下の［
											<span className="has-background-primary has-text-white">
												ゲーム一覧
											</span>
											］ボタンをクリックして開く
										</li>
										<li>
											[
											<span className="has-background-primary has-text-white">
												ESC
											</span>
											］キーを押して開閉することも出来ます
										</li>
									</ul>
								</div>
							</article>
						</div>
						<footer className="quickview-footer has-background-primary mt-4 mt-2 pb-3">
							<div
								className="mt-3"
								style={{ textAlign: 'center', width: '500px' }}
							>
								<div className="is-half-mobile is-one-quarter-desktop">
									<h6 className="title is-5 pb-1 mb-4">
										提供: <span className="is-size-5">アーキエムアップ</span>
									</h6>
									<p>
										<a href="http://www.archmapp.tech/">
											<strong className="is-success">
												第二版・Bulmaと共に！
											</strong>
										</a>
									</p>
									<address className="mt-1">
										<strong
											className="is-size-5 px-2 mt-2 mb-3"
											style={{ background: '#e3c800' }}
										>
											Bulma Project
										</strong>
										<p className="mt-3">北九州</p>

										<i className="fas fa-fw fa-envelope lightcoral"></i>
										<span className="mb-5">
											<a href="mailto:archmapp@i.softbank.jp">
												archmapp@i.softbank.jp
											</a>
										</span>
									</address>
								</div>
							</div>
						</footer>
					</div>
				</div>
			</article>
		</>
	)
}

export default QuickView
