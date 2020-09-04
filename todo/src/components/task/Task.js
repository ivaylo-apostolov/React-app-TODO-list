import React from 'react'

const Task = React.memo((props) => {
    console.log("render task");
    return (
        <li key={props.key} onClick={props.click}>{props.name}----Status:{props.status}</li>
    )
})

export default Task;