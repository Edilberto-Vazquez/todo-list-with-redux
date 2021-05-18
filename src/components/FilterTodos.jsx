import React from "react";
import { connect } from "react-redux";
import { filterList } from "../features/todoList/todoSlice";

const FilterTodos = ({ filterList }) => {
  return (
    <section>
      <button>All</button>
      <button
        onClick={() => filterList({ completed: true, condition: "COMPLETED" })}
      >
        Completed
      </button>
      <button>Incomplete</button>
    </section>
  );
};

const mapDispatchToProps = {
  filterList,
};

export default connect(null, mapDispatchToProps)(FilterTodos);
