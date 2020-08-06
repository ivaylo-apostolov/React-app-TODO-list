import React from 'react'

const task = (props) => {
    return (
        <li key={props.key} onClick={props.click}>{props.name}----Status:{props.status}</li>
    )
}

export default task;