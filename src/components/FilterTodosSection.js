import React from "react";
import FilterTodosButton from "./FilterTodosButton";

function FilterTodosSection(props) {
  return (
    <div>
      <FilterTodosButton
        filterTodos={props.filterTodos}
        str="all"
      >
        All
      </FilterTodosButton>

      <FilterTodosButton
        filterTodos={props.filterTodos}
        str="active"
      >
        Active
      </FilterTodosButton>

      <FilterTodosButton
        filterTodos={props.filterTodos}
        str="completed"
      >
        Completed
      </FilterTodosButton>
    </div>
  );
}

export default FilterTodosSection;
