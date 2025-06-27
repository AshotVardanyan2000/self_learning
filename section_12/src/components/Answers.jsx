import React, { useRef } from 'react';

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef(null);

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = '';
        if (isSelected) {
          if (answerState === 'answered') {
            cssClass = 'selected';
          } else {
            cssClass = answerState;
          }
        }

        return (
          <li key={answer} className="answer">
            <button className={cssClass} onClick={() => onSelect(answer)} disabled={answerState !== ''}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
