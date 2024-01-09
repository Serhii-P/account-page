import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";
const NotFound = () => {
  return (
    <div className={`${styles.root} blueBlock`}>
      <div className={styles.content}>
        <h1>
          <span className={styles.green}>Oh No!</span> Error 404
        </h1>
        <p className={styles.subtitle}>
          This page you requested could not be found
        </p>
        <div className={styles.desktop}>
          <Link to="/">Back To Homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
