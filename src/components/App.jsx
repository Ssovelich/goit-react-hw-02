import { useState } from "react";

import "./App.css";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

function App() {
  const [initialState, setInitialState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onUpdateFeedback = (feedbackType) => {
    setInitialState({
      ...initialState,
      [feedbackType]: initialState[feedbackType] + 1,
    });

    // if (feedbackType === "good") {
    //   setInitialState({ ...initialState, good: initialState.good + 1 });
    // }
    // if (feedbackType === "neutral") {
    //   setInitialState({ ...initialState, neutral: initialState.neutral + 1 });
    // }
    // if (feedbackType === "bad") {
    //   setInitialState({ ...initialState, bad: initialState.bad + 1 });
    // }
  };

  const totalFeedback =
    initialState.good + initialState.neutral + initialState.bad;
  const positiveFeedback = Math.round(
    ((initialState.good + initialState.neutral) / totalFeedback) * 100
  );

  const onResetFeedback = () => {
    setInitialState({
      good: (initialState.good = 0),
      neutral: (initialState.neutral = 0),
      bad: (initialState.bad = 0),
    });
  };

  return (
    <div>
      <Description />
      <Options
        onUpdateFeedback={onUpdateFeedback}
        totalFeedback={totalFeedback}
        onResetFeedback={onResetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          initialState={initialState}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
