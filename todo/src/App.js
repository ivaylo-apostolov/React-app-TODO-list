import React, { Component } from "react";
import Input from "./components/Input/Input";
import Button from "./components/button/button";
import Task from "./components/task/Task";
import TasksList from "./components/tasksList/TasksList";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        name: "Initial task",
        status: "TODO",
        id: "Initial task",
      },
    ],
    inputContent: "",
    toShow: "TODO"
  };

  inputChange = (event) => {
    let inputValue = this.state.inputContent;
    inputValue = event.target.value;
    this.setState({ inputContent: inputValue });
  };

  addTaskToList = () => {
    //TODO check if exists
    let updatedTasks = this.state.tasks;
    let newTask = {
      name: this.state.inputContent,
      status: "TODO",
      id: this.state.inputContent,
    };
    updatedTasks.push(newTask);
    this.setState({
      tasks: updatedTasks
    });
  };

  showChoosenTasks = (choosenTaskName) => {
    let updatedToShow = this.state.toShow;
    updatedToShow = choosenTaskName;
    this.setState({
      toShow: updatedToShow
    })
  }

  changeStatus = (taskIndex) => {
    let task = {...this.state.tasks[taskIndex]};
    if(task.status === "TODO") {
      task.status = "In Progress"
    } else if(task.status === "In Progress") {
      task.status = "Done"
    } else if(task.status === "Done") {
      task.status = "TODO"
    }

    const tasksArr = [...this.state.tasks];
    tasksArr[taskIndex] = task;
    this.setState({
      tasks:tasksArr
    })
  }

  render() {
    const tasks = this.state.tasks;
    const tasksLst = tasks.map((task, index) => {
    if (this.state.toShow === task.status || this.state.toShow === "All") {
      return <Task
            click = {() => this.changeStatus(index)}
            key={task.id}
            name={task.name}
            status={task.status} />
    }
  });
    let tasksList = (
      <div>
        <TasksList 
        tasksList={tasksLst}
        toShow={this.state.toShow} />
      </div>
    );

    return (
      <div className="App">
        <h2>TODO list</h2>
        <Input
          changed={(event) => {
            this.inputChange(event);
          }}
          labelText="Task"
        />
        <Button click={this.addTaskToList} btnName="Add" />
        {tasksList}
        <div>
          <Button click={() => this.showChoosenTasks("All")} btnName="Show All" />
          <Button click={() => this.showChoosenTasks("TODO")} btnName="Show TODO" />
          <Button click={() => this.showChoosenTasks("In Progress")} btnName="Show In Progress" />
          <Button click={() => this.showChoosenTasks("Done")} btnName="Show Done" />
        </div>
      </div>
    );
  }
}

export default App;
