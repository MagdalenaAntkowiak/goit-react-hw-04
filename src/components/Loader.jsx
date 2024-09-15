import { BeatLoader } from "react-spinners";
import styles from "./loader.module.css";

function Loader({ loading }) {
  if (!loading) return null;

  return (
    <div className={styles.loader}>
      <BeatLoader color="purple" width="96" />
    </div>
  );
}

export default Loader;
