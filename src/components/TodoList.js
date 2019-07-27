import React, { Component } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { task: "have some coffee" },
        { task: "walk the dog" },
        { task: "take over the world" }
      ]
    };
  }

  createTodo = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {this.state.todos.map(todo => {
            return <Todo todo={todo.task} />;
          })}
        </ul>
        <TodoInput createTodo={this.createTodo} />
      </div>
    );
  }
}
