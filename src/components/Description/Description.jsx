import styles from "./Description.module.css";

const Description = () => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.titel}>Sip Happens Café</h1>
      <p className={styles.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
