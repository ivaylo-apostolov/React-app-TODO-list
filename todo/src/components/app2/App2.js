import React, { useState, useEffect, useCallback } from "react";
import Constants from "../../utilities/constants"
import Input from "../Input/Input"
import Button from "../button/button";
import Task from "../task/Task";
import TasksList from "../tasksList/TasksList";
import { connect } from 'react-redux'
import { addTodo, changeStatus, setVisibility, fetchEmployees, receiveUsers } from "../../redux/actions/actions"
import fetch, { FetchError } from "node-fetch";
import { getAllTodos } from "../../redux/simpleReduxApp"
import ToggleLock from "../toggleLock/toggleLock";
import Form from "../requests/form"
import User from "../../components/users/user"
import Employer from "../../components/users/employer"
import Country from "../../components/users/country"
//import "./App.css";

const mapStateToProps = (state) => {
    return {
        //todos: state.todos,
        visibility: state.visibility,
        users: state.users,
        todos: getAllTodos(state)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (input) => {
            dispatch(addTodo(input))
        },
        changeStatus: (id) => {
            dispatch(changeStatus(id))
        },
        setVisibity: (filterType) => {
            dispatch(setVisibility(filterType))
        },
        fetchEmployees: () => {
            dispatch(fetchEmployees())
        }
    }
}

const App2 = React.memo((props) => {
    console.log("render App2 componenet")
    const [input, setInput] = useState("")
    const inputChange = (event) => {
        let inputValue = event.target.value;
        setInput(inputValue);
    };

    const tasks = props.todos.filter(t => props.visibility === Constants.showAllFilter || props.visibility === t.status)
    .map((t, index) => {
        console.log(t.title)
        return <Task 
            // key={t.id} 
            index={index}
            name={t.title}
            status={t.status}
            changeStatus={() => props.changeStatus(t.id)} />
    })

    console.log("TaskList:" + tasks)
    return (
        <div>
            <User />
            <Employer />
            <Country />
            <Form />
            <ToggleLock text="Dummy text" />
            <Button btnName={"Fetch users"} click={() => props.fetchEmployees()}/>
            <Input labelText={Constants.labelText} changed={useCallback((event) => {
                inputChange(event);
            }, [])} />
            <p>{props.todos.length}</p>
            <Button btnName="Add Todo" click={() => props.addTodo(input)} />
            <TasksList tasksList={tasks} />
            <div>
                <Button btnName={Constants.showAllFilter} click={() => props.setVisibity(Constants.showAllFilter)}/>
                <Button btnName={Constants.todoFilter} click={() => props.setVisibity(Constants.todoFilter)}/>
                <Button btnName={Constants.inProgressText} click={() => props.setVisibity(Constants.inProgressFilter)}/>
                <Button btnName={Constants.doneText} click={() => props.setVisibity(Constants.doneFilter)}/>
            </div>
        </div>
    )
}, (prev, next) => {
    return false;
})

var connectedComponent = connect(mapStateToProps, mapDispatchToProps)(App2);

export default connectedComponent;
