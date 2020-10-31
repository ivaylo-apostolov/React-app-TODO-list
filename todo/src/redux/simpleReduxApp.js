import { createStore } from 'redux'

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

const todos = (state = [5], action) => {
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

export default store;