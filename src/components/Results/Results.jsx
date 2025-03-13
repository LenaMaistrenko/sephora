import React from "react";
import "./Results.css";

export default function Results({ answers }) {
  return (
    <div className="results-container">
      <h2 className="results-title">Results:</h2>
      <ul className="results-list">
        {answers.map((answer, index) => (
          <li className="results-list-item" key={index}>
            {index + 1}: {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}
