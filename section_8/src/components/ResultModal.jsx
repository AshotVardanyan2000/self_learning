import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

function ResultModal({ ref, targetTime, timeRaining, onReset }) {
  const dialogRef = useRef(null);

  const userLost = timeRaining <= 0;
  const formattedRemainingTime = (timeRaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRaining / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current.showModal();
    },
  }));

  const outsideClick = (e) => {
    if (e.target === dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return createPortal(
    <dialog ref={dialogRef} className="result-modal" onClick={outsideClick}>
      {userLost && <h2>You lost </h2>}
      {!userLost && <h2>You score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>

      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>

      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}

export default ResultModal;
