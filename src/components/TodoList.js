import React, { Component } from "react";
import uuid from "uuid";
import Todo from "./Todo";
import TodoInput from "./TodoInput";
import SortTodosForm from "./SortTodosForm";
import FilterTodosSection from "./FilterTodosSection";
import DeleteTodosSection from "./DeleteTodosSection";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { task: "have some coffee", id: uuid(), completed: false },
        { task: "walk the dog", id: uuid(), completed: false },
        { task: "take over the world", id: uuid(), completed: false }
      ],
      displayTodos: "all",
      sortByStatus: false
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

  deleteAllTodos = () => {
    this.setState({
      todos: [],
      displayTodos: "all"
    });
  };

  deleteAllCompletedTodos = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed),
      displayTodos: "all"
    });
  };

  filterTodos = str => {
    this.setState({
      displayTodos: str
    });
  };

  toggleSortByStatus = () => {
    this.setState({
      sortByStatus: !this.state.sortByStatus
    });
  };

  render() {
    let todos;
    const allTodos = this.state.todos;
    const activeTodos = this.state.todos.filter(todo => !todo.completed);
    const completedTodos = this.state.todos.filter(todo => todo.completed);
    const sortedTodos = [...activeTodos, ...completedTodos];

    switch (this.state.displayTodos) {
      case "all":
        todos = !this.state.sortByStatus ? allTodos : sortedTodos;
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

    const todoList = (
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
    );

    return (
      <div>
        <h1>Todo List</h1>
        <div>
          {this.state.todos.length ? todoList : <p>Your todo list is empty.</p>}
        </div>

        <TodoInput createTodo={this.createTodo} />

        {this.state.displayTodos === "all" && this.state.todos.length ? (
          <SortTodosForm
            sortByStatus={this.state.sortByStatus}
            toggleSortByStatus={this.toggleSortByStatus}
          />
        ) : null}

        {this.state.todos.length ? (
          <>
            <FilterTodosSection filterTodos={this.filterTodos} />
            <DeleteTodosSection
              deleteAllTodos={this.deleteAllTodos}
              deleteAllCompletedTodos={this.deleteAllCompletedTodos}
            />
          </>
        ) : null}
      </div>
    );
  }
}