import React, { Component } from "react";
import uuid from "uuid";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { task: "have some coffee", id: uuid(), completed: false },
        { task: "walk the dog", id: uuid(), completed: false },
        { task: "take over the world", id: uuid(), completed: false }
      ]
    };
  }

  createTodo = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  updateTodo = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      } else {
        return todo;
      }
    });
    this.setState({
      todos: updatedTodos
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  toggleCompletion = id => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    this.setState({
      todos: updatedTodos
    });
  };

  deleteAllCompletedTodos = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {this.state.todos.map(todo => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                todo={todo.task}
                completed={todo.completed}
                updateTodo={this.updateTodo}
                deleteTodo={this.deleteTodo}
                toggleCompletion={this.toggleCompletion}
              />
            );
          })}
        </ul>
        <TodoInput createTodo={this.createTodo} />
        <button onClick={this.deleteAllCompletedTodos}>Delete All Completed Todos</button>
      </div>
    );
  }
}