import styles from "./ListItem.module.css";
import React from "react";

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.item,
      isChecked: this.props.item.completed,
    };

    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked(id) {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    return (
      <li className={styles.todoItem}>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={() => this.handleChecked(this.state.data.id)}
        />
        <span className={this.state.isChecked ? styles.active : ""}>
          {this.state.data.title}
        </span>
        <button onClick={() => this.props.deleteTodo(this.state.data.id)}>
          Delete
        </button>
      </li>
    );
  }
}
