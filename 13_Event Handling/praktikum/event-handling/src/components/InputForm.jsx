import React from "react";
import styles from "./InputForm.module.css";

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      completed: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.title) {
      const list = this.props.data;
      const inputData = {
        id: Number(list[list.length - 1].id) + 1,
        title: this.state.title,
        completed: false,
      };

      this.props.addTodo(inputData);
    } else {
      alert("Form tidak boleh kosong!");
    }

    this.setState({
      id: "",
      title: "",
      completed: "",
    });
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          type="text"
          className={styles.input}
          name="title"
          placeholder="Add todo..."
          onChange={this.handleInputChange}
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    );
  }
}
