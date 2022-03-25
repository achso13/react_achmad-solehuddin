import styles from "./ListItem.module.css";

export default function ListItem({ todo, index, updateTodo, deleteTodo }) {
  return (
    <li className={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => updateTodo(index)}
      />
      <span className={todo.completed ? styles.active : ""}>{todo.title}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}
