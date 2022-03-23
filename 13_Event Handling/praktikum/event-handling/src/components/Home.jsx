import React from "react";

import InputForm from "./InputForm";
import ListItem from "./ListItem";
import styles from "./Home.module.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          title: "Mengerjakan Exercise",
          completed: true,
        },
        {
          id: 2,
          title: "Mengerjakan Assignment",
          completed: false,
        },
      ],
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState({
      data: [...this.state.data, newTodo],
    });
  }

  deleteTodo(id) {
    const newTodo = this.state.data.filter((item) => item.id !== id);
    this.setState({
      data: newTodo,
    });
  }

  updateTodo(index) {
    let updatedTodo = [...this.state.data];
    updatedTodo[index].completed = !updatedTodo[index].completed;

    this.setState({
      data: updatedTodo,
    });
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          <h1 className={styles.title}>todos</h1>
          <InputForm data={this.state.data} addTodo={this.addTodo} />
          <ul className={styles.todoList}>
            {this.state.data.map((item, index) => (
              <ListItem
                key={item.id}
                item={item}
                deleteTodo={this.deleteTodo}
                updateTodo={this.updateTodo}
                index={index}
              />
            ))}
          </ul>
        </div>
      </>
    );
  }
}
