import React from "react";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";
//import FilterTodos from "../components/FilterTodos";

const App = () => {
  return (
    <>
      <NewTodo />
      <TodoList />
      {/* <FilterTodos /> */}
    </>
  );
};

export default App;
