import styles from "./About.module.css";
import Navbar from "../../component/Navbar";

export default function AboutAuthor() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>About the Author</h1>
        <p>
          This app was developed by Achmad Solehuddin, a self-taught web
          developer and technical writer.
        </p>
      </div>
    </>
  );
}
