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
      ],
      displayTodos: "all"
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
  };

  changeDisplayTodos = str => {
    this.setState({
      displayTodos: str
    });
  };

  render() {
    let todos;
    let allTodos = this.state.todos;
    let activeTodos = this.state.todos.filter(todo => !todo.completed);
    let completedTodos = this.state.todos.filter(todo => todo.completed);

    switch (this.state.displayTodos) {
      case "all":
        todos = allTodos;
        break;
      case "active":
        todos = activeTodos;
        break;
      case "completed":
        todos = completedTodos;
        break;
      default:
        todos = allTodos;
    }

    const deleteAllCompletedBtn = (
      <button onClick={this.deleteAllCompletedTodos}>
        Delete All Completed Todos
      </button>
    );

    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {todos.map(todo => {
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
        <div>
          <span>Display:</span>
          <button onClick={() => this.changeDisplayTodos("all")}>all</button>
          <button onClick={() => this.changeDisplayTodos("active")}>
            active
          </button>
          <button onClick={() => this.changeDisplayTodos("completed")}>
            completed
          </button>
        </div>
        {this.state.todos.some(todo => todo.completed)
          ? deleteAllCompletedBtn
          : null}
      </div>
    );
  }
}