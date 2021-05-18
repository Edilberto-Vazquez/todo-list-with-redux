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
        {listFilter.length > 0 && state.condition === "ALL"
          ? listFilter.map((item) => {
              return <Todo key={item.id} todo={item} completed={setComplete} />;
            })
          : null}
        {listFilter.length > 0 && state.condition === "COMPLETED"
          ? listFilter.map((item) => {
              return <Todo key={item.id} todo={item} completed={setComplete} />;
            })
          : null}
        {listFilter.length > 0 && state.condition === "INCOMPLETE"
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

const mapDispatchToProps = (dispatch) => {
  return {
    filterList: (obj) => dispatch(filterList(obj)),
    completedTodo: (id) => dispatch(completedTodo(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
    listFilter: state.listFilter,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
