import React from "react";
import DeleteTodosButton from "./DeleteTodosButton";

function DeleteTodosSection(props) {
  return (
    <div>
      <DeleteTodosButton deleteTodos={props.deleteAllTodos}>
        Delete All Todos
      </DeleteTodosButton>
      <DeleteTodosButton deleteTodos={props.deleteAllCompletedTodos}>
        Delete All Completed Todos
      </DeleteTodosButton>
    </div>
  );
}

export default DeleteTodosSection;
