import React from "react";
import "./Results.css"

export default function Results({ answers }) {
  return (
    <div className="results-container">
      <h2>Results:</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            {index + 1}: {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}
