import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../features/todoList/todoSlice";

const NewTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  return (
    <section>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={() => addTodo(todo)}>New todo</button>
    </section>
  );
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(NewTodo);
