import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../features/todoList/todoSlice";

// store created

export default configureStore({
  reducer: todoListReducer,
});
