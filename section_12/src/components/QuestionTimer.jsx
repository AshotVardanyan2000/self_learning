import React, { useEffect, useState } from 'react';

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout * 1000);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout * 1000);

    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <progress id="question-time" max={timeout * 1000} value={remainingTime} className={mode} />;
};

export default QuestionTimer;
