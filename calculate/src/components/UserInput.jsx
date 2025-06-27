import React, { useState } from 'react';

function UserInput({ userInput, onChange }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } = userInput;

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>

          <input
            type="number"
            value={initialInvestment}
            required
            onChange={(e) => onChange('initialInvestment', e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            value={annualInvestment}
            required
            onChange={(e) => onChange('annualInvestment', e.target.value)}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>

          <input
            value={expectedReturn}
            type="number"
            required
            onChange={(e) => onChange('expectedReturn', e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="">Duration</label>
          <input type="number" value={duration} required onChange={(e) => onChange('duration', e.target.value)} />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
