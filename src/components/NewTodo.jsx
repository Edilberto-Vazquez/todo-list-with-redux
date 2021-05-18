import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const NewTodo = (props) => {
  // state to extract the value from the input
  const [todo, setTodo] = useState("");

  // function to add a todo in todosArray
  const handleSetTodo = (todo) => {
    props.addTodo(todo);
  };

  return (
    <section className="new-todo">
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={() => handleSetTodo(todo)}>New todo</button>
    </section>
  );
};

// conexion created with the store
const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(NewTodo);
