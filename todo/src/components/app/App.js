import React, { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import Task from "../task/Task";
import TasksList from "../tasksList/TasksList";
import "./App.css";

const App = () => {
  debugger;
  const [state, setState] = useState({
    tasks: [
      {
        name: "Initial task",
        status: "TODO",
        id: "Initial task",
      },
    ],
    inputContent: "",
    toShow: "TODO",
  });

  const inputChange = (event) => {
    let inputValue = state.inputContent;
    inputValue = event.target.value;
    setState({ inputContent: inputValue });
  };

  const addTaskToList = () => {
    let newTask = {
      name: state.inputContent,
      status: "TODO",
      id: state.inputContent,
    };
    let taskExists = state.tasks.filter((task) => task.name === newTask.name);
    if (!taskExists.length) {
      setState({
        tasks: [...state.tasks, newTask],
      });
    }
  };

  const showChoosenTasks = (choosenTaskName) => {
    setState({
      toShow: choosenTaskName,
    });
  };

  const changeStatus = (taskIndex) => {
    let task = { ...state.tasks[taskIndex] };
    if (task.status === "TODO") {
      task.status = "In Progress";
    } else if (task.status === "In Progress") {
      task.status = "Done";
    } else if (task.status === "Done") {
      task.status = "TODO";
    }
    const tasksArr = [...state.tasks];
    tasksArr[taskIndex] = task;
    setState({
      tasks: tasksArr,
    });
  };

  const render = () => {
    const tasks = state.tasks;
    const tasksLst = tasks
      .filter((task) => task.status === state.toShow || state.toShow === "All")
      .map((task, index) => {
        return (
          <Task
            click={() => changeStatus(index)}
            key={task.id}
            name={task.name}
            status={task.status}
          />
        );
      });
    let tasksList = (
      <div>
        <TasksList tasksList={tasksLst} toShow={state.toShow} />
      </div>
    );

    return (
      <div className="App">
        <h2>TODO list</h2>
        <Input
          changed={(event) => {
            inputChange(event);
          }}
          labelText="Task"
        />
        <Button click={addTaskToList} btnName="Add" />
        {tasksList}
        <div>
          <Button click={() => showChoosenTasks("All")} btnName="Show All" />
          <Button click={() => showChoosenTasks("TODO")} btnName="Show TODO" />
          <Button
            click={() => showChoosenTasks("In Progress")}
            btnName="Show In Progress"
          />
          <Button click={() => showChoosenTasks("Done")} btnName="Show Done" />
        </div>
      </div>
    );
  };

  return render;
};

export default App;
