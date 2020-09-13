import React, { useCallback } from 'react'

const Task = React.memo(({key, index, name, status, changeStatus}) => {
    console.log("render task");
    return (
        <li key={key} onClick={useCallback(() => changeStatus(index),[])} >{name}----Status:{status}</li>
    )
})

export default Task;