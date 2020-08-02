import React, { Component } from "react";
import Input from "./components/Input/Input";
import Button from "./components/button/button";
import TasksList from "./components/tasksList/TasksList"
import './App.css';

class App extends Component {
  state = {
    tasks: [
      {
        name: "Initial task",
        status: "Active",
        id: "Initial task"
      }
    ],
    inputContent: ""
  };

  inputChange = (event) => {
    let inputValue = this.state.inputContent;
    inputValue = event.target.value;
    this.setState({inputContent:inputValue})
  }

  addTaskToList = () => {
    //TODO check if exists
    let updatedTasks = this.state.tasks;
    let newTask = {
        name: this.state.inputContent,
        status: "Active",
        id: this.state.inputContent
    }
    updatedTasks.push(newTask);
    this.setState({
      tasks:updatedTasks
    })
  }

  render() {
    let tasks = null;
    tasks = (
      <div>
        <TasksList 
        tasksList={this.state.tasks} />
      </div>
    )

    return (
      <div className="App">
        <h2>TODO list</h2>
        <Input 
        changed = {(event) => {this.inputChange(event)}}
        labelText = "Task"/>
        <Button 
        click = {this.addTaskToList}
        btnName = "Add" />
        {tasks}
      </div>
    );
  }
}

export default App;
