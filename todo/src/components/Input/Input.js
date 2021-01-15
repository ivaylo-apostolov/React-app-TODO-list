import React from 'react';

const InputText = React.memo((props) => {
    console.log("render input");
    return (
        <div className = 'inputText'>
            <label>{props.labelText}
            <input type = 'text' onChange = {props.changed} title="TodoInput"/>
            </label>
        </div>
    )
})

export default InputText;