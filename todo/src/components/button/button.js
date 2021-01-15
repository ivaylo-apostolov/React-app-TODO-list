import React, { Component } from 'react';

import './Button.css'

const Button = React.memo(({ click, btnName, title }) => {
    console.log("render button");
    return (
        <div>
            <button className="button" onClick={click} title="AddTodo">{btnName}</button>
        </div>
    )
})

export default Button;