import React from "react";
import "../styles/App.css";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";
import Filters from "../components/Filters";

const App = () => {
  return (
    <>
      <NewTodo />
      <TodoList />
      <Filters />
    </>
  );
};

export default App;
