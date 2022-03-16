import styles from "./ListCard.module.css";

export default function ListCard({ list }) {
  return (
    <li className={styles.list}>
      <span className={list.completed ? styles.completed : ""}>
        {list.title}
      </span>
    </li>
  );
}
