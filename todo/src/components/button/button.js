import React from 'react';

const Button = (props) => {
    return (
        <div className = 'button'>
            <button onClick = {props.click}>{props.btnName}</button>
        </div>
    )
}

export default Button;