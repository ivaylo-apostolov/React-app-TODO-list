import React, { useState, useEffect, useCallback } from "react";
import useToShow from "../../customHooks/useToShow";
import useMousePosition from "../../customHooks/useMousePosition"
import Input from "../input/Input";
import Button from "../button/Button";
import Task from "../task/Task";
import TasksList from "../tasksList/TasksList";
//import memoize from "fast-memoize";
import "./App.css";

const App = React.memo((props) => {
  console.log("render app");

  const [todoList, setTodoList] = useState({
    tasks: [
      {
        name: "Initial task",
        status: "TODO",
        id: "Initial task",
      },
    ],
  });

  const [input, setInput] = useState("");
  const [show, setShow] = useState("TODO");
  //const { show, setShow } = useToShow("TODO");
  const position = useMousePosition();

  useEffect(() => {
    document.title = `There are ${todoList.tasks.length} tasks`;
  });

  const inputChange = (event) => {
    let inputValue = input.inputContent;
    inputValue = event.target.value;
    setInput(inputValue);
  };

  const addTaskToList = useCallback(() => {
    let newTask = {
      name: input,
      status: "TODO",
      id: input,
    };
    let taskExists = todoList.tasks.filter(
      (task) => task.name === newTask.name
    );
    if (!taskExists.length) {
      setTodoList({ ...todoList, tasks: [...todoList.tasks, newTask] });
    }
  }, [todoList, input]);

  const showChoosenTasks = (choosenTaskName) => {
    setShow(choosenTaskName);
  };

  const changeStatus = useCallback(
    (taskIndex) => {
      console.log("task index", taskIndex);
      let task = todoList.tasks[taskIndex];
      if (task.status === "TODO") {
        task.status = "In Progress";
      } else if (task.status === "In Progress") {
        task.status = "Done";
      } else if (task.status === "Done") {
        task.status = "TODO";
      }
      const tasksArr = todoList.tasks;
      tasksArr[taskIndex] = task;
      setTodoList({ ...todoList, tasks: tasksArr });
    },
    [todoList]
  );

  const tasks = todoList.tasks;
  const tasksLst = tasks
    .filter((task) => task.status === show || show === "All")
    .map((task, index) => {
      return (
        <Task
          changeStatus={changeStatus}
          index={index}
          key={task.id}
          name={task.name}
          status={task.status}
        />
      );
    });

  return (
    <div className="App">
      <h2>TODO list</h2>
      <Input
        changed={useCallback((event) => {
          inputChange(event);
        }, [])}
        labelText="Task"
      />
      <Button click={addTaskToList} btnName="Add" />
      <div>
        <TasksList tasksList={tasksLst} toShow={show} />
      </div>
      <div>
        <Button
          click={useCallback(() => showChoosenTasks("All"), [])}
          btnName="Show All"
        />
        <Button
          click={useCallback(() => showChoosenTasks("TODO"), [])}
          btnName="Show TODO"
        />
        <Button
          click={useCallback(() => showChoosenTasks("In Progress"), [])}
          btnName="Show In Progress"
        />
        <Button
          click={useCallback(() => showChoosenTasks("Done"), [])}
          btnName="Show Done"
        />
      </div>
      <div>
        {position.x}:{position.y}
      </div>
    </div>
  );
});

export default App;
