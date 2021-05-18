import React from "react";

// this component draws the todo that the function map regresa

const Todo = ({ todo, completed }) => (
  <div className="todo-item">
    <span>* {todo.todo}</span>
    <span> completed: {todo.completed} </span>
    <button onClick={() => completed({ id: todo.id, completed: "yes" })}>
      Complete
    </button>
    <button onClick={() => completed({ id: todo.id, completed: "no" })}>
      Incomplete
    </button>
  </div>
);

export default Todo;
