import React, { useState } from 'react';

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === '') {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask('');
  };

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 "
      />

      <button onClick={handleClick} className="text-stone-700 hover:text-stone-950 transition duration-400">
        Add task
      </button>
    </div>
  );
}

export default NewTask;
