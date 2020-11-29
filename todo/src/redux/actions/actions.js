import { idGen } from "../../utilities/utilities"
import Constants from "../../utilities/constants"
import fetch from "node-fetch"
import axios from "axios";

const RECEIVE_USERS = "RECEIVE_USERS";

export const fetchEmployees = () => {
    return (dispatch) => fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json())
        .then(res => dispatch(receiveUsers(res.data)))
}

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users: users
})

export const addTodo = (title) => ({
    type: Constants.addTodoAction,
    title: title,
    id: idGen()
})

export const changeStatus = (id) => ({
    type: Constants.changeStatusAction,
    id: id
})

export const setVisibility = (filterType) => ({
    type: Constants.setVisibilityAction,
    filter: filterType

})



