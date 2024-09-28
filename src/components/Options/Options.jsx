import styles from "./Options.module.css";

const Options = ({ onUpdateFeedback, totalFeedback, onResetFeedback }) => {
  return (
    <div className={styles.wrap}>
      <button
        onClick={() => onUpdateFeedback("good")}
        type="button"
        className={styles.btn}
      >
        Good
      </button>
      <button
        onClick={() => onUpdateFeedback("neutral")}
        type="button"
        className={styles.btn}
      >
        Neutral
      </button>
      <button
        onClick={() => onUpdateFeedback("bad")}
        type="button"
        className={styles.btn}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={onResetFeedback} type="button" className={styles.btn}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
