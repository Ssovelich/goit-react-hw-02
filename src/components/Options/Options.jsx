import styles from "./Options.module.css";

const Options = ({ onUpdateFeedback, totalFeedback, onResetFeedback }) => {
  return (
    <div className={styles.wrap}>
      <button onClick={() => onUpdateFeedback("good")} className={styles.btn}>
        Good
      </button>
      <button
        onClick={() => onUpdateFeedback("neutral")}
        className={styles.btn}
      >
        Neutral
      </button>
      <button onClick={() => onUpdateFeedback("bad")} className={styles.btn}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={onResetFeedback} className={styles.btn}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
