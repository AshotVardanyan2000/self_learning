import React from 'react';
import quizCompletedImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';
import { use } from 'react';

const Summary = ({ userAnswers }) => {
  const skippedCount = userAnswers.filter((answer) => answer === null);
  const correctCount = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

  const skippedAnswersShare = Math.round((skippedCount.length / userAnswers.length) * 100);
  const correctAnswersShare = Math.round((correctCount.length / userAnswers.length) * 100);
  const wrongCount = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="img" />

      <h2>Quiz Completed!</h2>

      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>

        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>

        <p>
          <span className="number">{wrongCount}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>

      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = 'user-answer';

          if (answer === null) {
            cssClass += ' skipped';
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }

          return (
            <li key={`${answer} ${index}`}>
              <h3>{index + 1}</h3>

              <p className="question">{QUESTIONS[index].text}</p>

              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
