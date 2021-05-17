import React, { useState } from "react";
import { connect } from "react-redux";
import { updateTodo } from "../actions";

const NewTodo = (props) => {
  const [todo, setTodo] = useState("");

  const handleSetTodo = (todo) => {
    props.updateTodo(todo);
  };

  return (
    <section className="new-todo">
      <textarea
        cols="30"
        rows="10"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      ></textarea>
      <button onClick={() => handleSetTodo(todo)}>New todo</button>
    </section>
  );
};

const mapDispatchToProps = {
  updateTodo,
};

export default connect(null, mapDispatchToProps)(NewTodo);
