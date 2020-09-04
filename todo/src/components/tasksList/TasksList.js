import React from "react";

const TasksList = React.memo((props) => {
  return (
    <div className="tasksList">
      <ul>{props.tasksList}</ul>
    </div>
  );
});

export default TasksList;