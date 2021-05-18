import React from "react";
import "../styles/App.css";
import { connect } from "react-redux";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";
import Filters from "../components/Filters";

const App = ({ todosFilter }) => {
  // todosFilter is passed as a parameter to TodoList
  return (
    <>
      <NewTodo />
      <TodoList todosFilter={todosFilter} />
      <Filters />
    </>
  );
};

// conexion created with the store
const mapStateToProps = (state) => {
  return {
    todosFilter: state.todosFilter,
  };
};

export default connect(mapStateToProps, null)(App);
