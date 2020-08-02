import React from 'react';

const button = (props) => {
    return (
        <div className = 'button'>
            <button onClick = {props.click}>{props.btnName}</button>
        </div>
    )
}

export default button;