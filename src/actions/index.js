let newId = 0;

export const updateTodo = (newTodo) => ({
  type: "UPDATE_TODO",
  payload: {
    id: ++newId,
    todo: newTodo,
  },
});

export const deleteTodo = (payload) => ({
  type: "DELETE_TODO",
  payload,
});
