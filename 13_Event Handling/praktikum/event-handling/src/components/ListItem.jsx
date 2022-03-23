import styles from "./ListItem.module.css";
import React from "react";

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.item,
    };

    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked(index) {
    this.props.updateTodo(index);
  }

  render() {
    return (
      <li className={styles.todoItem}>
        <input
          type="checkbox"
          checked={this.state.data.completed}
          onChange={() => this.handleChecked(this.props.index)}
        />
        <span className={this.state.data.completed ? styles.active : ""}>
          {this.state.data.title}
        </span>
        <button onClick={() => this.props.deleteTodo(this.state.data.id)}>
          Delete
        </button>
      </li>
    );
  }
}
