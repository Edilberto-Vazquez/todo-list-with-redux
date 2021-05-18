import { createSlice } from "@reduxjs/toolkit";

// variables to add a id
let newId1 = 0;
let newId2 = 0;

// function to set a todo as completed or incomplete
const todoState = (list, id, completed) => {
  return list.map((item) => {
    if (item.id !== id) {
      return item;
    }
    return { ...item, completed: completed };
  });
};

// function to filter the todos
const filterTodos = (list, condition, completed) => {
  if (condition === "COMPLETED") {
    return list.filter((items) => items.completed === completed);
  } else if (condition === "INCOMPLETE") {
    return list.filter((items) => items.completed === completed);
  } else {
    return list;
  }
};

export const slice = createSlice({
  // state initialitated
  // two lists are created one to save the values
  // and other to filter the requested values
  name: "todoList",
  initialState: {
    list: [],
    listFilter: [],
  },

  reducers: {
    // action to set a new todo
    addTodo: (state, action) => {
      state.list.push({ id: ++newId1, todo: action.payload, completed: "no" });
      state.listFilter.push({
        id: ++newId2,
        todo: action.payload,
        completed: "no",
      });
    },

    // action to change the value to yes or no
    completedTodo: (state, action) => {
      state.list = todoState(
        state.list,
        action.payload.id,
        action.payload.completed
      );
    },

    // action to filter
    filterList: (state, action) => {
      state.condition = action.payload.condition;
      state.listFilter = filterTodos(
        state.list,
        action.payload.condition,
        action.payload.completed
      );
    },
  },
});

// actions exported
export const { addTodo, completedTodo, filterList } = slice.actions;

export default slice.reducer;
