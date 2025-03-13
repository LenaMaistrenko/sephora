import React from "react";
import "./Survey.css";
import { useSurvey } from "../../context/SurveyContext";
import Quiz from "../Quiz/Quiz";
import Results from "../Results/Results";

const questions = [
  {
    question: "Do you have a valid address in Mexico?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Have you participated in any Sephora promotion in the last 90 days?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Select your skin type to personalize your box with the right products.",
    options: ["Normal", "Sensitive", "Combination", "Oily", "Dry"],
  },
];

export default function Survey() {
  const { state, dispatch } = useSurvey();

  const handleAnswer = (answer) => {
    dispatch({ type: "ANSWER_QUESTION", payload: answer });

    if (state.currentQuestion === questions.length - 1) {
      dispatch({ type: "SHOW_RESULTS" });
    }
  };

  return (
    <div className={[
      'survey-container',
      state.showResults && 'results'
    ].filter(Boolean).join(' ')}>
      <section>
        {!state.showResults ? (
          <div>
            <h2>
              Question {state.currentQuestion + 1} of {questions.length}
            </h2>
            <Quiz
              question={questions[state.currentQuestion].question}
              options={questions[state.currentQuestion].options}
              onAnswer={handleAnswer}
            />
          </div>
        ) : (
          <Results answers={state.answers} />
        )}
      </section>
    </div>
  );
}
