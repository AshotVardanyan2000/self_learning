import React from 'react';

function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} select {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}

export default Log;
