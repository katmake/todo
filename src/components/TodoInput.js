import React, { Component } from 'react';


export default class TodoInput extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="todo"/>
          <button>Add Todo</button>
        </form>
      </div>
    )
  }
}