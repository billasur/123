import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/ResultComponent.css";

export default function ResultComponent(props) {
  // Task 1: Access location data using useLocation() and props.location
  const location = props.location || useLocation();

  // Task 2: Destructure necessary data from the location state
  const {
    score = 0,
    totalQuestions = 0,
    answeredQuestions = 0,
    correctAnswers = 0,
    wrongAnswers = 0,
  } = location.state || {};

  // Task 3: Handle cases where data might be null or undefined
  if (
    totalQuestions === undefined ||
    answeredQuestions === undefined ||
    correctAnswers === undefined ||
    wrongAnswers === undefined
  ) {
    return <h3>Missing result data. Please try again.</h3>;
  }

  // Task 4: Calculate the passing score and determine the message
  const passingScore = Math.ceil(totalQuestions * 0.7); // 70% of totalQuestions
  const message =
    score >= passingScore
      ? "Congratulations! You passed the quiz!"
      : "You need more practice!";
  return (
    <div className="result">
      <h1>Result</h1>
      <div className="score-section">
        {/* Display the message based on the user's score */}
        <h3>{message}</h3>
        {/* Display the user's score */}
        <h1 className="score">Your score is {score}</h1>
        <div className="flex">
          <div className="details">
            <h5>Total number of questions</h5>
            <h5>Number of attempted questions</h5>
            <h5>Number of correct answers</h5>
            <h5>Number of wrong answers</h5>
          </div>
          <div className="number">
            {/* Display the corresponding numbers */}
            <h5>{totalQuestions}</h5>
            <h5>{answeredQuestions}</h5>
            <h5>{correctAnswers}</h5>
            <h5>{wrongAnswers}</h5>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/play-quiz">
          <button className="play">Play Again</button>
        </Link>
        <Link to="/">
          <button className="home-result">Back to home</button>
        </Link>
      </div>
    </div>
  );
}