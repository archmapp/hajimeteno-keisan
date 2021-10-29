// <button onclick="stop()">停止</button>
// <button onclick="play()" id="play">再生 loop</button>
// <button onclick="playOnce()" id="playOnce">再生一度だけ</button>

import React from 'react'

export const music = new Audio()

const AudioMp3 = () => {
	function init() {
		music.preload = 'auto'
		music.src = '../../assets/mp3/システム29.mp3'
		music.load()

		music.addEventListener(
			'ended',
			function () {
				music.currentTime = 0
				// 再生位置は秒単位で指定、現在の値を取得
				// music.play()
			},
			false
		)
	}

	function playOnce() {
		music.loop = false
		music.play()
	}

	function play() {
		music.loop = true
		music.play()
	}

	function stop() {
		music.pause()
		music.currentTime = 0
	}

	init()
	// let music = new Audio('mymusic.mp3')
	// music.play() // 再生
	// music.pause() // 一時停止

	return <></>
}

export default AudioMp3;


// 	完全に停止させて、次回再生した時に先頭から再生できるようにするには
// 以下のように記述します。
// 	music.pause();
// 	music.currentTime = 0;

// 音源を連続で再生するには、再生終了時のイベント「ended」を使うのが確実です。
// 	music.addEventListener("ended", function () {
// 		music.currentTime = 0;
// 		music.play();
// 	}, false);
