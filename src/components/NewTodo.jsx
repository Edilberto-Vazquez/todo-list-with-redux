import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const NewTodo = ({ addTodo }) => {
  // state to extract the value from the input
  const [todo, setTodo] = useState("");

  return (
    <section className="new-todo">
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={() => addTodo(todo)}>New todo</button>
    </section>
  );
};

export default connect(null, { addTodo })(NewTodo);
