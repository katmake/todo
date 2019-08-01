import React from 'react';

function FilterTodosButton(props) {
  return (
    <button onClick={() => props.filterTodos(props.str)}>{props.children}</button>
  );
}

export default FilterTodosButton;