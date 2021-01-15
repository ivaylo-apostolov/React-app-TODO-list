import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { createSelector } from 'reselect';
//import { normalize, scheme } from 'normalizr';

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
          return Object.assign({}, state, { status: "IN_PROGRESS" })
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

const setVisibility = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY":
      return action.filter;
    default:
      return state;
  }
};

const getTodos = (state) => {
  return state.todos
};
// export const getDoneTodos = (state) => {
//   return state.todos.filter(todo => todo.status === "DONE")
// }

export const getAllTodos = createSelector(getTodos, (todos) => {
  return todos;
})
const isLocked = (state = true, action) => {
  switch (action.type) {
    case "LOCK":
      return true;
    case "UNLOCK":
      return false;
    default:
      return state
  }
}
const todos = (state = [5], action) => {
  console.log("in todos reducer");
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "CHANGE_STATUS":
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};
const users = (state = { 1: {} }, action) => {
  switch (action.type) {
    case "RECEIVE_DATA":
      return action.data.entities.users;
    case "UPDATE_USER":
      return { ...state, 1: {...state[1], name: action.name }}
    default:
      return state;
  }
}
const employers = (state = { 1: {} }, action) => {
  switch (action.type) {
    case "RECEIVE_DATA":
      return action.data.entities.employers;
    case "UPDATE_EMPLOYER":
      return {...state, 1: {...state[1], name: action.name}}
    default:
      return state;
  }
}

const countries = (state = { 1: {} }, action) => {
  switch (action.type) {
    case "RECEIVE_DATA":
      return action.data.entities.countries
    case "UPDATE_COUNTRY":
      return {...state, 1: {...state[1], name: action.name}}
    default:
      return state;
  }
}

const todoApp = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    visibility: setVisibility(state.visibility, action),
    users: users(state.users, action),
    isLocked: isLocked(state.locked, action),
    employers: employers(state.employers, action),
    countries: countries(state.countries, action)
  }
}

const store = createStore(todoApp, applyMiddleware(thunk));

export default store;