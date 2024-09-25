// import { useState } from "react";

import "./App.css";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  return (
    <div>
      <Description />
      <Options />
      <Feedback
        good={initialState.good}
        neutral={initialState.neutral}
        bad={initialState.bad}
      />
    </div>
  );
}

export default App;
