import React, { useCallback, useState, useRef } from 'react';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

const Quiz = () => {
  const [answerQuestions, setAnswerQuestions] = useState([]);

  const activeQuestionIndex = answerQuestions.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setAnswerQuestions((prevAnswers) => [...prevAnswers, selectedAnswer]);
  }, []);

  if (answerQuestions.length === QUESTIONS.length) {
    return <Summary userAnswers={answerQuestions} />;
  }

  return (
    <div id="quiz">
      <Question key={activeQuestionIndex} questionIndex={activeQuestionIndex} onSelectedAnswer={handleSelectAnswer} />
    </div>
  );
};

export default Quiz;
