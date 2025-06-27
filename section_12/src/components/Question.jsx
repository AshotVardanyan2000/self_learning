import React, { useCallback, useState } from 'react';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import QUESTION from '../questions.js';

const Question = ({ questionIndex, onSelectedAnswer }) => {
  const [answer, setAnswer] = useState({ selectedAnswer: '', isCorrect: null });

  let progressTimer = 20;

  if (answer.selectedAnswer) {
    progressTimer = 1;
  }

  if (answer.isCorrect !== null) {
    progressTimer = 2;
  }

  const handleSelectAnswer = (answer) => {
    setAnswer({ selectedAnswer: answer, isCorrect: null });

    setTimeout(() => {
      setAnswer({ selectedAnswer: answer, isCorrect: answer === QUESTION[questionIndex].answers[0] });

      setTimeout(() => {
        onSelectedAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = '';

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id="question">
      <QuestionTimer
        key={progressTimer}
        timeout={progressTimer}
        onTimeout={answer.selectedAnswer === '' ? () => onSelectedAnswer(null) : null}
        mode={answerState}
      />

      <h2>{QUESTION[questionIndex].text}</h2>

      <Answers
        answers={QUESTION[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};

export default Question;
