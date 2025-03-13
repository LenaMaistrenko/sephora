import React from "react";
import "./App.css";
import { SurveyProvider } from "./context/SurveyContext";
import Survey from "../src/components/Survey/Survey";
import Header from "./components/Header/Header";
import { ContestBanner } from "./components/ContestBanner/ContestBanner";

function App() {
  return (
    <SurveyProvider>
      <Header />
      <main>
        <ContestBanner />
        <Survey />
      </main>
    </SurveyProvider>
  );
}

export default App;
