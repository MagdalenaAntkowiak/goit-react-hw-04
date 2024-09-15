import styles from "./noResultMessage.module.css";

function NoResultsMessage({ message }) {
  return (
    <div className={styles.noResultMsg}>
      <p>{message}</p>
    </div>
  );
}

export default NoResultsMessage;
