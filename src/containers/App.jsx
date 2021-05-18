import React from "react";
import { connect } from "react-redux";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";

const App = ({ listFilter }) => {
  // states are passed to the TodoList component
  return (
    <>
      <NewTodo />
      <TodoList listFilter={listFilter} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
    listFilter: state.listFilter,
  };
};

export default connect(mapStateToProps, null)(App);
