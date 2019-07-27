import React, { Component } from "react";
import uuid from "uuid";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { task: "have some coffee", id: uuid() },
        { task: "walk the dog", id: uuid() },
        { task: "take over the world", id: uuid() }
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
            return <Todo key={todo.id} todo={todo.task} />;
          })}
        </ul>
        <TodoInput createTodo={this.createTodo} />
      </div>
    );
  }
}
