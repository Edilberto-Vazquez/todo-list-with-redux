import React from "react";
import { connect } from "react-redux";
import { completed, incomplete } from "../actions/index";

const Todo = ({ todo, completed, incomplete }) => (
  <div className="todo-item">
    <span>{todo.todo}</span>
    <button onClick={() => completed(todo.id)}>Complete</button>
    <button onClick={() => incomplete(todo.id)}>Incomplete</button>
  </div>
);

const mapDispatchToProps = {
  completed,
  incomplete,
};

export default connect(null, mapDispatchToProps)(Todo);
