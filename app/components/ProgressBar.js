import React from "react"

function ProgressBar(props) {
  return (
    <div className="progress1 mx-2 mt-3">
      <div className="boxes2">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
      </div>
      <div className="progress-inner" style={{ transform: `scaleX(${props.score / 10})` }}></div>
    </div>
  )
}

export default ProgressBar
