import React from 'react';

function SortTodosForm(props) {
  return (
    <form>
      <label htmlFor="sortTodos">Move completed to the bottom</label>
      <input
        type="checkbox"
        id="sortTodos"
        name="sortTodos"
        defaultChecked={props.sortByStatus}
        onChange={props.toggleSortByStatus}
      />
    </form>
  );
}

export default SortTodosForm;
