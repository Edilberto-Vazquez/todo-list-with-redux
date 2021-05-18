import React from "react";
import "../styles/App.css";
import { connect } from "react-redux";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";
import Filters from "../components/Filters";

const App = ({ todosFilter, todosArray }) => {
  return (
    <>
      <NewTodo />
      <TodoList todosFilter={todosFilter} />
      <Filters />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todosFilter: state.todosFilter,
    todosArray: state.todosArray,
  };
};

export default connect(mapStateToProps, null)(App);
