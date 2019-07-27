import React, { Component } from "react";
import uuid from "uuid";

export default class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: ""
    };
  }

  handleChange = e => {
    this.setState({
      task: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid() });
    this.setState({
      task: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="New Todo"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button type="submit" onSubmit={this.handleSubmit}>
          Add Todo
        </button>
      </form>
    );
  }
}
