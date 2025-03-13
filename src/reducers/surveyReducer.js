export const initialState = {
  currentQuestion: 0,
  answers: [],
  showResults: false,
};

export function surveyReducer(state, action) {
  switch (action.type) {
    case "ANSWER_QUESTION":
      return {
        ...state,
        answers: [...state.answers, action.payload],
        currentQuestion: state.currentQuestion + 1,
      };
    case "SHOW_RESULTS":
      return {
        ...state,
        showResults: true,
      };
    case "RESET_SURVEY":
      return initialState;
    default:
      return state;
  }
}
