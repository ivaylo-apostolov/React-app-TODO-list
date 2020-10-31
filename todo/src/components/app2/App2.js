import React, { useState, useEffect, useCallback } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import Task from "../task/Task";
import TasksList from "../tasksList/TasksList";
import {connect} from 'react-redux'
//import "./App.css";

const addTodoAction = "ADD_TODO";

const addTodo = (title) => ({
    type: addTodoAction,
    title: title
  })

const mapStateToProps = (state) => {
    
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: () => {
            dispatch(addTodo("first"))}
    }
}

const App2 = (props) => {
    console.log("App component")
    return (
        <div>
            <p>{props.todos.length}</p>
            <Button btnName="Add Todo" click={props.addTodo} />
        </div>

    )
}

var connectedComponent = connect(mapStateToProps, mapDispatchToProps)(App2);

export default connectedComponent;
