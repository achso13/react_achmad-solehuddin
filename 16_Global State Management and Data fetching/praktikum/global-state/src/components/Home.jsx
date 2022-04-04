import React from "react";

import InputForm from "./InputForm";
import ListItem from "./ListItem";
import styles from "./Home.module.css";

export default function Home() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "Mengerjakan Exercise",
  //     completed: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Mengerjakan Assignment",
  //     completed: false,
  //   },
  // ]);

  // const addTodo = (newTodo) => {
  //   setTodos([...todos, newTodo]);
  // };

  // const deleteTodo = (id) => {
  //   const newTodo = todos.filter((item) => item.id !== id);
  //   setTodos(newTodo);
  // };

  // const updateTodo = (index) => {
  // let updatedTodo = [...todos];
  // updatedTodo[index].completed = !updatedTodo[index].completed;

  // setTodos(updatedTodo);
  // };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>todos</h1>
      <InputForm />
      <ListItem />
    </div>
  );
}
