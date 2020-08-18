import React, { Component } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import Task from "../task/Task";
import TasksList from "../tasksList/TasksList";
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
    toShow: "TODO",
  };

  inputChange = (event) => {
    let inputValue = this.state.inputContent;
    inputValue = event.target.value;
    this.setState({ inputContent: inputValue });
  };

  addTaskToList = () => {
    let newTask = {
      name: this.state.inputContent,
      status: "TODO",
      id: this.state.inputContent,
    };
    let taskExists = this.state.tasks.filter(
      (task) => task.name === newTask.name
    );
    if (!taskExists.length) {
      this.setState({
        tasks: [...this.state.tasks, newTask]
      });
    }
  };

  showChoosenTasks = (choosenTaskName) => {
    this.setState({
      toShow: choosenTaskName,
    });
  };

  changeStatus = (taskIndex) => {
    let task = { ...this.state.tasks[taskIndex] };
    if (task.status === "TODO") {
      task.status = "In Progress";
    } else if (task.status === "In Progress") {
      task.status = "Done";
    } else if (task.status === "Done") {
      task.status = "TODO";
    }
    const tasksArr = [...this.state.tasks];
    tasksArr[taskIndex] = task;
    this.setState({
      tasks: tasksArr,
    });
  };

  render() {
    const tasks = this.state.tasks;
    const tasksLst = tasks
      .filter(
        (task) =>
          task.status === this.state.toShow || this.state.toShow === "All"
      )
      .map((task, index) => {
        return (
          <Task
            click={() => this.changeStatus(index)}
            key={task.id}
            name={task.name}
            status={task.status}
          />
        );
      });
    let tasksList = (
      <div>
        <TasksList tasksList={tasksLst} toShow={this.state.toShow} />
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
          <Button
            click={() => this.showChoosenTasks("All")}
            btnName="Show All"
          />
          <Button
            click={() => this.showChoosenTasks("TODO")}
            btnName="Show TODO"
          />
          <Button
            click={() => this.showChoosenTasks("In Progress")}
            btnName="Show In Progress"
          />
          <Button
            click={() => this.showChoosenTasks("Done")}
            btnName="Show Done"
          />
        </div>
      </div>
    );
  }
}

export default App;
