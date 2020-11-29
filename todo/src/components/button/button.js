import React from 'react';

import './Button.css'

const Button = React.memo(({click, btnName}) => {
    console.log("render button");
    return (
        <div>
            <button className="button" onClick = {click}>{btnName}</button>
        </div>
    )
})

export default Button;