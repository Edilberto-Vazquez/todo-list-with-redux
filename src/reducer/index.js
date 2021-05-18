const reducer = (state, action) => {
  // function to create a copy of todosArray and use it with the filters
  const allTodos = (todos) => {
    return todos.map((item) => item);
  };

  const todoList = allTodos(state.todosArray);

  switch (action.type) {
    // new item is added
    case "ADD_TODO": {
      return {
        ...state,
        todosArray: [...state.todosArray, action.payload],
        todosFilter: [...state.todosFilter, action.payload],
      };
    }

    // set the selected item as incomplete
    case "INCOMPLETE": {
      return {
        ...state,
        todosArray: state.todosArray.map((item) => {
          if (item.id !== action.payload) {
            return item;
          }
          return { ...item, completed: false };
        }),
      };
    }

    // set the selected item as completed
    case "COMPLETED": {
      return {
        ...state,
        todosArray: state.todosArray.map((item) => {
          if (item.id !== action.payload) {
            return item;
          }
          return { ...item, completed: true };
        }),
      };
    }

    // filter all items
    case "FILTER_ALL": {
      return {
        ...state,
        todosFilter: todoList,
      };
    }

    // filter only items completed
    case "FILTER_COMPLETED": {
      return {
        ...state,
        todosFilter: todoList.filter(
          (items) => items.completed === action.payload
        ),
      };
    }

    // filter only items incompleted
    case "FILTER_INCOMPLETE": {
      return {
        ...state,
        todosFilter: todoList.filter(
          (items) => items.completed === action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default reducer;
