const reducer = (state, action) => {
  // function to filter todoArray
  const allTodos = (todos, condition) => {
    if (condition === "FILTER_COMPLETED") {
      return todos.filter((items) => items.completed === action.payload);
    } else if (condition === "FILTER_INCOMPLETE") {
      return todos.filter((items) => items.completed === action.payload);
    } else {
      return todos;
    }
  };

  const todoState = (condition) => {
    return state.todosArray.map((item) => {
      if (item.id !== action.payload) {
        return item;
      }
      return { ...item, completed: condition };
    });
  };

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
        todosArray: todoState("no"),
      };
    }

    // set the selected item as completed
    case "COMPLETED": {
      return {
        ...state,
        todosArray: todoState("yes"),
      };
    }

    // filter all items
    case "FILTER_ALL": {
      return {
        ...state,
        todosFilter: allTodos(state.todosArray),
      };
    }

    // filter only items completed
    case "FILTER_COMPLETED": {
      return {
        ...state,
        todosFilter: allTodos(state.todosArray, "FILTER_COMPLETED"),
      };
    }

    // filter only items incompleted
    case "FILTER_INCOMPLETE": {
      return {
        ...state,
        todosFilter: allTodos(state.todosArray, "FILTER_INCOMPLETE"),
      };
    }

    default:
      return state;
  }
};

export default reducer;
