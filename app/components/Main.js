// import * as $$ from '../js/shortJS'

import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import ProgressBar from './ProgressBar'

function Main() {
	const MAX_COUNT = 10

	// ['+', '-', 'x']
	const [opes, setOpes] = useState(['+', '-'])
	const [score, setScore] = useState(0)
	const [mistakes, setMistakes] = useState(0)
	const answerField = useRef(null)
	const resetButton = useRef(null)

	const [cProblem, setCurrentProblem] = useState({})
	const [userAnswer, setUserAnswer] = useState('')
	const [showScore, setShowScore] = useState(false)
	const [showError, setShowError] = useState(false)

	useEffect(() => {
		const lS = JSON.parse(localStorage.getItem("opes"))
		if (lS) setOpes(lS)

		// $$.qcL('#slide-main', 'active', 'add')
	}, [])

	useEffect(() => {
		localStorage.setItem('opes', JSON.stringify(opes))
		resetGame()
	}, [opes])

	useEffect(() => {
		if (score >= MAX_COUNT || mistakes == 3) {
			setTimeout(() => resetButton.current.focus(), 331)
		}
	}, [score, mistakes])

	function generateNumber(max) {
		return Math.floor(Math.random() * (max + 1))
	}

	function generateProblem() {
		if (opes.length <= 0) {
			$$.q('.input-sel').setAttribute('disabled', true)
			$$.q('.btn-sel').setAttribute('disabled', true)
		} else {
			$$.q('.input-sel').removeAttribute('disabled')
			$$.q('.btn-sel').removeAttribute('disabled')
		}
		return {
			n1: generateNumber(10),
			n2: generateNumber(10),
			operator: opes[generateNumber(opes.length - 1)],
		}
	}

	function handleSubmit(e) {
		e.preventDefault()

		answerField.current.focus()

		let correctAnswer
		if (cProblem.operator == '+') correctAnswer = cProblem.n1 + cProblem.n2
		if (cProblem.operator == '-') correctAnswer = cProblem.n1 - cProblem.n2
		if (cProblem.operator == 'x') correctAnswer = cProblem.n1 * cProblem.n2

		if (correctAnswer == parseInt(userAnswer, 10)) {
			setScore((prev) => prev + 1)
			setCurrentProblem(generateProblem())
			setUserAnswer('')
			setShowScore(true)
			setTimeout(() => setShowScore(false), 1000)
		} else {
			setMistakes((prev) => prev + 1)
			setShowError(true)
			setTimeout(() => setShowError(false), 401)
			answerField.current.select()
		}
	}

	function resetGame() {
		setScore(0)
		setMistakes(0)
		setUserAnswer('')
		setCurrentProblem(generateProblem())
		answerField.current.focus()
	}

	function handleOpeClick(e) {
		// console.log(e)
		const opes2 = [...opes]
		if (e.target.checked) {
			opes2.push(e.target.value)
		} else {
			opes2.splice(opes2.indexOf(e.target.value), 1)
		}
		setOpes(opes2)
	}

	return (
		<>
			<article className="message is-primary py-5" id="b-r">
				<div>
					<div className="field ml-3">
						<input
							type="checkbox"
							className="is-checkradio has-background-color is-info"
							id="add"
							name="add"
							value="+"
							checked={opes.includes('+')}
							onChange={handleOpeClick}
						/>
						<label htmlFor="add">たし算</label>

						<input
							type="checkbox"
							className="is-checkradio has-background-color is-warning"
							id="sub"
							name="sub"
							value="-"
							checked={opes.includes('-')}
							onChange={handleOpeClick}
						/>
						<label htmlFor="sub">ひき算</label>

						<input
							type="checkbox"
							className="is-checkradio has-background-color is-danger"
							id="mul"
							name="mul"
							value="x"
							checked={opes.includes('x')}
							onChange={handleOpeClick}
						/>
						<label htmlFor="mul">かけ算</label>
					</div>
					{/* <p>{opes}</p> */}

					{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
					<div
						className={
							'main-ui' +
							(mistakes == 3 || score >= MAX_COUNT ? ' blurred' : '')
						}
					>
						<div
							style={{ marginBottom: '0.7rem' }}
							className={'problem' + (showError ? ' animate-wrong' : '')}
						>
							{cProblem.n1}{' '}
							<span
								className={opes <= 0 ? 'has-text-danger' : 'has-text-black-ter'}
							>
								{cProblem.operator || '?'}
							</span>{' '}
							{cProblem.n2}
						</div>

						<form onSubmit={handleSubmit}>
							<div className="field has-addons has-addons-centered py-2">
								<div className="control">
									<input
										ref={answerField}
										value={userAnswer}
										onChange={(e) => setUserAnswer(e.target.value)}
										type="text"
										className="input input-sel"
										placeholder="答えの入力"
										autoComplete="off"
									/>
								</div>
								<div className="control">
									<button
										type="button"
										className="button btn-sel has-text-white has-background-primary-dark"
										onClick={handleSubmit}
									>
										OK　[ENTERキー]
									</button>
								</div>
							</div>
						</form>

						<p className="status">
							あと、{' '}
							<span
								className={
									'has-text-weight-bold is-inline-block' +
									(showScore ? ' animate-score' : '')
								}
							>
								{MAX_COUNT - score}
							</span>{' '}
							点 ゲット！（目標：{MAX_COUNT}点）
							<br />
							まちがいは、あと{' '}
							<span
								className={
									'has-text-weight-bold is-inline-block' +
									(showError ? ' animate-wrong' : '')
								}
							>
								{2 - mistakes}
							</span>{' '}
							回まで
						</p>

						<ProgressBar score={score} />
					</div>

					{/* overlay */}
					<div
						className={
							'overlay' +
							(mistakes == 3 || score >= MAX_COUNT ? ' overlay--visible' : '')
						}
					>
						<div className="overlay-inner has-background-danger-light box p-6">
							<div className="end-message mb-3">
								{score >= MAX_COUNT ? (
									<div className="notification is-info pt-3 pb-2">
										おめでとう！　 あなたの勝ちです。
									</div>
								) : (
									<div className="notification is-warning pt-3 pb-2">
										残念、あなたの負けです。
									</div>
								)}
							</div>
							<p className="mt-5">
								<span>{score}</span> 点 ゲット！（目標：{MAX_COUNT}点）
								<br />
								まちがいは、 <span>{mistakes}</span> 回
							</p>
							<button
								ref={resetButton}
								onClick={resetGame}
								className="reset-button mt-6"
							>
								もう一度
							</button>
						</div>
					</div>
				</div>
			</article>
		</>
	)
}

export default Main
