import React, { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevState) => ({
      ...prevState,
      [inputIdentifier]: +newValue,
    }));
  };

  return (
    <>
      <Header />

      <UserInput userInput={userInput} onChange={handleChange} />

      {userInput.duration >= 1 ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Please enter duration greater then 0</p>
      )}
    </>
  );
}

export default App;
