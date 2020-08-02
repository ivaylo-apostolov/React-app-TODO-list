import React from 'react';

const tasksList = (props) => {
  const tasks = props.tasksList;
  const tasksList = tasks.map((task) => 
  <li key={task.id}>{task.name}</li>);
  return (
    <div className="tasksList">
      <ul>{tasksList}</ul>
    </div>
  );
};

export default tasksList;