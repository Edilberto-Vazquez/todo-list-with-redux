import React, { useState, useEffect } from "react";
import Todo from "../components/Todo";
import { connect } from "react-redux";
import { filterList, completedTodo } from "../features/todoList/todoSlice";

const TodoList = ({ listFilter, filterList, completedTodo }) => {
  // state to change the filter to completed or incompleted
  const [todoFilter, setTodoFilter] = useState({
    completed: "no",
    condition: "ALL",
  });
  // state to add a new todo
  const [complete, setComplete] = useState({ id: 0, completed: "no" });

  useEffect(() => {
    // actions to change the values of list and listFilter
    completedTodo(complete);
    filterList({
      completed: todoFilter.completed,
      condition: todoFilter.condition,
    });
  }, [todoFilter, complete]);

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
        <button
          onClick={() => setTodoFilter({ completed: "no", condition: "ALL" })}
        >
          All
        </button>
        <button
          onClick={() =>
            setTodoFilter({ completed: "yes", condition: "COMPLETED" })
          }
        >
          Completed
        </button>
        <button
          onClick={() =>
            setTodoFilter({ completed: "no", condition: "INCOMPLETE" })
          }
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
