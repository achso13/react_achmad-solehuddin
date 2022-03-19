import Navbar from "../../component/Navbar";
import ListItem from "./components/ListItem";
import styles from "./Home.module.css";

import { todoListItems } from "../../data/todoListItems";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>todos</h1>
        <form action="" className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Add todo..."
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
        <ul className={styles.todoList}>
          {todoListItems.map((item) => (
            <ListItem item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}
