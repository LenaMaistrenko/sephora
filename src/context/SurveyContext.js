import React, { createContext, useReducer, useContext } from "react";
import { initialState, surveyReducer } from "../reducers/surveyReducer";

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(surveyReducer, initialState);
  return (
    <SurveyContext.Provider value={{ state, dispatch }}>
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = () => useContext(SurveyContext);
