import { useDispatch, useSelector } from "react-redux";
import { updateTodo, deleteTodo } from "../store/todoSlice";
import styles from "./ListItem.module.css";

export default function ListItem() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul className={styles.todoList}>
      {todos.map((todo, index) => (
        <li className={styles.todoItem} key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(updateTodo(index))}
          />
          <span className={todo.completed ? styles.active : ""}>
            {todo.title}
          </span>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
