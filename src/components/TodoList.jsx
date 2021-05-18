import React from "react";
import "../styles/components/TodoList.css";
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

export default TodoList;
