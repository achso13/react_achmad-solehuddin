import styles from "./About.module.css";
import Navbar from "../../component/Navbar";

export default function AboutApp() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>About the App</h1>
        <p>
          In this app, you can add, delete, submit and edit items. To edit
          items, simply double click on it. Once you are done, press the enter
          key to resubmit. This app will persist your data in the browser local
          storage. So whether you reload, close your app or reopened it, you
          still have access to your todos items.
        </p>
      </div>
    </>
  );
}
