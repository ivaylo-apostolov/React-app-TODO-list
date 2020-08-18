import React from "react";

const TasksList = (props) => {
  return (
    <div className="tasksList">
      <ul>{props.tasksList}</ul>
    </div>
  );
};

export default TasksList;