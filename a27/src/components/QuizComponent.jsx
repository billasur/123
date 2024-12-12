import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/QuizComponent.css';
import questions from './quizQuestion.json';

class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: questions,
      currentQuestion: {},
      nextQuestion: {},
      prevQuestion: {},
      currentQuestionIndex: 0,

      // Added new
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      numberofAnsweredQuestions: 0,
      answer: '',
      isLastQuestion: false,
    };
  }

  componentDidMount() {
    this.displayQuestion();
  }

  displayQuestion = () => {
    const { questions, currentQuestionIndex } = this.state;

    if (questions.length && currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      const nextQuestion = questions[currentQuestionIndex + 1];
      const prevQuestion = questions[currentQuestionIndex - 1];
      const answer = currentQuestion.answer;

      this.setState({
        currentQuestion,
        nextQuestion,
        prevQuestion,
        answer,
        isLastQuestion: currentQuestionIndex === questions.length - 1,
      });
    }
  };

  handleNextButtonClick = () => {
    const { currentQuestionIndex, questions } = this.state;

    if (currentQuestionIndex < questions.length - 1) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
        }),
        () => {
          this.displayQuestion();
        }
      );
    }
  };

  handlePrevButtonClick = () => {
    if (this.state.currentQuestionIndex > 0) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1,
        }),
        () => {
          this.displayQuestion();
        }
      );
    }
  };

  handleQuitButtonClick = () => {
    if (window.confirm('Are you sure you want to quit?')) {
      window.location.reload(false);
    }
  };

  handleOptionClick = (e) => {
    const { answer, currentQuestionIndex, questions } = this.state;
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    const selectedOption = e.target.innerHTML.trim().toLowerCase();
    const correctAnswer = answer.toLowerCase();

    if (selectedOption === correctAnswer) {
      this.correctAnswer(isLastQuestion);
    } else {
      this.wrongAnswer(isLastQuestion);
    }
  };

  correctAnswer = (isLastQuestion) => {
    this.setState(
      (prevState) => ({
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberofAnsweredQuestions: prevState.numberofAnsweredQuestions + 1,
      }),
      () => {
        if (isLastQuestion) {
          this.finishQuiz();
        } else {
          this.displayQuestion();
        }
      }
    );

    alert('Correct answer!');
  };

  wrongAnswer = (isLastQuestion) => {
    this.setState(
      (prevState) => ({
        wrongAnswers: prevState.wrongAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberofAnsweredQuestions: prevState.numberofAnsweredQuestions + 1,
      }),
      () => {
        if (isLastQuestion) {
          this.finishQuiz();
        } else {
          this.displayQuestion();
        }
      }
    );

    alert('Wrong answer!');
  };

  finishQuiz = () => {
    const {
      numberofAnsweredQuestions,
      score,
      correctAnswers,
      questions,
      wrongAnswers,
    } = this.state;

    // Use navigate to move to the finish quiz page
    this.props.navigate('/finish-quiz', {
      state: {
        answeredQuestions: numberofAnsweredQuestions,
        score: score,
        correctAnswers: correctAnswers,
        totalQuestions: questions.length,
        wrongAnswers: wrongAnswers,
      },
    });
  };

  render() {
    const { currentQuestion, currentQuestionIndex, questions } = this.state;

    if (!currentQuestion || !currentQuestion.question) {
      return <div>Loading...</div>;
    }

    return (
      <div className="question">
        <h2>Question</h2>

        <div>
          <span>
            {currentQuestionIndex + 1} of {questions.length}
          </span>
          <h5>{currentQuestion.question}</h5>
        </div>

        <div className="option-container">
          <p onClick={this.handleOptionClick} className="option">
            {currentQuestion.optionA}
          </p>
          <p onClick={this.handleOptionClick} className="option">
            {currentQuestion.optionB}
          </p>
        </div>

        <div className="option-container">
          <p onClick={this.handleOptionClick} className="option">
            {currentQuestion.optionC}
          </p>
          <p onClick={this.handleOptionClick} className="option">
            {currentQuestion.optionD}
          </p>
        </div>

        <div className="button-container">
          <button
            className="button previous"
            onClick={this.handlePrevButtonClick}
          >
            Previous
          </button>
          <button className="button next" onClick={this.handleNextButtonClick}>
            Next
          </button>
          <button className="button quit" onClick={this.handleQuitButtonClick}>
            Quit
          </button>
          <Link
            to="/finish-quiz"
            state={{
              answeredQuestions: this.state.numberofAnsweredQuestions,
              score: this.state.score,
              correctAnswers: this.state.correctAnswers,
              totalQuestions: this.state.questions.length,
              wrongAnswers: this.state.wrongAnswers,
            }}
          >
            <button>Finish</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
