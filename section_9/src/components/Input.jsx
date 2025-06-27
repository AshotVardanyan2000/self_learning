import React from 'react';

function Input({ isTextArea, ref, label, ...props }) {
  const inputStyles =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';
  return (
    <p className="flex flex-col  gap-1 mb-4">
      <label className="text-sm uppercase font-bold text-stone-500">{label}</label>
      {isTextArea ? (
        <textarea ref={ref} className={inputStyles} {...props} />
      ) : (
        <input ref={ref} className={inputStyles} type="text" {...props} />
      )}
    </p>
  );
}

export default Input;
