import React from "react";
import "./Quiz.css";

export default function Quiz({ question, options, onAnswer }) {
  return (
    <div className="quiz-container">
      <p className="quiz-question">{question}</p>
      <div className="quiz-options">
        {options.map((option, index) => (
          <button
            key={index}
            className="quiz-option"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
