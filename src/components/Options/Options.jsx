import styles from "./Options.module.css";

const Options = () => {
  return (
    <div className={styles.wrap}>
      <button className={styles.btn}>Good</button>
      <button className={styles.btn}>Neutral</button>
      <button className={styles.btn}>Bad</button>
    </div>
  );
};

export default Options;
