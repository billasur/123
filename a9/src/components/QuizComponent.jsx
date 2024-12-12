import React ,{useState}from "react";
import "../css/QuizComponent.css";
import QuizQuestions from "../components/quizQuestion.json"

export default function QuizComponent(){
const [currQuestionidx,setQuestionIdx]=useState(0);
const currQuestion = QuizQuestions[currQuestionidx];

const prevQuestion=()=>{
  if(currQuestionidx>0){
    setQuestionIdx(currQuestionidx-1);
  }
}
const nextQuestion = ()=>{
  if(currQuestionidx<QuizQuestions.length-1){
    setQuestionIdx(currQuestionidx+1)
  }
}
const quitQuiz = () => {
  setQuestionIdx(0);  
  alert("You have quit the quiz!");  
};
  return(
    <div className="question">
      <h2>Question</h2>

      <div>
        <span>{currQuestionidx+1} of {QuizQuestions.length}</span>
        <h5>{currQuestion.question}</h5>
      </div>

      <div className="option-container">
        <p className="option">{currQuestion.optionA}</p>
        <p className="option">{currQuestion.optionB}</p>
      </div>

      <div className="option-container">
        <p className="option">{currQuestion.optionC}</p>
        <p className="option">{currQuestion.optionD}</p>
      </div>

      <div className="button-container">
        <button className="button previous" onClick={prevQuestion}  disabled={currQuestionidx === 0}>Previous</button>
        <button className="button next" onClick={nextQuestion} disabled={currQuestionidx ===QuizQuestions.length-1}>Next</button>
        <button className="button quit" onClick={quitQuiz}>Quit</button>
      </div>


      
    </div>
  )
}