import React from "react";
import "../styles/components/TodoList.css";
import { connect } from "react-redux";
import Todo from "../components/Todo";

const TodoList = ({ todosFilter }) => {
  return (
    <section className="todo-list">
      {todosFilter.map((item) => {
        return <Todo key={item.id} todo={item} />;
      })}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    todosFilter: state.todosFilter,
  };
};

export default connect(mapStateToProps, null)(TodoList);
