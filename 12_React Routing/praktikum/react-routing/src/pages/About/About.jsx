import styles from "./About.module.css";
import Navbar from "../../component/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>About</h1>
        <p>There is two kinds of about, about the app and about the author.</p>
      </div>
    </>
  );
}
