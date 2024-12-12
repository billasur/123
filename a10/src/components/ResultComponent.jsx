
import React from "react";
import "../css/ResultComponent.css"

export default function ResultComponent(){
  return(
    <div className="result">
      <h1>Result</h1>
      <div className="score-section">
        <h3>You need more practice!</h3>
        <h1 className="score">Your score is 20%</h1>
        <div className="flex">
          <div className="details">
            <h5>Totol number of quesions</h5>
            <h5>Number of attempted questions</h5>
            <h5>Number of correct answers</h5>
            <h5>Number of wrong answers</h5>
          </div>
          <div className="number">
            <h5>15</h5>
            <h5>9</h5>
            <h5>3</h5>
            <h5>6</h5>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button className="play">Play Again</button>
        <button className="home">Back to home</button>
      </div>
    </div>
  )
}
