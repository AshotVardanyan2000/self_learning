import React from 'react';
import ResultModal from './ResultModal.jsx';

function TimerChallenge({ title, targetTime }) {
  const timeout = React.useRef(null);
  const dialogRef = React.useRef(null);
  const [timeRaining, setTimeRemaining] = React.useState(targetTime * 1000);

  const timerIsActive = timeRaining > 0 && timeRaining < targetTime * 1000;

  if (timeRaining <= 0) {
    clearInterval(timeout.current);
    dialogRef.current.open();
  }

  const onReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  const handleStart = () => {
    timeout.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timeout.current);
    dialogRef.current.open();
  };

  return (
    <>
      <ResultModal
        onReset={onReset}
        ref={dialogRef}
        targetTime={targetTime}
        result={'lost'}
        timeRaining={timeRaining}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>

        <p className={timerIsActive ? 'active' : ''}>{timerIsActive ? 'Time running...' : 'Timer inactive'}</p>
      </section>
    </>
  );
}

export default TimerChallenge;
