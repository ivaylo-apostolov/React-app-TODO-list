import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { createSelector } from 'reselect';

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

const isLocked = (state, action) => {
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

const users = (state = [{
  "id": "01",
  "name": "Ivo is not a boss",
  "employer": {
    name: "softserve",
    country: {
      name: "Bulgaria"
    }
  },
  "employee_name": "Tiger Nixon",
  "employee_salary": "320800",
  "employee_age": "61",
  "profile_image": ""
}], action) => {
  switch (action.type) {
    case "RECEIVE_USERS":
      return [...action.users];
    case "UPDATE_USER":
      return [{...state[0], name: action.name}, ...state.slice(1)]
    case "UPDATE_EMPLOYER":
      return [{...state[0], employer: {...state[0].employer, name: action.name}}, ...state.slice(1)]
    case "UPDATE_COUNTRY":
      return [{...state[0], employer: {...state[0].employer, country: {...state[0].employer.country, name: action.name}}}]
    default:
      return state;
  }
}

const todoApp = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    visibility: setVisibility(state.visibility, action),
    users: users(state.users, action),
    isLocked: isLocked(state.locked, action)
  }
}

const store = createStore(todoApp, applyMiddleware(thunk));

export default store;

const obj = {
  "id": "01",
  "name": "Ivo is not a boss",
  "employer": 1,
  "employee_name": "Tiger Nixon",
  "employee_salary": "320800",
  "employee_age": "61",
  "profile_image": ""
}

const employer = {
  id: 1,
  name: "softserve",
  country: 2
}

const country = {
  id: 2,
  name: "Bulgaria"
};