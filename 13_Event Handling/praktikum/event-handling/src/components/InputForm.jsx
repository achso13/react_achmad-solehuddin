import React from "react";
import styles from "./InputForm.module.css";

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    if (formData.get("title")) {
      const list = this.props.data;
      const inputData = {
        id: Number(list[list.length - 1].id) + 1,
        title: formData.get("title"),
        completed: false,
      };

      this.props.addTodo(inputData);
    } else {
      alert("Form tidak boleh kosong!");
    }
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
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
}
