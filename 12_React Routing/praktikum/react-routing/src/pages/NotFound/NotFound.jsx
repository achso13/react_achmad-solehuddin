import styles from "./NotFound.module.css";

import notFoundImg from "../../assets/img/notfound.jpg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> 404 Not Found</h1>
      <h3 className={styles.description}>
        Oopsie, it seems the page you're looking for doesnt exist.
      </h3>
      <img className={styles.image} src={notFoundImg} alt="notFound" />
      <Link to="/" className={styles.button}>
        Back to Home
      </Link>
    </div>
  );
}
