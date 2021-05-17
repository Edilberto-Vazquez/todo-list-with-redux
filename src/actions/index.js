let todoId = 0;

export const setTodo = (todo) => ({
  type: "SET_TODO",
  payload: {
    id: ++todoId,
    todo,
  },
});

export const deleteTodo = (payload) => ({
  type: "DELETE_FAVORITE",
  payload,
});
