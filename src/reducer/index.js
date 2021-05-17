const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((items) => items.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
