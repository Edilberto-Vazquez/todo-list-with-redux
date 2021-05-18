import React from "react";
const Todo = ({ todo, incomplete, completed }) => {
  // functions and props are added to the component
  return (
    <div className="todo-item">
      <span>{todo.todo}</span>
      <button onClick={() => completed(todo.id)}>Complete</button>
      <button onClick={() => incomplete(todo.id)}>Incomplete</button>
    </div>
  );
};

export default Todo;
