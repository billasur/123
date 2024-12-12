import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuizComponent from './QuizComponent';

const QuizComponentWrapper = (props) => {
  const navigate = useNavigate();
  return <QuizComponent {...props} navigate={navigate} />;
};

export default QuizComponentWrapper;
