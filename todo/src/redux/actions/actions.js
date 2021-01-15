import { idGen } from "../../utilities/utilities";
import Constants from "../../utilities/constants";
import fetch from "node-fetch";
import axios from "axios";
import { normalize, schema } from "normalizr";

const RECEIVE_DATA = "RECEIVE_DATA";
const RECEIVE_EMPLOYERS = "RECEIVE_EMPLOYERS";
const RECEIVE_COUNTRIES = "RECEIVE_COUNTRIES";
const UPDATE_COUNTRY = "UPDATE_COUNTRY";

export const fetchEmployees = () => {
    return (dispatch) => fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json())
        .then(res => {
            let oldUsers = [{
                "id": 1,
                "name": "Ivo is not a boss",
                "employer": {
                    id: 1,
                    name: "softserve",
                    country: {
                        id: 1,
                        name: "Bulgaria"
                    }
                },
                "employee_name": "Tiger Nixon",
                "employee_salary": "320800",
                "employee_age": "61",
                "profile_image": ""
            },
            {
                "id": 2,
                "name": "Ivo is almost a boss",
                "employer": {
                    id: 2,
                    name: "softserve2",
                    country: {
                        id: 2,
                        name: "Macedonia"
                    }
                },
                "employee_name": "Tiger Nixon2",
                "employee_salary": "320800345",
                "employee_age": "61234",
                "profile_image": ""
            }];

            const country = new schema.Entity('countries');
            const employer = new schema.Entity('employers', {
                country: country
            });
            const user = new schema.Entity('users', {
                employer: employer
            })
            const users = new schema.Array(user)

            const normalizedData = normalize(oldUsers, users)

            const oldArticle = {
                "id": "123",
                "author": {
                    "id": "1",
                    "name": "Paul"
                },
                "title": "My awesome blog post",
                "comments": [
                    {
                        "id": "324",
                        "commenter": {
                            "id": "2",
                            "name": "Nicole"
                        }
                    }
                ]
            };

            const userche = new schema.Entity('users');
            const comment = new schema.Entity('comments', {
                commenter: userche
            })
            const article = new schema.Entity('articles', {
                author: userche,
                comments: [comment]
            })

            const normData = normalize(oldArticle, article)

            dispatch(receiveData(normalizedData));
        })
}

const receiveData = (data) => ({
    type: RECEIVE_DATA,
    data: data
})

export const updateCountry = () => ({
    type: UPDATE_COUNTRY,
    name: "Macedonia"
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

export const multiplyer = (a, b) => a * b;

export const toLowerCase = (str) => str.toLowerCase();


