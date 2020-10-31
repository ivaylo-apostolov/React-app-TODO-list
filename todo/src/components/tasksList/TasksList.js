import React from "react";

import './TasksList.css'

const TasksList = React.memo((props) => {
  return (
    <div className="tasksList">
      <ul>{props.tasksList}</ul>
    </div>
  );
});

export default TasksList;