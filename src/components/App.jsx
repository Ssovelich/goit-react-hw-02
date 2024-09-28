import { useEffect, useState } from "react";

import "./App.css";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedbackState, setFeedbackState] = useState(() => {
    const storagedFeedback = localStorage.getItem("feedbackState");

    if (storagedFeedback !== null) {
      return JSON.parse(storagedFeedback);
    }

    return initialState;
  });

  useEffect(() => {
    localStorage.setItem("feedbackState", JSON.stringify(feedbackState));
  }, [feedbackState]);

  const onUpdateFeedback = (feedbackType) => {
    setFeedbackState({
      ...feedbackState,
      [feedbackType]: feedbackState[feedbackType] + 1,
    });

    // if (feedbackType === "good") {
    //   setFeedbackState({ ...feedbackState, good: feedbackState.good + 1 });
    // }
    // if (feedbackType === "neutral") {
    //   setFeedbackState({ ...feedbackState, neutral: feedbackState.neutral + 1 });
    // }
    // if (feedbackType === "bad") {
    //   setFeedbackState({ ...feedbackState, bad: feedbackState.bad + 1 });
    // }
  };

  const totalFeedback =
    feedbackState.good + feedbackState.neutral + feedbackState.bad;
  const positiveFeedback = Math.round(
    ((feedbackState.good + feedbackState.neutral) / totalFeedback) * 100
  );

  const onResetFeedback = () => {
    setFeedbackState(initialState);
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
          feedbackState={feedbackState}
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
