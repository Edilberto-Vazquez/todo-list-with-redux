import React from "react";
import "../styles/components/TodoList.css";
import checked from "../assets/icons/checked.svg";
import deleted from "../assets/icons/x-button.svg";
import { connect } from "react-redux";
import { deleteTodo } from "../actions/index";

const TodoList = (props) => {
  const { todoList } = props;
  const handleDeleteTodo = (id) => {
    props.deleteTodo(id);
  };
  return (
    <section className="todo-list">
      {todoList.map((item) => {
        return (
          <div key={item.id} className="todo-item">
            <span>{item.todo}</span>
            <img src={checked} alt="Delete" />
            <img
              onClick={() => handleDeleteTodo(item.id)}
              src={deleted}
              alt="Completed"
            />
            {/* <button onClick={() => handleDeleteTodo(item.id)}>borrar</button> */}
          </div>
        );
      })}
    </section>
  );
};

const mapDispatchToProps = {
  deleteTodo,
};

export default connect(null, mapDispatchToProps)(TodoList);
