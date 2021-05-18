let newId = 0;

export const addTodo = (newTodo) => ({
  type: "ADD_TODO",
  payload: {
    id: ++newId,
    todo: newTodo,
    completed: false,
  },
});

export const incomplete = (payload) => ({
  type: "INCOMPLETE",
  payload,
});

export const completed = (payload) => ({
  type: "COMPLETED",
  payload,
});

export const filterAll = () => ({
  type: "FILTER_ALL",
});

export const filterCompleted = () => ({
  type: "FILTER_COMPLETED",
  payload: true,
});

export const filterIncomplete = () => ({
  type: "FILTER_INCOMPLETE",
  payload: false,
});
