import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { filterList } from "../features/todoList/todoSlice";

const FiltersTodo = ({ filterList }) => {
  const [state, setState] = useState({ completed: "no", condition: "ALL" });
  useEffect(() => {
    filterList({ completed: state.completed, condition: state.condition });
  }, [state]);
  return (
    <div>
      <button onClick={() => setState({ completed: "", condition: "ALL" })}>
        All
      </button>
      <button
        onClick={() => setState({ completed: "yes", condition: "COMPLETED" })}
      >
        Completed
      </button>
      <button
        onClick={() => setState({ completed: "no", condition: "INCOMPLETE" })}
      >
        Incomplete
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  filterList,
};

export default connect(null, mapDispatchToProps)(FiltersTodo);
