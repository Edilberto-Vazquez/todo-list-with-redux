import React from "react";
import { connect } from "react-redux";
import { setTodo } from "../actions";

const NewTodo = (props) => {
  const handleSetTodo = (e) => {
    e.preventDefault();
    props.setTodo(e.target[0].value);
  };

  return (
    <>
      <form onSubmit={handleSetTodo}>
        <input type="text" />
        <button>New todo</button>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  setTodo,
};

export default connect(null, mapDispatchToProps)(NewTodo);
