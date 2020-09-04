import React from 'react';

const Button = (props) => {
    console.log("render button");
    return (
        <div className = 'button'>
            <button onClick = {props.click}>{props.btnName}</button>
        </div>
    )
}

export default Button;