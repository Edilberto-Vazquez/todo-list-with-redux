import React, { useState, useEffect } from "react";
import Todo from "../components/Todo";
import { connect } from "react-redux";
import { filterList, completedTodo } from "../features/todoList/todoSlice";

const TodoList = ({ listFilter, filterList, completedTodo }) => {
  const [state, setState] = useState({ completed: "no", condition: "ALL" });
  const [complete, setComplete] = useState({ id: 0, completed: "no" });

  useEffect(() => {
    completedTodo(complete);
    filterList({ completed: state.completed, condition: state.condition });
  }, [state, complete]);

  return (
    <section className="todo-list">
      <br />

      <div>
        {listFilter.length > 0
          ? listFilter.map((item) => {
              return <Todo key={item.id} todo={item} completed={setComplete} />;
            })
          : null}
      </div>
      <br />
      <br />
      <div>
        <button onClick={() => setState({ completed: "no", condition: "ALL" })}>
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
    </section>
  );
};

const mapDispatchToProps = {
  filterList,
  completedTodo,
};

export default connect(null, mapDispatchToProps)(TodoList);
