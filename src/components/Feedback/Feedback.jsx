import styles from "./Feedback.module.css";

const Feedback = (props) => {
  const { good, neutral, bad } = props;
  return (
    <>
      <ul className={styles.feedbackList}>
        <li>
          <p className={styles.feedbackItem}>Good: {good}</p>
        </li>
        <li>
          <p className={styles.feedbackItem}>Neutral: {neutral}</p>
        </li>
        <li>
          <p className={styles.feedbackItem}>Bad: {bad}</p>
        </li>
      </ul>
    </>
  );
};

export default Feedback;
