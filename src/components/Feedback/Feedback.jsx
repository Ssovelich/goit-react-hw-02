import styles from "./Feedback.module.css";

const Feedback = ({ initialState, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <ul className={styles.feedbackList}>
        <li>
          <p className={styles.feedbackItem}>Good: {initialState.good}</p>
        </li>
        <li>
          <p className={styles.feedbackItem}>Neutral: {initialState.neutral}</p>
        </li>
        <li>
          <p className={styles.feedbackItem}>Bad: {initialState.bad}</p>
        </li>
        <li>
          <p className={styles.feedbackItem}>Total: {totalFeedback}</p>
        </li>
        <li>
          <p className={styles.feedbackItem}>Positive: {positiveFeedback}%</p>
        </li>
      </ul>
    </>
  );
};

export default Feedback;
