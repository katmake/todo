import React from 'react';

function DeleteTodosButton(props) {
  return (
    <button onClick={props.deleteTodos}>{props.children}</button>
  );
}

export default DeleteTodosButton;