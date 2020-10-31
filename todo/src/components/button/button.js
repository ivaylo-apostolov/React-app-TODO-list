import React from 'react';

import './Button.css'

const Button = React.memo((props) => {
    console.log("render button");
    return (
        <div>
            <button className="button" onClick = {props.click}>{props.btnName}</button>
        </div>
    )
})

export default Button;