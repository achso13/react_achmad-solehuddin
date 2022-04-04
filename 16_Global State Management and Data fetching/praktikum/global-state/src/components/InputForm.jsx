import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/todoSlice";
import styles from "./InputForm.module.css";

export default function InputForm() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);

    if (formData.get("title")) {
      const list = todos;
      const inputData = {
        id: Number(list[list.length - 1].id) + 1,
        title: formData.get("title"),
        completed: false,
      };

      dispatch(addTodo(inputData));
    } else {
      alert("Form tidak boleh kosong!");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        name="title"
        placeholder="Add todo..."
      />
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
}
