import styles from "./Feedback.module.css";

const Feedback = ({ feedbackState, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <ul className={styles.feedbackList}>
        <li>
          <p className={styles.feedbackItem}>Good: {feedbackState.good}</p>
        </li>
        <li>
          <p className={styles.feedbackItem}>
            Neutral: {feedbackState.neutral}
          </p>
        </li>
        <li>
          <p className={styles.feedbackItem}>Bad: {feedbackState.bad}</p>
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
