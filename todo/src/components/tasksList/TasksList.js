import React from "react";

import './TasksList.css'

const TasksList = React.memo(({tasksList}) => {
  return (
    <div className="tasksList">
      <ul>{tasksList}</ul>
    </div>
  );
});

export default TasksList;