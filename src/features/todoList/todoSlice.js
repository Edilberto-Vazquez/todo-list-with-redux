import { createSlice } from "@reduxjs/toolkit";

let newId = 0;
let newId2 = 0;

const todoState = (list, action) => {
  return list.map((item) => {
    if (item.id !== action.id) {
      return item;
    }
    return { ...item, completed: action.completed };
  });
};

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
  name: "todoList",
  initialState: {
    list: [],
    listFilter: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.list.push({ id: ++newId, todo: action.payload, completed: "no" });
      state.listFilter.push({
        id: ++newId2,
        todo: action.payload,
        completed: "no",
      });
    },

    completedTodo: (state, action) => {
      state.list = todoState(state.list, action.payload);
    },

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

export const { addTodo, completedTodo, filterList } = slice.actions;

export default slice.reducer;
