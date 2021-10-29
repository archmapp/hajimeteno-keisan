// https://www.youtube.com/watch?v=EVze4Cq-dZ8
// JavaScriptゲーム：CSSトランジションとアニメーションを使用したインタラクティブな質問

// https://www.youtube.com/watch?v=eddzBlXBl3Y&t=1871s
// React (Babel) and Sass webpack Tutorial: Extract CSS Into Its Own Separate File

// import * as $$ from '../js/shortJS'

import React, { useState, useEffect, useRef } from 'react'
import ProgressBar from './ProgressBar'

// import AudioMp3, {music} from './utils/AudioMp3'

function Main() {
	// const MAX_COUNT = 2
	const MAX_COUNT = 10

	// ['+', '-', 'x']
	const [opes, setOpes] = useState(['+', '-'])
	const [nextStep, setNextStep] = useState(false)
	const [score, setScore] = useState(0)
	const [mistakes, setMistakes] = useState(0)
	const answerField = useRef(null)
	const resetButton = useRef(null)

	const [cProblem, setCurrentProblem] = useState({})
	const [userAnswer, setUserAnswer] = useState('')
	const [showScore, setShowScore] = useState(false)
	const [showError, setShowError] = useState(false)

	useEffect(() => {
		const lS = JSON.parse(localStorage.getItem('opes'))
		if (lS) setOpes(lS)
	}, [])

	useEffect(() => {
		const lS = JSON.parse(localStorage.getItem('nextStep'))
		if (lS) setNextStep(lS)
	}, [])

	useEffect(() => {
		localStorage.setItem('opes', JSON.stringify(opes))
		resetGame()
	}, [opes])

	useEffect(() => {
		localStorage.setItem('nextStep', JSON.stringify(nextStep))
		resetGame()
	}, [nextStep])

	useEffect(() => {
		if (score >= MAX_COUNT) {
			setTimeout(() => resetButton.current.focus(), 331)
		} else {
			setCurrentProblem(generateProblem())
			setUserAnswer('')
		}
	}, [score])

	useEffect(() => {
		if (mistakes >= 3) {
			setTimeout(() => resetButton.current.focus(), 331)
		} else {
			setCurrentProblem(generateProblem())
		}
	}, [mistakes])

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
			n1: generateNumber(nextStep ? 100 : 10),
			n2: generateNumber(10),
			operator: opes[generateNumber(opes.length - 1)],
		}
	}

	function handleSubmit(e) {
		e.preventDefault()
		// music.play()

		answerField.current.focus()

		let correctAnswer
		if (cProblem.operator == '+') correctAnswer = cProblem.n1 + cProblem.n2
		if (cProblem.operator == '-') correctAnswer = cProblem.n1 - cProblem.n2
		if (cProblem.operator == 'x') correctAnswer = cProblem.n1 * cProblem.n2

		if (correctAnswer == parseInt(userAnswer, 10)) {
			setScore((prev) => prev + 1)
			// setCurrentProblem(generateProblem())
			// setUserAnswer('')
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
			{/* <AudioMp3 /> */}
			<article
				className={'message py-5 ' + (nextStep ? 'nlred' : 'is-primary')}
				id="b-r"
			>
				<div>
					<div className="is-flex is-flex-direction-row is-justify-content-space-around mb-4">
						<div className="is-flex is-flex-direction-row">
							<div>
								<input
									type="checkbox"
									className="is-checkradio has-background-color is-info"
									id="add"
									name="add"
									value="+"
									checked={opes.includes('+')}
									onChange={handleOpeClick}
								/>
								<label htmlFor="add" className="is-size-7-mobile">
									足算
								</label>
							</div>
							<div>
								<input
									type="checkbox"
									className="is-checkradio has-background-color is-warning"
									id="sub"
									name="sub"
									value="-"
									checked={opes.includes('-')}
									onChange={handleOpeClick}
								/>
								<label htmlFor="sub" className="is-size-7-mobile">
									引算
								</label>
							</div>
							<div>
								<input
									type="checkbox"
									className="is-checkradio has-background-color is-danger"
									id="mul"
									name="mul"
									value="x"
									checked={opes.includes('x')}
									onChange={handleOpeClick}
								/>
								<label htmlFor="mul" className="is-size-7-mobile">
									掛算
								</label>
							</div>
						</div>
						<div
							className="field has-tooltip-bottom has-tooltip-warning"
							data-tooltip="二桁の数をふくむ"
						>
							<input
								type="checkbox"
								className="switch is-outlined is-warning"
								id="nextStep"
								name="nextStep"
								checked={nextStep}
								onChange={() => setNextStep((prev) => !prev)}
							/>
							<label
								htmlFor="nextStep"
								className={
									'is-size-7-mobile ' +
									(nextStep ? 'has-text-weight-semibold' : '')
								}
							>
								次の一歩
							</label>
						</div>
					</div>
					{/* <p>{opes}</p> */}

					<ProgressBar score={score} />

					{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
					<div
						className={
							'main-ui' +
							(mistakes == 3 || score >= MAX_COUNT ? ' blurred' : '')
						}
					>
						<div
							style={{ marginBottom: '0.7rem' }}
							className={
								'problem is-size-1-touch my-0' +
								(showError ? ' animate-wrong' : '')
							}
						>
							{cProblem.n1}{' '}
							<span
								className={
									opes <= 0 || showError
										? 'has-text-danger'
										: 'has-text-black-ter'
								}
							>
								{cProblem.operator || '?'}
							</span>{' '}
							{cProblem.n2}
						</div>

						<form onSubmit={handleSubmit}>
							<div className="field has-addons has-addons-centered py-1 my-0">
								<div className="control">
									<input
										ref={answerField}
										value={userAnswer}
										onChange={(e) => setUserAnswer(e.target.value)}
										type="number"
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

						<div className="status mt-2">
							あと、{' '}
							<span
								className={
									'has-text-weight-bold is-inline-block' +
									(showScore ? ' animate-score' : '')
								}
							>
								{MAX_COUNT - score}
							</span>{' '}
							点 ゲット！
							<br />
							<span className="is-size-6 is-size-7-mobile">
								（ もくひょう： {MAX_COUNT} 点 ）
							</span>
							<div className="mt-touch">
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
							</div>
						</div>
					</div>

					{/* overlay */}
					<div
						className={
							'overlay' +
							(mistakes == 3 || score >= MAX_COUNT ? ' overlay--visible' : '')
						}
					>
						<div className="overlay-inner has-background-danger-light box p-5">
							<div className="end-message mb-3">
								{score >= MAX_COUNT ? (
									<div className="notification is-info is-flex-desktop is-justify-content-center pt-3 pb-2">
										<div>　おめでとう！　</div>
										<div>あなたの勝ちです。</div>
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
