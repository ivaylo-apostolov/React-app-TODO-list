import React from 'react';

const Button = React.memo((props) => {
    console.log("render button");
    return (
        <div className = 'button'>
            <button onClick = {props.click}>{props.btnName}</button>
        </div>
    )
})

export default Button;