import styles from "./ListItem.module.css";
import { useState } from "react";

export default function ListItem({ item }) {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxHandler = () => setIsChecked(!isChecked);

  return (
    <li className={styles.todoItem}>
      <input type="checkbox" checked={isChecked} onChange={checkboxHandler} />
      <span className={isChecked ? styles.active : ""}>{item.name}</span>
      <button>Delete</button>
    </li>
  );
}
