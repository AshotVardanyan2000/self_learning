import React from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment';

function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);

  const resultTotalInterest = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Interest Capital</th>
        </tr>
      </thead>

      <tbody>
        {resultsData.map((result) => {
          const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - resultTotalInterest;
          const totalAnnualInvestment = result.valueEndOfYear - totalInterest;
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAnnualInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
