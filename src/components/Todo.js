import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      task: this.props.todo
    };
  }

  handleDelete = () => {
    this.props.deleteTodo(this.props.id);
  };

  handleEdit = () => {
    this.setState({
      isEditing: true
    });
  };

  handleChange = e => {
    this.setState({
      task: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({
      isEditing: false
    });
  };

  render() {
    const todo = (
      <li style={{textDecoration: this.props.completed ? "line-through" : ""}}>
        <span onClick={() => this.props.toggleCompletion(this.props.id)}>
          {this.props.todo}
        </span>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );

    const form = (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          autoFocus
          onBlur={this.handleSubmit}
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Save</button>
      </form>
    );

    return this.state.isEditing ? form : todo;
  }
}
