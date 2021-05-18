import React from "react";
import "../styles/components/TodoList.css";
import { connect } from "react-redux";
import { completed, incomplete } from "../actions/index";
import Todo from "../components/Todo";

const TodoList = (props) => {
  const { todosFilter } = props;

  // functions to set a task as completed or incompleted
  const handleCompleted = (id) => {
    props.completed(id);
  };

  const handleIncomplete = (id) => {
    props.incomplete(id);
  };

  // component with a function map, that goes through the list and draw its items
  return (
    <section className="todo-list">
      {todosFilter.map((item) => {
        return (
          // Props and functions are passed to the Todo component
          <Todo
            key={item.id}
            todo={item}
            completed={handleCompleted}
            incomplete={handleIncomplete}
          />
        );
      })}
    </section>
  );
};

// conexion created with the store
const mapDispatchToProps = {
  incomplete,
  completed,
};

export default connect(null, mapDispatchToProps)(TodoList);
