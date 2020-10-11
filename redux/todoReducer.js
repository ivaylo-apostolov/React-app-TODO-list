const { createStore } = Redux;

// let state = {};
let count = 0;

const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        title: action.title,
        status: "TODO",
      };
    case "CHANGE_STATUS":
      if (state.id !== action.id) {
        return state;
      } else {
        if (state.status === "TODO") {
          return Object.assign({}, state, {status: "IN_PROGRESS"})
        } else if (state.status === "IN_PROGRESS") {
          return { ...state, status: "DONE" };
        } else if (state.status === "DONE") {
          return { ...state, status: "TODO" };
        }
      }
    default:
        return state;
  }
};

const setVisibility = (state = "SHAW_ALL", action) => {
    switch(action.type) {
        case "SET_VISIBILITY":
            return action.filter;
        default:
            return state;
    }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "CHANGE_STATUS":
      return state.map((t) => todo(t, action));
    default:
        return state;
  }
};

const todoApp = (state = {}, action) => {
    return {
        todos: todos(state.todos, action),
        visibility: setVisibility(state.visibility, action)
    }
}

const store = createStore(todoApp);

store.dispatch({
    id: count++,
    title: "first",
    type: "ADD_TODO",
  })
console.log(store.getState());

store.dispatch({
    id: count++,
    title: "second",
    type: "ADD_TODO",
  });
console.log(store.getState());


store.dispatch({
    type: "CHANGE_STATUS",
    id: 0,
  });
console.log(store.getState());

store.dispatch({
    type: "CHANGE_STATUS",
    id: 0,
  });
console.log(store.getState());

store.dispatch({
    type: "SET_VISIBILITY",
    filter: "DONE"
});
console.log(store.getState());
