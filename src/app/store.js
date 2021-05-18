import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../features/todoList/todoSlice";

export default configureStore({
  reducer: todoListReducer,
});
