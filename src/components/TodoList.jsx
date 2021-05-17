import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions/index";

const TodoList = (props) => {
  const { todoList } = props;
  const handleDeleteTodo = (itemId) => {
    props.deleteTodo(itemId);
    console.log(itemId);
  };
  return (
    <>
      {todoList.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>
              <span>{todo.todo}</span>
              <button onClick={() => handleDeleteTodo(todo.id)}>borrar</button>
            </li>
          </ul>
        );
      })}
    </>
  );
};

const mapDispatchToProps = {
  deleteTodo,
};

export default connect(null, mapDispatchToProps)(TodoList);
