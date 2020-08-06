import React from "react";

const tasksList = (props) => {
  return (
    <div className="tasksList">
      <ul>{props.tasksList}</ul>
    </div>
  );
};

export default tasksList;