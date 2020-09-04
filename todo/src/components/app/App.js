import React, { useState, useEffect, useCallback } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import Task from "../task/Task";
import TasksList from "../tasksList/TasksList";
import "./App.css";

const App = React.memo((props) => {
  const [repo, setRepo] = useState({
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

  useEffect(() => {
    document.title = `There are ${repo.tasks.length} tasks`;
  })

  const inputChange = (event) => {
    let inputValue = repo.inputContent;
    inputValue = event.target.value;
    setRepo({...repo, inputContent: inputValue})
  };

  const addTaskToList = useCallback(() => {
    let newTask = {
      name: repo.inputContent,
      status: "TODO",
      id: repo.inputContent,
    };
    let taskExists = repo.tasks.filter((task) => task.name === newTask.name);
    if (!taskExists.length) {
      setRepo({...repo, tasks: [...repo.tasks, newTask]})
    }
  }, [repo.tasks]);

  const showChoosenTasks = useCallback((choosenTaskName) => {
    setRepo({...repo, toShow: choosenTaskName})
  }, [repo.tasks]);

  const changeStatus = useCallback((taskIndex) => {
    let task = repo.tasks[taskIndex];
    if (task.status === "TODO") {
      task.status = "In Progress";
    } else if (task.status === "In Progress") {
      task.status = "Done";
    } else if (task.status === "Done") {
      task.status = "TODO";
    }
    const tasksArr = repo.tasks;
    tasksArr[taskIndex] = task;
    setRepo(
      {...repo, tasks: tasksArr}
    );
  }, [repo.tasks]);
  
    const tasks = repo.tasks;
    const tasksLst = tasks
      .filter((task) => task.status === repo.toShow || repo.toShow === "All")
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
        <TasksList tasksList={tasksLst} toShow={repo.toShow} />
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
          <Button click={() => showChoosenTasks("In Progress")} btnName="Show In Progress"/>
          <Button click={() => showChoosenTasks("Done")} btnName="Show Done" />
        </div>
      </div>
    );
});

export default App;
