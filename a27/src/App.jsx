import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import QuizComponentWrapper from './components/QuizComponentWrapper';
import ResultComponent from './components/ResultComponent';

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/play-quiz" element={<QuizComponentWrapper />}></Route>
        <Route path="/finish-quiz" element={<ResultComponent />}></Route>
      </Routes>
    );
  }
}
