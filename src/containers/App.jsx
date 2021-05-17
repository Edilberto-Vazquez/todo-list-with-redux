import React from "react";
import "../styles/App.css";
import { connect } from "react-redux";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";

const App = ({ todoList }) => {
  return (
    <>
      <NewTodo />
      <TodoList todoList={todoList} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
  };
};

export default connect(mapStateToProps, null)(App);
