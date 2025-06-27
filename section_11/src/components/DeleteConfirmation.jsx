import { useEffect, useState } from 'react';

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [doneSeconds, setDoneSeconds] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDoneSeconds(3000);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (doneSeconds === null) return;

    if (doneSeconds <= 0) {
      onConfirm();
      return;
    }

    const interval = setInterval(() => {
      setDoneSeconds((prev) => prev - 10);
    }, 10);

    return () => clearInterval(interval);
  }, [doneSeconds, onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>

      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>

        <button onClick={onConfirm} className="button">
          {/* {doneSeconds ? `${doneSeconds} seconds` : 'Yes'} */}
          Yes
        </button>
      </div>

      {doneSeconds !== null && <progress value={doneSeconds} max={3000} />}
    </div>
  );
}
