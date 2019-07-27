import React, { Component } from "react";

export default class Todo extends Component {
  handleDelete = () => {
    this.props.deleteTodo(this.props.id);
  };

  render() {
    return (
      <li>
        <span>{this.props.todo}</span>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}